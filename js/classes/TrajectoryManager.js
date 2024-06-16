import * as THREE from 'three';
import {
  CSS2DObject,
  CSS2DRenderer,
} from 'three/addons/renderers/CSS2DRenderer.js';
import { updateTrajectoriesHTML } from '../GUI/trajectoriesModule_GUI';
import MultiPlayerManager from './MultiPlayerManager';

class TrajectoryManager {
  constructor(scene, settings, container) {
    this.scene = scene;
    this.settings = settings;
    this.trajectories = [];
    this.splineHelperObjects = [];
    this.container = container;
    this.initTrajectoryLabelRenderer();
    this.originalTrajectoryColors = [
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
    this.trajectoryColors = [...this.originalTrajectoryColors];
  }

  getSplineHelperObjects() {
    return this.splineHelperObjects;
  }
  getTrajectories() {
    return this.trajectories;
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
    this.trajectoryLabelRenderer.domElement.className = 'object-container';
    this.container.appendChild(this.trajectoryLabelRenderer.domElement);
  }
  renderTrajectoryLabels(camera) {
    this.trajectoryLabelRenderer.render(this.scene, camera);
  }

  addSplineObject(position, trajectoryIndex) {
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
    object.trajectoryIndex = trajectoryIndex;
    this.scene.add(object);
    this.splineHelperObjects.push(object);
    return object;
  }

  addNewSplineObject(trajectoryIndex, position = new THREE.Vector3()) {
    this.addSplineObject(position, trajectoryIndex);
    this.updateTrajectoryFromControlPoint({ trajectoryIndex }); //// THIS FIXED THE ISSUE  WITH THE CLOSED Property!!!
  }

  deleteSplineObject(objectIndex) {
    const objectToRemove = this.splineHelperObjects[objectIndex];
    if (!objectToRemove) return;

    const { trajectoryIndex } = objectToRemove;

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

    this.updateTrajectoryFromControlPoint({ trajectoryIndex });
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

  addRandomTrajectory() {
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
    this.addPointsTrajectory(randomPositions);
  }

  addPointsTrajectory(points) {
    const trajectoryIndex = this.trajectories.length;
    const trajectoryObjects = points.map((pos) =>
      this.addSplineObject(pos, trajectoryIndex),
    );
    this.createTrajectory(
      trajectoryObjects.map((obj) => obj.position),
      this.settings.closed,
    );
    updateTrajectoriesHTML(this, true);
  }

  createTrajectory(positions, isClosed, selected = false) {
    const trajectory = new THREE.CatmullRomCurve3(positions, isClosed);
    trajectory.needsUpdate = true;
    trajectory.selected = selected;
    this.trajectories.push(trajectory);

    // TODO refactor
    const selects = document.querySelectorAll('.trajectory-select');
    selects.forEach((select) => {
      const option = document.createElement('option');
      option.value = this.trajectories.length - 1;
      option.textContent = this.trajectories.length;
      select.appendChild(option);
    });
  }

  initTrajectories() {
    const trajectoriesPositions = [
      [
        new THREE.Vector3(-0.7, -0.7, 0.3),
        new THREE.Vector3(0.7, -0.7, 0.3),
        new THREE.Vector3(0.7, 0.7, 0.3),
        new THREE.Vector3(-0.7, 0.7, 0.3),
      ],
    ];

    trajectoriesPositions.forEach((positions, index) => {
      const trajectoryObjects = positions.map((pos) =>
        this.addSplineObject(pos, index),
      );
      this.createTrajectory(
        trajectoryObjects.map((obj) => obj.position),
        this.settings.closed,
        index === trajectoriesPositions.length - 1 && true,
      );
    });
  }

  deleteTrajectory(trajectoryIndex) {
    const trajectoryToRemove = this.trajectories[trajectoryIndex];
    if (trajectoryToRemove && trajectoryToRemove.mesh) {
      this.scene.remove(trajectoryToRemove.mesh);
      trajectoryToRemove.mesh.geometry.dispose();
      trajectoryToRemove.mesh.material.dispose();
    }

    this.splineHelperObjects = this.splineHelperObjects.filter((object) => {
      if (object.trajectoryIndex === trajectoryIndex) {
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

    this.trajectories.splice(trajectoryIndex, 1);

    this.splineHelperObjects.forEach((object) => {
      if (object.trajectoryIndex > trajectoryIndex) {
        object.trajectoryIndex--;
      }
    });

    for (let i = trajectoryIndex; i < this.trajectories.length; i++) {
      if (this.trajectories[i].mesh) {
        this.trajectories[i].mesh.trajectoryIndex--;
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

  toggleTrajectoryClosed(trajectoryIndex, isClosed) {
    const trajectory = this.trajectories[trajectoryIndex];
    if (trajectory) {
      trajectory.closed = isClosed;
    }
    trajectory.needsUpdate = true;
  }

  toggleTrajectorySelected(trajectoryIndex, isSelected) {
    const trajectory = this.trajectories[trajectoryIndex];
    if (trajectory) {
      trajectory.selected = isSelected;
      if (trajectory.mesh) {
        trajectory.mesh.geometry.dispose();
      }
      const radius = isSelected ? 0.01 : 0.004;
      const geometry = new THREE.TubeGeometry(
        trajectory,
        500,
        radius,
        8,
        false,
      );
      trajectory.mesh.geometry = geometry;
      this.updateControlPointLabels(trajectoryIndex);
    }
  }

  updateControlPointLabels(trajectoryIndex) {
    const trajectory = this.trajectories[trajectoryIndex];
    if (trajectory) {
      // Calculate the range of indices for the helper objects associated with this trajectory
      const start = this.trajectories
        .slice(0, trajectoryIndex)
        .reduce((sum, trajectory) => sum + trajectory.points.length, 0);
      const end = start + trajectory.points.length;

      // Update the labels of the helper objects associated with this trajectory
      this.splineHelperObjects.slice(start, end).forEach((object, index) => {
        const label = object.children.find(
          (child) => child instanceof CSS2DObject,
        );
        if (label) {
          label.element.textContent = trajectory.selected
            ? `P${index + 1} `
            : '';
        }
      });
    }
  }

  updateTrajectoryGeometry(trajectory) {
    const radius = trajectory.selected ? 0.01 : 0.004;
    const geometry = new THREE.TubeGeometry(trajectory, 100, radius, 8, false);

    if (trajectory.mesh) {
      trajectory.mesh.geometry.dispose();
      trajectory.mesh.geometry = geometry;
    } else {
      let color;
      if (this.trajectoryColors.length > 0) {
        const randomIndex = Math.floor(
          Math.random() * this.trajectoryColors.length,
        );
        color = this.trajectoryColors[randomIndex];
        this.trajectoryColors.splice(randomIndex, 1); // Remove the chosen color from the array
      } else {
        // If all colors have been used, reset the array
        this.trajectoryColors = [...this.originalTrajectoryColors];
        color = this.trajectoryColors[0];
        this.trajectoryColors.splice(0, 1);
      }

      console.log('color', color);

      const material = new THREE.MeshLambertMaterial({
        color: new THREE.Color(color),
      });
      trajectory.mesh = new THREE.Mesh(geometry, material);
      this.scene.add(trajectory.mesh);
    }
  }

  updateTrajectoryTension(trajectoryIndex, tension) {
    const trajectory = this.trajectories[trajectoryIndex];
    if (trajectory) {
      const points = this.splineHelperObjects
        .filter((object) => object.trajectoryIndex === trajectoryIndex)
        .map((object) => object.position.clone());

      trajectory.curveType = 'catmullrom';
      trajectory.tension = tension;
      trajectory.points = points;

      this.updateTrajectoryGeometry(trajectory);
    }
  }

  updateTrajectoryFromControlPoint(object) {
    const trajectory = this.trajectories[object.trajectoryIndex];

    if (trajectory) {
      const newPositions = this.splineHelperObjects
        .filter((obj) => obj.trajectoryIndex === object.trajectoryIndex)
        .map((obj) => obj.position);

      trajectory.points = newPositions;
      trajectory.needsUpdate = true;

      this.updateTrajectoryGeometry(trajectory);
    }
  }

  updateSplineOutline() {
    this.trajectories.forEach((trajectory, index) => {
      if (!trajectory) {
        console.warn(`Trajectory at index ${index} is undefined`);
        return;
      }

      if (trajectory.needsUpdate) {
        this.updateTrajectoryGeometry(trajectory);
        trajectory.needsUpdate = false;
      }
    });
  }
}

export default TrajectoryManager;
