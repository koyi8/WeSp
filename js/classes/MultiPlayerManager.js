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
    this.splineHelperObjects = this.curveManager.getSplineHelperObjects();
  }

  setSceneOnClientConnected() {
    // Send the scene data to the server when a client connects
    this.socket.on('requestScene', () => {
      // Get the current state of the curves UI
      console.log('requestScene received');
      const state = this.getCurvesUIState();
      // Send the state to the server
      this.socket.emit('syncScene', state);
    });
  }

  getSceneOnClientConnected() {
    // Listen for the 'syncScene' event from the server
    this.socket.on('syncScene', (state) => {
      // Clear the current scene
      console.log('syncScene received');

      // Set the state of the curves UI
      this.setCurvesUIState(state);
    });
  }

  getCurvesUIState() {
    const state = {
      curves: this.curves.map((curve, index) => ({
        tension: curve.tension,
        closed: curve.closed,
        points: curve.points.map(({ x, y, z }) => ({ x, y, z })),
      })),
      splineHelperObjects: this.splineHelperObjects,
    };
    console.log(this.curveManager.splineHelperObjects);
    console.log(state.curves.length);
    return JSON.stringify(state);
  }

  setCurvesUIState(json) {
    // Parse the JSON string back into an object
    const state = JSON.parse(json);
    console.log(state.curves);

    let splineHelperObjects = this.curveManager.getSplineHelperObjects();

    // If there are more curves in curveManager than in state, remove the extra curves
    while (this.curveManager.curves.length > state.curves.length) {
      this.curveManager.deleteCurve(this.curveManager.curves.length - 1);
    }

    state.curves.forEach((curveData, index) => {
      let curve;
      console.log(`Processing curve at index ${index}`);

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
        //this.curveManager.curves.push(curve);
      }

      curve.closed = curveData.closed;
      curve.tension = curveData.tension;
      curve.needsUpdate = true;
    });
    updateTrajectoriesHTML(this.curveManager);
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
        json = this.getCurvesUIState();
        console.log(json); // You can replace this with code to send the JSON to the server
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
