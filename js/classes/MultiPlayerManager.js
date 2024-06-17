import * as THREE from 'three';
import { updateTrajectoriesHTML } from '../GUI/trajectoriesModule_GUI';

class MultiPlayerManager {
  constructor(scene, trajectoryManager, objectManager, socket) {
    this.scene = scene;
    this.trajectoryManager = trajectoryManager;
    this.objectManager = objectManager;
    this.socket = socket;
    // trajectories and splineobjects
    this.trajectories = this.trajectoryManager.getTrajectories();
    this.objects = this.objectManager.getObjects();
    this.splineHelperObjects = this.trajectoryManager.getSplineHelperObjects();
    this.socketID = '';
    this.clients = {};
    this.clientColor = this.objectManager.objectColor;
    this.shouldEmitLogs = false;
  }

  // RECEIVE

  initSocketID() {
    return new Promise((resolve) => {
      this.socket.on('connect', () => {
        console.log('Connected to server!');
        this.socketID = this.socket.id; // unique random 20-character id is given to client from server
        console.log(`Your socket id is  ${this.socketID}`);
        resolve(this.socketID);
      });
    });
  }

  receiveClientList() {
    this.socket.on('clientList', (clients) => {
      this.clients = clients;
      this.setClientsDiv(clients);
    });
  }

  getClientColor() {
    this.socket.on('assignColor', ({ color }) => {
      this.objectManager.objectColor = color;
    });
  }

  sendLogDatatoServer(interactionLog) {
    if (!this.shouldEmitLogs) {
      return;
    }
    this.socket.emit('logData', interactionLog);
  }

  listenRequestLogging() {
    this.socket.on('requestLogData', () => {
      this.shouldEmitLogs = true;
      console.log('shouldEmitLogs:', this.shouldEmitLogs);
    });
    this.socket.on('stopLogData', () => {
      this.shouldEmitLogs = false;
      console.log('shouldEmitLogs:', this.shouldEmitLogs);
    });
  }

  setClientsDiv(clients) {
    let html = '<div id="clients">';

    Object.keys(clients).forEach((clientId, index) => {
      // Get the client color
      const clientColor = clients[clientId].color;

      // bounding box marking the local client
      const boundingBox =
        clientId === this.socket.id ? 'border: 2px solid black;' : '';

      html += `<div style="width: 40%; ${boundingBox}">
        <span style="background-color: ${clientColor}; border-radius: 50%; width: 10px; height: 10px; display: inline-block;"></span>
        Client ${index + 1}: ${clientId}
      </div>`;
    });

    html += '</div>';

    // Get the settings-container div
    const container = document.getElementById('settings-container');

    const oldClientsDiv = document.getElementById('clients');
    if (oldClientsDiv) {
      oldClientsDiv.remove();
    }

    // Add the new clients div to the container
    container.insertAdjacentHTML('beforeend', html);
  }

  updateClientsDiv() {
    this.socket.on('syncClientsDiv', (clients) => {
      this.setClientsDiv(clients);
    });
  }

  getTrajectoriesOnClientConnected() {
    let trajectoriesState;
    this.socket.on('requestTrajectoryState', () => {
      trajectoriesState = this.getTrajectoriesUIState();
      this.socket.emit('syncTrajectories', { trajectoriesState });
    });
  }

  getObjectsOnClientConnected() {
    let objectsState;
    this.socket.on('requestObjectsState', () => {
      // Get the current state of the objects
      objectsState = this.getObjectsClientState();
      this.socket.emit('syncObjects', { objectsState });
    });
  }

  sendObjectsClientsLengthToServer() {
    let objectsState = this.getObjectsClientState();
    this.socket.emit('updateObjectsLength', { objectsState });
  }

  sendUpdateObjectsClientsStateToServer() {
    let objectsState = this.getObjectsClientState();
    this.socket.emit('updateValuesClientsObjects', { objectsState });
  }

  updateObjectsClientsStateFromServer() {
    this.socket.on('updateValuesClientsObjects', ({ objectsState }) => {
      this.updateObjectsClientSettings(objectsState);
    });
  }

  setTrajectoriesOnClientConnected() {
    this.socket.on('syncTrajectories', ({ trajectoriesState }) => {
      this.deleteTrajectoriesOnClientConnected();
      this.setTrajectoriesUIState(trajectoriesState);
      this.socket.emit('updateClientsDiv');
    });
  }

  setObjectsOnClientConnected() {
    this.socket.on('syncObjects', ({ objectsState }) => {
      this.setObjectsClientState(objectsState);
    });
  }

  setObjectsOnClientDisconnected() {
    this.socket.on('syncObjectsOnClientDisconnected', ({ objectsState }) => {
      this.deleteObjectsClientOnDisconnect(objectsState);
    });
  }

  updateObjectsClientOnChange() {
    this.socket.on('updateObjectsLength', ({ objectsState }) => {
      this.updateObjectsClientLength(objectsState);
    });
  }

  updateTrajectoriesOnChanges() {
    this.socket.on('updateTrajectories', (state) => {
      this.setTrajectoriesUIState(state);
    });
  }

  sendTrajectoriesStateToServer = () => {
    const state = this.getTrajectoriesUIState();
    this.socket.emit('updateTrajectories', state);
  };

  getTrajectoriesUIState() {
    const state = {
      trajectories: this.trajectories.map((trajectory, index) => ({
        tension: trajectory.tension,
        closed: trajectory.closed,
        color: {
          r: trajectory.mesh.material.color.r,
          g: trajectory.mesh.material.color.g,
          b: trajectory.mesh.material.color.b,
        },
        points: trajectory.points.map(({ x, y, z }) => ({ x, y, z })),
      })),
      splineHelperObjects: this.splineHelperObjects,
    };
    return JSON.stringify(state);
  }

  deleteTrajectoriesOnClientConnected() {
    for (
      let index = this.trajectoryManager.trajectories.length - 1;
      index >= 0;
      index--
    ) {
      this.trajectoryManager.deleteTrajectory(index);
    }
  }

  setTrajectoriesUIState(json) {
    // Parse the JSON string back into an object
    const state = JSON.parse(json);

    // Initialize a mapping of old indices to new indices
    let indexMapping = new Map();
    this.trajectoryManager.trajectories.forEach((trajectory, index) => {
      indexMapping.set(index, index);
    });

    // Remove the extra trajectories and update indexMapping
    while (
      this.trajectoryManager.trajectories.length > state.trajectories.length
    ) {
      const lastIndex = this.trajectoryManager.trajectories.length - 1;
      this.trajectoryManager.deleteTrajectory(lastIndex);
      indexMapping.delete(lastIndex);
    }

    state.trajectories.forEach((trajectoryData, newIndex) => {
      let trajectory;
      const positions = trajectoryData.points.map(
        (point) => new THREE.Vector3(point.x, point.y, point.z),
      );

      if (newIndex < this.trajectoryManager.trajectories.length) {
        // Find the correct index using indexMapping
        const actualIndex = indexMapping.get(newIndex);
        trajectory = this.trajectoryManager.trajectories[actualIndex];
        trajectory.points.length = 0;

        let i = this.trajectoryManager.splineHelperObjects.length;
        // replace the splineHelperObjects for the trajectory
        while (i--) {
          if (
            this.trajectoryManager.splineHelperObjects[i].trajectoryIndex ===
            actualIndex
          ) {
            this.trajectoryManager.deleteSplineObjectforSync(i);
          }
        }

        trajectoryData.points.forEach((point, pointIndex) => {
          this.trajectoryManager.addSplineObject(
            positions[pointIndex],
            actualIndex,
          );
        });
      } else {
        this.trajectoryManager.addPointsTrajectory(positions);
        trajectory =
          this.trajectoryManager.trajectories[
            this.trajectoryManager.trajectories.length - 1
          ];
        this.trajectoryManager.updateTrajectoryGeometry(trajectory);
        // Update indexMapping
        indexMapping.set(
          newIndex,
          this.trajectoryManager.trajectories.length - 1,
        );
      }

      trajectory.closed = trajectoryData.closed;
      this.trajectoryManager.toggleTrajectoryClosed(
        newIndex,
        trajectory.closed,
      );

      trajectory.tension = trajectoryData.tension;
      this.trajectoryManager.updateTrajectoryTension(
        newIndex,
        parseFloat(trajectory.tension),
      );

      if (trajectory.mesh && trajectory.mesh.material) {
        trajectory.mesh.material.color.set(
          trajectoryData.color.r,
          trajectoryData.color.g,
          trajectoryData.color.b,
        );
      }
      trajectory.needsUpdate = true;
    });

    updateTrajectoriesHTML(this.trajectoryManager);
  }

  getObjectsClientState() {
    const state = {
      objects: this.objects.map((object) => {
        if (object === null) return null;
        return {
          ...object,
          color: {
            r: object.mesh?.material.color.r,
            g: object.mesh?.material.color.g,
            b: object.mesh?.material.color.b,
          },
        };
      }),
    };

    return JSON.stringify(state);
  }

  updateObjectsClientSettings(statestring) {
    const state = JSON.parse(statestring);
    for (const clientID in state) {
      if (clientID === this.socketID) {
        continue;
      }
      const clientState = state[clientID];
      clientState.Objects.forEach((objectState, index) => {
        if (objectState !== null) {
          // not defined
          if (!this.objectManager.clientObjects[clientID]) {
            return;
          }

          const object = this.objectManager.clientObjects[clientID][index];
          if (object !== undefined) {
            object.animate = objectState.animate;
            object.loop = objectState.loop;
            object.speed = this.lerp(object.speed, objectState.speed, 0.1);
            // Discard object update from network dropouts
            const positionDifference = Math.abs(
              objectState.position - object.position,
            );
            if (
              !object.animate ||
              (object.animate && positionDifference < 0.5)
            ) {
              let lerpValue = object.animate ? 0.01 : 0.1;
              object.position = this.lerp(
                object.position,
                objectState.position,
                lerpValue,
              );
            }
            object.trajectoryIndex = objectState.trajectoryIndex;
            object.direction = objectState.direction;
          }
        }
      });
    }
  }

  // linear interpolation
  lerp(start, end, t) {
    return start * (1 - t) + end * t;
  }

  setObjectsClientState(stateString) {
    const state = JSON.parse(stateString);
    for (const clientID in state) {
      // skip for local client
      if (clientID === this.socketID) {
        continue;
      }
      const clientState = state[clientID];
      // Create objects for all objects in the clients object
      clientState.Objects.forEach((objectState, index) => {
        if (objectState !== null) {
          this.objectManager.createObjectFromClient(
            clientID,
            this.clients,
            objectState,
          );
        }
      });
    }
    this.clients = state;
  }

  updateObjectsClientLength(stateString) {
    const newState = JSON.parse(stateString);
    for (const clientID in newState) {
      // skip for local client
      if (clientID === this.socketID) {
        continue;
      }
      const newClientState = newState[clientID];
      const oldClientState = this.clients[clientID];
      // Update the Objects array for each client
      newClientState.Objects.forEach((objectState, index) => {
        if (
          objectState !== null &&
          (oldClientState.Objects[index] === undefined ||
            oldClientState.Objects[index] === null)
        ) {
          this.objectManager.createObjectFromClient(
            clientID,
            this.clients,
            objectState,
          );
        } else if (
          (objectState === null ||
            newState[clientID].Objects.length <
              oldClientState.Objects.length) &&
          oldClientState.Objects[index] !== undefined
        ) {
          this.objectManager.deleteObjectFromClient(
            clientID,
            this.clients,
            index,
          );
        }
      });
    }
    this.clients = newState;
  }

  deleteObjectsClientOnDisconnect(stateString) {
    const newState = JSON.parse(stateString);
    for (const clientID in this.clients) {
      const newClientState = newState[clientID];
      const oldClientState = this.clients[clientID];
      if (
        !newClientState &&
        oldClientState &&
        this.objectManager.clientObjects[clientID]
      ) {
        for (
          let i = 0;
          i < this.objectManager.clientObjects[clientID].length;
          i++
        ) {
          this.objectManager.deleteObjectFromClient(clientID, this.clients, i);
        }
      }
    }
  }

  interactionLogGUI() {
    const container = document.getElementById('settings-container');

    const startCheckbox = document.createElement('input');
    startCheckbox.type = 'checkbox';
    startCheckbox.id = 'startLoggingCheckbox';

    startCheckbox.addEventListener('change', () => {
      if (startCheckbox.checked) {
        this.socket.emit('startLogging');
      } else {
        this.socket.emit('stopLogging');
      }
    });
    this.socket.on('updateCheckbox', () => {
      startCheckbox.checked = this.shouldEmitLogs;
    });

    const startLabel = document.createElement('label');
    startLabel.htmlFor = 'startLoggingCheckbox';
    startLabel.textContent = 'Start/Stop Logging';

    container.appendChild(startCheckbox);
    container.appendChild(startLabel);

    // button for logMarker
    const markerButton = document.createElement('button');
    markerButton.id = 'markerButton';
    markerButton.textContent = 'Marker';

    markerButton.addEventListener('click', () => {
      this.socket.emit('logMarker');
    });

    container.appendChild(markerButton);
  }
}

export default MultiPlayerManager;
