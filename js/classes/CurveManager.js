import * as THREE from 'three';
import {
  CSS2DObject,
  CSS2DRenderer,
} from 'three/addons/renderers/CSS2DRenderer.js';
import { updateTrajectoriesHTML } from '../updateTrajectoriesHTML';
import MultiPlayerManager from './MultiPlayerManager';

class CurveManager {
  constructor(scene, settings, container) {
    this.scene = scene;
    this.settings = settings;
    this.curves = [];
    this.splineHelperObjects = [];
    this.container = container;
    this.initTrajectoryLabelRenderer();
    this.originalCurveColors = [
      '#FF0000', // Red
      '#0000FF', // Blue
      '#FF00FF', // Fuchsia
      '#800000', // Maroon
      '#000080', // Navy
      '#808000', // Olive
      '#800080', // Purple
      '#008080', // Teal
      '#8B4513', // SaddleBrown
      '#FF69B4', // HotPink
      '#4B0082', // Indigo
      '#008000', // Green
      '#FF6347', // Tomato
      '#40E0D0', // Turquoise
    ];
    this.curveColors = [...this.originalCurveColors];
  }

  getSplineHelperObjects() {
    return this.splineHelperObjects;
  }
  getCurves() {
    return this.curves;
  }
  setMultiPlayerManager(multiPlayerManager) {
    this.multiPlayerManager = multiPlayerManager;
  }

  initTrajectoryLabelRenderer() {
    this.trajectoryLabelRenderer = new CSS2DRenderer();
    this.trajectoryLabelRenderer.setSize(
      this.container.offsetWidth,
      this.container.offsetHeight,
    );
    this.trajectoryLabelRenderer.domElement.className = 'trigger-container';
    this.container.appendChild(this.trajectoryLabelRenderer.domElement);
  }
  renderTrajectoryLabels(camera) {
    this.trajectoryLabelRenderer.render(this.scene, camera);
  }

  addSplineObject(position, curveIndex) {
    const geometry = new THREE.BoxGeometry(0.04, 0.04, 0.04);
    const material = new THREE.MeshBasicMaterial({
      color: 0x808080,
    });
    const object = new THREE.Mesh(geometry, material);
    // div for the label
    const labelDiv = document.createElement('div');
    labelDiv.className = 'label';
    const label = new CSS2DObject(labelDiv);
    label.position.set(0, 0.2, 0);

    // Add the label to the object
    object.add(label);
    object.position.copy(position);
    object.curveIndex = curveIndex;
    this.scene.add(object);
    this.splineHelperObjects.push(object);
    return object;
  }

  addNewSplineObject(curveIndex, position = new THREE.Vector3()) {
    this.addSplineObject(position, curveIndex);
    this.updateCurveFromControlPoint({ curveIndex }); //// THIS FIXED THE ISSUE  WITH THE CLOSED Property!!!
  }

  deleteSplineObject(objectIndex) {
    const objectToRemove = this.splineHelperObjects[objectIndex];
    if (!objectToRemove) return;

    const { curveIndex } = objectToRemove;

    // Find the label
    const label = objectToRemove.children.find(
      (child) => child instanceof CSS2DObject,
    );

    // If a label was found, remove it
    if (label) {
      label.element.remove();
      this.scene.remove(label);
    }

    this.scene.remove(objectToRemove);
    objectToRemove.geometry.dispose();
    objectToRemove.material.dispose();

    this.splineHelperObjects.splice(objectIndex, 1);

    this.updateCurveFromControlPoint({ curveIndex });
  }

  deleteSplineObjectforSync(objectIndex) {
    const objectToRemove = this.splineHelperObjects[objectIndex];
    if (!objectToRemove) return;

    // Find the label among the children of the object
    const label = objectToRemove.children.find(
      (child) => child instanceof CSS2DObject,
    );

    // If a label was found, remove it
    if (label) {
      label.element.remove(); // Remove label from the DOM
      this.scene.remove(label); // Remove CSS2DObject from scene graph
    }

    this.scene.remove(objectToRemove);
    objectToRemove.geometry.dispose();
    objectToRemove.material.dispose();

    this.splineHelperObjects.splice(objectIndex, 1);
  }

  addRandomCurve() {
    const randomPositions = [];

    for (let i = 0; i < 4; i++) {
      randomPositions.push(
        new THREE.Vector3(
          THREE.MathUtils.randFloatSpread(2), // x between -1 and 1
          THREE.MathUtils.randFloatSpread(2), // y between -1 and 1
          THREE.MathUtils.randFloat(0, 1), // z between 0 and 1
        ),
      );
    }
    this.addPointsCurve(randomPositions);
  }

  addPointsCurve(points) {
    const curveIndex = this.curves.length;
    const curveObjects = points.map((pos) =>
      this.addSplineObject(pos, curveIndex),
    );
    this.createCurve(
      curveObjects.map((obj) => obj.position),
      this.settings.closed,
    );
    updateTrajectoriesHTML(this, true);
  }

  createCurve(positions, isClosed, selected = false) {
    const curve = new THREE.CatmullRomCurve3(positions, isClosed);
    curve.needsUpdate = true;
    curve.selected = selected;
    this.curves.push(curve);

    // TODO refactor
    const selects = document.querySelectorAll('.trajectory-select');
    selects.forEach((select) => {
      const option = document.createElement('option');
      option.value = this.curves.length - 1;
      option.textContent = this.curves.length;
      select.appendChild(option);
    });
  }

  initCurves() {
    const curvesPositions = [
      [
        new THREE.Vector3(-1, -1, 0.1),
        new THREE.Vector3(1, -1, 0.1),
        new THREE.Vector3(1, 1, 0.1),
        new THREE.Vector3(-1, 1, 0.1),
      ],
      [
        new THREE.Vector3(-1, -1, 0.4),
        new THREE.Vector3(1, -1, 0.4),
        new THREE.Vector3(1, 1, 0.4),
        new THREE.Vector3(-1, 1, 0.4),
      ],
    ];

    curvesPositions.forEach((positions, index) => {
      const curveObjects = positions.map((pos) =>
        this.addSplineObject(pos, index),
      );
      this.createCurve(
        curveObjects.map((obj) => obj.position),
        this.settings.closed,
        index === curvesPositions.length - 1 && true,
      );
    });
  }

  deleteCurve(curveIndex) {
    const curveToRemove = this.curves[curveIndex];
    if (curveToRemove && curveToRemove.mesh) {
      this.scene.remove(curveToRemove.mesh);
      curveToRemove.mesh.geometry.dispose();
      curveToRemove.mesh.material.dispose();
    }

    this.splineHelperObjects = this.splineHelperObjects.filter((object) => {
      if (object.curveIndex === curveIndex) {
        // Remove the label associated with the splineHelperObject
        const label = object.children.find(
          (child) => child instanceof CSS2DObject,
        );
        if (label) {
          label.element.remove();
          this.scene.remove(label);
        }

        this.scene.remove(object);
        object.geometry.dispose();
        object.material.dispose();
        return false;
      }
      return true;
    });

    this.curves.splice(curveIndex, 1);

    this.splineHelperObjects.forEach((object) => {
      if (object.curveIndex > curveIndex) {
        object.curveIndex--;
      }
    });

    for (let i = curveIndex; i < this.curves.length; i++) {
      if (this.curves[i].mesh) {
        this.curves[i].mesh.curveIndex--;
      }
    }

    // TODO refactor
    const selects = document.querySelectorAll('.trajectory-select');
    selects.forEach((select) => {
      const isLastOptionSelected =
        select.options[select.options.length - 1].selected;

      select.remove(select.options.length - 1);

      if (isLastOptionSelected && select.options.length > 0) {
        select.options[select.options.length - 1].selected = true;

        const changeEvent = new Event('change', {
          bubbles: true,
          cancelable: true,
        });

        select.dispatchEvent(changeEvent);
      }
    });
  }

  toggleCurveClosed(curveIndex, isClosed) {
    const curve = this.curves[curveIndex];
    if (curve) {
      curve.closed = isClosed;
    }
    curve.needsUpdate = true;
  }

  toggleCurveSelected(curveIndex, isSelected) {
    const curve = this.curves[curveIndex];
    if (curve) {
      curve.selected = isSelected;
      if (curve.mesh) {
        curve.mesh.geometry.dispose();
      }
      const radius = isSelected ? 0.01 : 0.004;
      const geometry = new THREE.TubeGeometry(curve, 500, radius, 8, false);
      curve.mesh.geometry = geometry;
      this.updateControlPointLabels(curveIndex);
    }
  }

  updateControlPointLabels(curveIndex) {
    const curve = this.curves[curveIndex];
    if (curve) {
      // Calculate the range of indices for the helper objects associated with this curve
      const start = this.curves
        .slice(0, curveIndex)
        .reduce((sum, curve) => sum + curve.points.length, 0);
      const end = start + curve.points.length;

      // Update the labels of the helper objects associated with this curve
      this.splineHelperObjects.slice(start, end).forEach((object, index) => {
        const label = object.children.find(
          (child) => child instanceof CSS2DObject,
        );
        if (label) {
          label.element.textContent = curve.selected ? `P${index + 1} ` : '';
        }
      });
    }
  }

  updateCurveGeometry(curve) {
    const radius = curve.selected ? 0.01 : 0.004;
    const geometry = new THREE.TubeGeometry(curve, 100, radius, 8, false);

    if (curve.mesh) {
      curve.mesh.geometry.dispose();
      curve.mesh.geometry = geometry;
    } else {
      let color;
      if (this.curveColors.length > 0) {
        const randomIndex = Math.floor(Math.random() * this.curveColors.length);
        color = this.curveColors[randomIndex];
        this.curveColors.splice(randomIndex, 1); // Remove the chosen color from the array
      } else {
        // If all colors have been used, reset the array
        this.curveColors = [...this.originalCurveColors];
        color = this.curveColors[0];
        this.curveColors.splice(0, 1);
      }

      console.log('color', color);

      const material = new THREE.MeshLambertMaterial({
        color: new THREE.Color(color),
      });
      curve.mesh = new THREE.Mesh(geometry, material);
      this.scene.add(curve.mesh);
    }
  }

  updateCurveTension(curveIndex, tension) {
    const curve = this.curves[curveIndex];
    if (curve) {
      const points = this.splineHelperObjects
        .filter((object) => object.curveIndex === curveIndex)
        .map((object) => object.position.clone());

      curve.curveType = 'catmullrom';
      curve.tension = tension;
      curve.points = points;

      this.updateCurveGeometry(curve);
    }
  }

  updateCurveFromControlPoint(object) {
    const curve = this.curves[object.curveIndex];

    if (curve) {
      const newPositions = this.splineHelperObjects
        .filter((obj) => obj.curveIndex === object.curveIndex)
        .map((obj) => obj.position);

      curve.points = newPositions;
      curve.needsUpdate = true;

      this.updateCurveGeometry(curve);
    }
  }

  updateSplineOutline() {
    this.curves.forEach((curve, index) => {
      if (!curve) {
        console.warn(`Curve at index ${index} is undefined`);
        return;
      }

      if (curve.needsUpdate) {
        this.updateCurveGeometry(curve);
        curve.needsUpdate = false;
      }
    });
  }
}

export default CurveManager;
