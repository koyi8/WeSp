import * as THREE from 'three';
import {
  CSS2DObject,
  CSS2DRenderer,
} from 'three/addons/renderers/CSS2DRenderer.js';
import { updateTrajectoriesHTML } from '../updateTrajectoriesHTML';
import { createTriggerControlDiv } from '../createTriggerControlDiv';
import { positionsArray } from '../..';

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
  }

  // RECEIVE

  initSocketID() {
    this.socket.on('connect', () => {
      console.log('Connected to server!');
      this.socketID = this.socket.id; // unique random 20-character id is given to client from server
      console.log(`Your socket id is  ${this.socketID}`);
    });
  }

  receiveClientList() {
    this.socket.on('clientList', (clients) => {
      console.log('Client list received:', clients);
      this.clients = clients;
      this.setClientsDiv(clients);
    });
  }

  setClientsDiv(clients) {
    let html = '<div id="clients">';

    Object.keys(clients).forEach((clientId, index) => {
      // Highlight the client if it matches the client id
      const highlight =
        clientId === this.socket.id ? 'style="background-color: yellow;"' : '';

      html += `<div ${highlight}>Client ${index + 1}: ${clientId}</div>`;

      // Add a checkbox for each trigger
      this.triggers.forEach((trigger, triggerIndex) => {
        if (trigger !== null) {
          const checked =
            clients[clientId].triggers &&
            clients[clientId].triggers[triggerIndex]
              ? 'checked'
              : '';
          html += `<div><input type="checkbox" id="trigger${triggerIndex}" ${checked}> Trigger ${
            triggerIndex + 1
          }</div>`;
        }
      });
    });

    html += '</div>';

    // Update the settings-container div
    const container = document.getElementById('settings-container');
    container.innerHTML = html;
  }

  updateClientsDiv() {
    this.socket.on('syncClientsDiv', (clients) => {
      console.log('syncClientsDiv received');
      this.setClientsDiv(clients);
      console.log(this.clients);
    });
  }

  setSceneOnClientConnected() {
    // Send the scene data to the server when a client connects
    this.socket.on('requestScene', () => {
      console.log('requestScene received');
      // Get the current state of the curves and triggers UI
      const curvesState = this.getCurvesUIState();
      const triggersState = this.getTriggersUIState();
      // Send the states to the server
      this.socket.emit('syncScene', { curvesState, triggersState });
    });
  }

  getSceneOnClientConnected() {
    // Listen for the 'syncScene' event from the server
    this.socket.on('syncScene', ({ curvesState, triggersState }) => {
      console.log('syncScene received');
      // Clear the current scene
      // Set the state of the curves and triggers UI
      this.setCurvesUIState(curvesState);
      this.setTriggersUIState(triggersState);
      this.socket.emit('updateClientsDiv');
    });
  }

  updateSceneOnChanges() {
    // Listen for the 'updateScene' event from the server
    this.socket.on('updateScene', (state) => {
      // Update the state of the curves UI
      this.setCurvesUIState(state);
    });
  }

  sendStatetoServer = () => {
    const state = this.getCurvesUIState();
    this.socket.emit('updateScene', state);
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

  setCurvesUIState(json) {
    // Parse the JSON string back into an object
    const state = JSON.parse(json);
    //console.log(state.curves);

    let splineHelperObjects = this.curveManager.getSplineHelperObjects();

    // If there are more curves in curveManager than in state, remove the extra curves
    while (this.curveManager.curves.length > state.curves.length) {
      this.curveManager.deleteCurve(this.curveManager.curves.length - 1);
    }

    state.curves.forEach((curveData, index) => {
      let curve;
      //console.log(`Processing curve at index ${index}`);

      // Convert the points to THREE.Vector3 objects
      const positions = curveData.points.map(
        (point) => new THREE.Vector3(point.x, point.y, point.z),
      );

      if (index < this.curveManager.curves.length) {
        // Replace the existing curve
        curve = this.curveManager.curves[index];
        curve.points.length = 0;

        let i = splineHelperObjects.length;
        while (i--) {
          if (splineHelperObjects[i].curveIndex === index) {
            this.curveManager.deleteSplineObjectforSync(i);
          }
        }
        // Add the new points
        curveData.points.forEach((point, pointIndex) => {
          this.curveManager.addNewSplineObject(index, positions[pointIndex]);
        });
      } else {
        // Add a new curve
        this.curveManager.addPointsCurve(positions);
        curve = this.curveManager.curves[this.curveManager.curves.length - 1];
        this.curveManager.updateCurveGeometry(curve);
      }

      curve.closed = curveData.closed;
      curve.tension = curveData.tension;
      if (curve.mesh && curve.mesh.material) {
        curve.mesh.material.color.set(
          curveData.color.r,
          curveData.color.g,
          curveData.color.b,
        );
      }
      curve.needsUpdate = true;
      //console.log(curve.mesh.material.color);
    });
    updateTrajectoriesHTML(this.curveManager);
  }

  getTriggersUIState() {
    const state = {
      triggers: this.triggers.map((trigger) => {
        if (trigger === null) return null;
        return {
          buttonID: trigger.buttonID,
          animate: trigger.animate,
          loop: trigger.loop,
          speed: trigger.speed,
          position: trigger.position,
          curveIndex: trigger.curveIndex,
          direction: trigger.direction,
          color: {
            r: trigger.mesh.material.color.r,
            g: trigger.mesh.material.color.g,
            b: trigger.mesh.material.color.b,
          },
        };
      }),
    };
    return JSON.stringify(state);
  }

  setTriggersUIState(stateString) {
    const state = JSON.parse(stateString);
    console.log('State of trigger is:', state.triggers);
    // Create a placeholder for each element in state.triggers
    state.triggers.forEach((triggerState, index) => {
      const button = document.getElementById(`create-trigger-${index}`); // use default id for button on initial creation
      this.triggerManager.createTrigger(button);
      const newTrigger = this.triggerManager.triggers[index];
      if (triggerState !== null && newTrigger !== undefined) {
        newTrigger.animate = triggerState.animate;
        newTrigger.loop = triggerState.loop;
        newTrigger.speed = triggerState.speed;
        newTrigger.position = triggerState.position;
        newTrigger.curveIndex = triggerState.curveIndex;
        newTrigger.direction = triggerState.direction;
        newTrigger.mesh.material.color.r = triggerState.color.r;
        newTrigger.mesh.material.color.g = triggerState.color.g;
        newTrigger.mesh.material.color.b = triggerState.color.b;
        this.triggerManager.updateTriggerControlDiv(index);
      }
    });

    // Delete the placeholders that correspond to nulls in state.triggers
    state.triggers.forEach((triggerState, index) => {
      if (
        triggerState === null &&
        this.triggerManager.triggers[index] !== undefined
      ) {
        this.triggerManager.deleteTrigger(index);
      }
    });

    this.triggers = this.triggerManager.triggers;
  }

  toggleDummyState() {
    const container = document.getElementById('settings-container');
    container.innerHTML = '';

    let json = null;

    // Create a new checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'curvesCheckbox';

    // Add an event listener to the checkbox
    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        // Call getUIStateAsJSON when the checkbox is checked

        const button = document.getElementById('create-trigger-0');
        this.triggerManager.createTrigger(button);
        json = this.getTriggersUIState();
        console.log(json);
      }
    });
    // Create a new label
    const label = document.createElement('label');
    label.htmlFor = 'curvesCheckbox';
    label.textContent = 'Toggle UI state as JSON';

    // Add the checkbox and label to the container
    container.appendChild(checkbox);
    container.appendChild(label);

    // Create a new checkbox for setUIStateFromJSON
    const setCheckbox = document.createElement('input');
    setCheckbox.type = 'checkbox';
    setCheckbox.id = 'setCurvesCheckbox';

    // Add an event listener to the setCheckbox
    setCheckbox.addEventListener('change', () => {
      if (setCheckbox.checked) {
        // Call setUIStateFromJSON when the checkbox is checked
        if (json) {
          this.setCurvesUIState(json);
        }
      }
    });

    // Create a new label for setCheckbox
    const setLabel = document.createElement('label');
    setLabel.htmlFor = 'setCurvesCheckbox';
    setLabel.textContent = 'Set UI state from JSON';

    // Add the setCheckbox and setLabel to the container
    container.appendChild(setCheckbox);
    container.appendChild(setLabel);
  }
}
export default MultiPlayerManager;
