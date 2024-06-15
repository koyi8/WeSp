import * as THREE from 'three';
import { updateTrajectoriesHTML } from '../updateTrajectoriesHTML';

class MultiPlayerManager {
  constructor(scene, curveManager, triggerManager, socket) {
    this.scene = scene;
    this.curveManager = curveManager;
    this.triggerManager = triggerManager;
    this.socket = socket;
    // curves and splineobjects
    this.curves = this.curveManager.getCurves();
    this.triggers = this.triggerManager.getTriggers();
    this.splineHelperObjects = this.curveManager.getSplineHelperObjects();
    this.socketID = '';
    this.clients = {};
    this.clientColor = this.triggerManager.triggerColor;
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
      this.triggerManager.triggerColor = color;
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

    // Remove the old clients div if it exists
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

  getCurvesOnClientConnected() {
    let curvesState;
    this.socket.on('requestCurveState', () => {
      curvesState = this.getCurvesUIState();
      this.socket.emit('syncCurves', { curvesState });
    });
  }

  getTriggersOnClientConnected() {
    let triggersState;
    this.socket.on('requestTriggersState', () => {
      // Get the current state of the triggers
      triggersState = this.getTriggersClientState();
      this.socket.emit('syncTriggers', { triggersState });
    });
  }

  sendTriggersClientsLengthToServer() {
    let triggersState = this.getTriggersClientState();
    this.socket.emit('updateTriggersLength', { triggersState });
  }

  sendUpdateTriggersClientsStateToServer() {
    let triggersState = this.getTriggersClientState();
    this.socket.emit('updateValuesClientsTriggers', { triggersState });
  }

  updateTriggersClientsStateFromServer() {
    this.socket.on('updateValuesClientsTriggers', ({ triggersState }) => {
      this.updateTriggersClientSettings(triggersState);
    });
  }

  setCurvesOnClientConnected() {
    // Listen for the 'syncCurves' event from the server
    this.socket.on('syncCurves', ({ curvesState }) => {
      this.deleteCurvesOnClientConnected();
      // Set the state of the curves
      this.setCurvesUIState(curvesState);
      this.socket.emit('updateClientsDiv');
    });
  }

  setTriggersOnClientConnected() {
    // Listen for the 'syncTriggers' event from the server
    this.socket.on('syncTriggers', ({ triggersState }) => {
      // Set the state of the triggers
      this.setTriggersClientState(triggersState);
    });
  }

  setTriggersOnClientDisconnected() {
    this.socket.on('syncTriggersOnClientDisconnected', ({ triggersState }) => {
      this.deleteTriggersClientOnDisconnect(triggersState);
    });
  }

  updateTriggersClientOnChange() {
    // Listen for 'updateTriggersLenght' event from the server
    this.socket.on('updateTriggersLength', ({ triggersState }) => {
      this.updateTriggersClientLength(triggersState);
    });
  }

  updateCurvesOnChanges() {
    // Listen for the 'updateCurves' event from the server
    this.socket.on('updateCurves', (state) => {
      // Update the state of the curves UI
      this.setCurvesUIState(state);
    });
  }

  sendCurvesStateToServer = () => {
    const state = this.getCurvesUIState();
    this.socket.emit('updateCurves', state);
  };

  getCurvesUIState() {
    const state = {
      curves: this.curves.map((curve, index) => ({
        tension: curve.tension,
        closed: curve.closed,
        color: {
          r: curve.mesh.material.color.r,
          g: curve.mesh.material.color.g,
          b: curve.mesh.material.color.b,
        },
        points: curve.points.map(({ x, y, z }) => ({ x, y, z })),
      })),
      splineHelperObjects: this.splineHelperObjects,
    };
    return JSON.stringify(state);
  }

  deleteCurvesOnClientConnected() {
    for (let index = this.curveManager.curves.length - 1; index >= 0; index--) {
      this.curveManager.deleteCurve(index);
    }
  }

  setCurvesUIState(json) {
    // Parse the JSON string back into an object
    const state = JSON.parse(json);

    // Initialize a mapping of old indices to new indices
    let indexMapping = new Map();
    this.curveManager.curves.forEach((curve, index) => {
      indexMapping.set(index, index);
    });

    // Remove the extra curves and update indexMapping
    while (this.curveManager.curves.length > state.curves.length) {
      const lastIndex = this.curveManager.curves.length - 1;
      this.curveManager.deleteCurve(lastIndex);
      indexMapping.delete(lastIndex);
    }

    state.curves.forEach((curveData, newIndex) => {
      let curve;
      const positions = curveData.points.map(
        (point) => new THREE.Vector3(point.x, point.y, point.z),
      );

      if (newIndex < this.curveManager.curves.length) {
        // Find the correct index using indexMapping
        const actualIndex = indexMapping.get(newIndex);
        curve = this.curveManager.curves[actualIndex];
        curve.points.length = 0;

        let i = this.curveManager.splineHelperObjects.length;
        // replace the splineHelperObjects for the curve
        while (i--) {
          if (
            this.curveManager.splineHelperObjects[i].curveIndex === actualIndex
          ) {
            this.curveManager.deleteSplineObjectforSync(i);
          }
        }

        curveData.points.forEach((point, pointIndex) => {
          this.curveManager.addSplineObject(positions[pointIndex], actualIndex);
        });
      } else {
        this.curveManager.addPointsCurve(positions);
        curve = this.curveManager.curves[this.curveManager.curves.length - 1];
        this.curveManager.updateCurveGeometry(curve);
        // Update indexMapping
        indexMapping.set(newIndex, this.curveManager.curves.length - 1);
      }

      curve.closed = curveData.closed;
      this.curveManager.toggleCurveClosed(newIndex, curve.closed);

      curve.tension = curveData.tension;
      this.curveManager.updateCurveTension(newIndex, parseFloat(curve.tension));

      if (curve.mesh && curve.mesh.material) {
        curve.mesh.material.color.set(
          curveData.color.r,
          curveData.color.g,
          curveData.color.b,
        );
      }
      curve.needsUpdate = true;
    });

    updateTrajectoriesHTML(this.curveManager);
  }

  getTriggersClientState() {
    const state = {
      triggers: this.triggers.map((trigger) => {
        if (trigger === null) return null;
        return {
          ...trigger,
          color: {
            r: trigger.mesh?.material.color.r,
            g: trigger.mesh?.material.color.g,
            b: trigger.mesh?.material.color.b,
          },
        };
      }),
    };

    return JSON.stringify(state);
  }

  updateTriggersClientSettings(statestring) {
    const state = JSON.parse(statestring);
    for (const clientID in state) {
      if (clientID === this.socketID) {
        continue;
      }
      const clientState = state[clientID];
      clientState.Triggers.forEach((triggerState, index) => {
        if (triggerState !== null) {
          // not defined
          if (!this.triggerManager.clientTriggers[clientID]) {
            return;
          }

          const trigger = this.triggerManager.clientTriggers[clientID][index];
          if (trigger !== undefined) {
            trigger.animate = triggerState.animate;
            trigger.loop = triggerState.loop;
            trigger.speed = this.lerp(trigger.speed, triggerState.speed, 0.1);
            // Discard trigger update from network dropouts
            const positionDifference = Math.abs(
              triggerState.position - trigger.position,
            );
            if (
              !trigger.animate ||
              (trigger.animate && positionDifference < 0.5)
            ) {
              //console.log('Position difference:', positionDifference);
              let lerpValue = trigger.animate ? 0.01 : 0.1;
              trigger.position = this.lerp(
                trigger.position,
                triggerState.position,
                lerpValue,
              );
            }
            trigger.curveIndex = triggerState.curveIndex;
            trigger.direction = triggerState.direction;
          }
        }
      });
    }
  }

  lerp(start, end, t) {
    return start * (1 - t) + end * t;
  }

  setTriggersClientState(stateString) {
    const state = JSON.parse(stateString);
    for (const clientID in state) {
      // skip for local client
      if (clientID === this.socketID) {
        continue;
      }
      const clientState = state[clientID];
      // Create triggers for all triggers in the clients object
      clientState.Triggers.forEach((triggerState, index) => {
        if (triggerState !== null) {
          // A trigger exists, create it
          this.triggerManager.createTriggerFromClient(
            clientID,
            this.clients,
            triggerState,
          );
        }
      });
    }
    this.clients = state;
  }

  updateTriggersClientLength(stateString) {
    const newState = JSON.parse(stateString);
    for (const clientID in newState) {
      // skip for local client
      if (clientID === this.socketID) {
        continue;
      }
      const newClientState = newState[clientID];
      const oldClientState = this.clients[clientID];
      // Update the Triggers array for each client
      newClientState.Triggers.forEach((triggerState, index) => {
        if (
          triggerState !== null &&
          (oldClientState.Triggers[index] === undefined ||
            oldClientState.Triggers[index] === null)
        ) {
          // A trigger was added, create it
          this.triggerManager.createTriggerFromClient(
            clientID,
            this.clients,
            triggerState,
          );
        } else if (
          (triggerState === null ||
            newState[clientID].Triggers.length <
              oldClientState.Triggers.length) &&
          oldClientState.Triggers[index] !== undefined
        ) {
          // A trigger was deleted, delete it
          this.triggerManager.deleteTriggerFromClient(
            clientID,
            this.clients,
            index,
          );
        }
      });
    }
    // Update the previous state
    this.clients = newState;
  }

  deleteTriggersClientOnDisconnect(stateString) {
    const newState = JSON.parse(stateString);
    for (const clientID in this.clients) {
      const newClientState = newState[clientID];
      const oldClientState = this.clients[clientID];
      if (
        !newClientState &&
        oldClientState &&
        this.triggerManager.clientTriggers[clientID]
      ) {
        for (
          let i = 0;
          i < this.triggerManager.clientTriggers[clientID].length;
          i++
        ) {
          this.triggerManager.deleteTriggerFromClient(
            clientID,
            this.clients,
            i,
          );
        }
      }
    }
  }

  toggleDummyState() {
    const container = document.getElementById('settings-container');

    // Create a new checkbox for startLogging
    const startCheckbox = document.createElement('input');
    startCheckbox.type = 'checkbox';
    startCheckbox.id = 'startLoggingCheckbox';

    // Add an event listener to the startCheckbox
    startCheckbox.addEventListener('change', () => {
      if (startCheckbox.checked) {
        // Emit 'startLogging' event when the checkbox is checked
        this.socket.emit('startLogging');
      } else {
        // Emit 'stopLogging' event when the checkbox is unchecked
        this.socket.emit('stopLogging');
      }
    });
    // Add an event listener to the socket to update the checkbox
    this.socket.on('updateCheckbox', () => {
      startCheckbox.checked = this.shouldEmitLogs;
    });

    // Create a new label for startCheckbox
    const startLabel = document.createElement('label');
    startLabel.htmlFor = 'startLoggingCheckbox';
    startLabel.textContent = 'Start/Stop Logging';

    // Add the startCheckbox and startLabel to the container
    container.appendChild(startCheckbox);
    container.appendChild(startLabel);

    // Create a new button for logMarker
    const markerButton = document.createElement('button');
    markerButton.id = 'markerButton';
    markerButton.textContent = 'Marker';

    // Add a click event listener to the markerButton
    markerButton.addEventListener('click', () => {
      // Emit 'logMarker' event when the button is clicked
      this.socket.emit('logMarker');
    });

    container.appendChild(markerButton);
  }
}

export default MultiPlayerManager;
