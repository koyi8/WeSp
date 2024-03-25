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

  getCurvesUIState() {
    const state = {
      curves: this.curves.map((curve, index) => ({
        tension: curve.tension,
        closed: curve.closed,
        points: curve.points.map(({ x, y, z }) => ({ x, y, z })),
      })),
      splineHelperObjects: this.splineHelperObjects.map((helperObject) => ({
        position: {
          x: helperObject.position.x,
          y: helperObject.position.y,
          z: helperObject.position.z,
        },
        // Include any other properties of the helper object that you want to save
      })),
    };
    return JSON.stringify(state);
  }

  setCurvesUIState(json) {
    // Parse the JSON string back into an object
    const state = JSON.parse(json);

    const curves = this.curveManager.getCurves();
    state.curves.forEach((curveData, index) => {
      if (index < curves.length) {
        const curve = curves[index];
        // Clear the existing points
        curve.points.length = 0;
        // Add the new points
        curveData.points.forEach((point) => {
          curve.points.push(new THREE.Vector3(point.x, point.y, point.z));
        });

        curve.closed = false;
        curve.tension = curveData.tension;
        curve.needsUpdate = true;
      }
    });
    // Replace the splineHelperObjects with the ones from the state
    this.splineHelperObjects = state.splineHelperObjects;

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
