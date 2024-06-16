import * as THREE from 'three';
import {
  CSS2DObject,
  CSS2DRenderer,
} from 'three/addons/renderers/CSS2DRenderer.js';
import { createObjectControlDiv } from '../GUI/objectsModule_GUI';
import { positionsArray } from '../..';

class ObjectManager {
  constructor(scene, settings, trajectoryManager, container) {
    this.scene = scene;
    this.settings = settings;
    this.trajectoryManager = trajectoryManager;
    this.container = container;
    this.objects = [];
    this.clientObjects = {};
    this.initLabelRenderer();
    this.objectColor = this.setObjectColor();
  }

  getObjects() {
    return this.objects;
  }

  initLabelRenderer() {
    this.labelRenderer = new CSS2DRenderer();
    this.labelRenderer.setSize(
      this.container.offsetWidth,
      this.container.offsetHeight,
    );
    this.labelRenderer.domElement.className = 'object-container';
    this.container.appendChild(this.labelRenderer.domElement);
  }

  setupAddObjectListeners() {
    document.querySelectorAll('.add-object').forEach((button) => {
      button.addEventListener('click', () => {
        this.createObject(button);
      });
    });
  }

  setObjectColor() {
    const colors = [0x000000, 0xff0000, 0x0000ff, 0x808080];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    this.objectColor = randomColor;
    return this.objectColor;
  }

  createObject(button) {
    const cubeGeometry = new THREE.BoxGeometry(0.1, 0.1, 0.1);
    const cubeMaterial = new THREE.MeshBasicMaterial({
      color: this.objectColor,
    });
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

    const labelElement = document.createElement('div');
    labelElement.className = 'label';
    const cubeLabel = new CSS2DObject(labelElement);
    cubeLabel.position.set(0, 0.2, 0);
    cube.add(cubeLabel);

    this.scene.add(cube);

    // default properties for the new object
    const objectDefaults = {
      animate: true,
      loop: true,
      speed: Math.random() * (3 - 1) + 0.3,
      position: Math.random(),
      trajectoryIndex: 0,
      direction: 'ltr',
    };

    const buttonID = button.id;
    let index = this.objects.indexOf(null);
    if (index === -1) {
      index = this.objects.length;
    }

    const newObject = {
      mesh: cube,
      label: labelElement,
      buttonID,
      ...objectDefaults,
    };

    // Replace the null value in the array with the new object
    this.objects[index] = newObject;

    const objectDiv = createObjectControlDiv(
      index,
      (index, updates) => this.updateObject(index, updates, positionsArray),
      this.trajectoryManager.trajectories,
      objectDefaults,
      () => this.updatePositionInput(index),
    );

    button.replaceWith(objectDiv);

    // event for Server to update the object
    const event = new CustomEvent('addedObject', { detail: { index: index } });
    window.dispatchEvent(event);
  }

  createObjectFromClient(clientID, clients, objectState) {
    const cubeGeometry = new THREE.BoxGeometry(0.05, 0.05, 0.05);
    const cubeMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color(
        objectState.color.r,
        objectState.color.g,
        objectState.color.b,
      ),
      wireframe: true,
    });
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    this.scene.add(cube);

    const labelElement = document.createElement('div');
    labelElement.className = 'label';
    const cubeLabel = new CSS2DObject(labelElement);
    cubeLabel.position.set(0, 0.2, 0);
    cube.add(cubeLabel);

    // default properties for the new object
    const objectDefaults = {
      animate: objectState.animate,
      loop: objectState.loop,
      speed: objectState.speed,
      position: objectState.position,
      trajectoryIndex: objectState.trajectoryIndex,
      direction: objectState.direction,
    };

    const newObject = {
      mesh: cube,
      label: labelElement,
      ...objectDefaults,
    };

    // Store Object in the local clientObjects array
    if (!this.clientObjects[clientID]) {
      this.clientObjects[clientID] = [];
    }
    let index = this.clientObjects[clientID].indexOf(null);
    if (index === -1) {
      index = this.clientObjects[clientID].length;
    }
    // Add the new object to the array
    this.clientObjects[clientID][index] = newObject;
    // Store Object in the corresponding clients object
    clients[clientID].Objects[index] = newObject;
  }

  deleteObjectFromClient(clientID, clients, index) {
    const objectToRemove = this.clientObjects[clientID][index];
    if (!objectToRemove) return;

    this.scene.remove(objectToRemove.mesh);

    objectToRemove.mesh.geometry.dispose();
    objectToRemove.mesh.material.dispose();

    if (objectToRemove.mesh.children.length > 0) {
      const labelObject = objectToRemove.mesh.children.find(
        (child) => child instanceof CSS2DObject,
      );
      if (labelObject) {
        labelObject.element.remove(); // Remove label from the DOM
        this.scene.remove(labelObject); // Remove CSS2DObject from scene graph
      }
    }
    // Set the object to null in the clientObjects array
    this.clientObjects[clientID][index] = null;

    // Set the object to null in the clients object
    clients[clientID].Objects[index] = null;
  }

  deleteObject(index) {
    const objectToRemove = this.objects[index];
    if (!objectToRemove) return;

    this.scene.remove(objectToRemove.mesh);

    objectToRemove.mesh.geometry.dispose();
    objectToRemove.mesh.material.dispose();

    if (objectToRemove.mesh.children.length > 0) {
      const labelObject = objectToRemove.mesh.children.find(
        (child) => child instanceof CSS2DObject,
      );
      if (labelObject) {
        labelObject.element.remove(); // Remove label from the DOM
        this.scene.remove(labelObject); // Remove CSS2DObject from scene graph
      }
    }

    const objectsContainer = document.getElementById('objects');
    const addButton = document.createElement('button');
    addButton.id = objectToRemove.buttonID;
    addButton.className = 'add-object';
    addButton.textContent = '+';
    addButton.addEventListener('click', () => {
      this.createObject(addButton);
    });

    const objectDiv = document.getElementById(`object${index}`);
    if (objectDiv) {
      objectsContainer.replaceChild(addButton, objectDiv);
    }

    //this.objects.splice(index, 1);
    // Replace the object in the array with null
    this.objects[index] = null;

    // Event for Server to update the object
    const event = new Event('deletedObject');
    window.dispatchEvent(event);
  }

  createObjects() {
    const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
    const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const objectsContainer = document.getElementById('objects');

    for (let i = 0; i < this.settings.objectAmount; i++) {
      const objectDefaults = {
        animate: true,
        loop: true,
        speed: Math.random() * 0.02,
        position: Math.random(),
        trajectoryIndex: 0,
        direction: 'ltr',
      };
      const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
      const labelElement = document.createElement('div');
      labelElement.className = 'label';
      const cubeLabel = new CSS2DObject(labelElement);
      cubeLabel.position.set(0, 0.2, 0);
      cube.add(cubeLabel);
      this.scene.add(cube);

      this.objects.push({
        mesh: cube,
        label: labelElement,
        ...objectDefaults,
      });

      const objectDiv = createObjectControlDiv(
        i,
        (index, updates) => this.updateObject(index, updates, positionsArray),
        this.trajectoryManager.trajectories,
        objectDefaults,
        () => this.updatePositionInput(i),
      );
      objectsContainer.insertBefore(
        objectDiv,
        objectsContainer.lastElementChild,
      );
    }
  }

  animateObject(object, index, positionsArray) {
    if (object === null || object === undefined) {
      if (positionsArray) {
        positionsArray[index] = { x: null, y: null, z: null }; // Set the corresponding index in positionsArray to null for OSC UI
      }
      return; // Skip this iteration
    }
    const trajectories = this.trajectoryManager.getTrajectories();

    const trajectory = trajectories[object.trajectoryIndex];

    let position = object.position;

    if (!trajectory) {
      console.warn(`Trajectory ${object.trajectoryIndex} not found`);
      return; // Skip this iteration
    }
    if (object.animate) {
      let arclength = trajectory.getLength();
      let directionFactor = object.direction === 'rtl' ? -1 : 1;
      let speedAdjustment = (object.speed / arclength) * directionFactor;

      position += speedAdjustment;

      if (object.loop) {
        if (position < 0) position += 1;
        position %= 1;
      } else {
        if (position >= 1 || position <= 0) {
          object.speed *= -1;
          position = position >= 1 ? 1 - (position - 1) : Math.abs(position);
        }
      }

      object.position = position;
    }

    const trigPos = trajectory.getPointAt(Math.abs(position) % 1);
    object.mesh.position.copy(trigPos);
    const label = object.mesh.children[0].element;
    label.innerHTML = `${index + 1}`;

    if (positionsArray) {
      const label = object.mesh.children[0].element;
      label.innerHTML = `${index + 1}: ${trigPos.x.toFixed(
        2,
      )}, ${trigPos.y.toFixed(2)}, ${trigPos.z.toFixed(2)}`;

      positionsArray[index] = trigPos.clone();
    }
    trajectory.updateArcLengths();
  }

  lerp(start, end, t) {
    return start * (1 - t) + end * t;
  }

  animateAllObjects(positionsArray) {
    this.objects.forEach((object, index) => {
      this.animateObject(object, index, positionsArray);
    });

    Object.entries(this.clientObjects).forEach(([clientID, clientObjects]) => {
      clientObjects.forEach((object, index) => {
        this.animateObject(object, index);
      });
    });
  }

  animateObjects(positionsArray) {
    this.objects.forEach((object, index) => {
      if (object === null || object === undefined) {
        positionsArray[index] = { x: null, y: null, z: null }; // Set the corresponding index in positionsArray to null for OSC UI
        return; // Skip this iteration
      }
      const trajectories = this.trajectoryManager.getTrajectories();

      const trajectory = trajectories[object.trajectoryIndex];
      let position = object.position;
      if (!trajectory) {
        console.warn(`Trajectory ${object.trajectoryIndex} not found`);
        return; // Skip this iteration
      }
      if (object.animate) {
        let arclength = trajectory.getLength();
        let directionFactor = object.direction === 'rtl' ? -1 : 1;
        let speedAdjustment = (object.speed / arclength) * directionFactor;

        position += speedAdjustment;

        if (object.loop) {
          if (position < 0) position += 1;
          position %= 1;
        } else {
          if (position >= 1 || position <= 0) {
            object.speed *= -1;
            position = position >= 1 ? 1 - (position - 1) : Math.abs(position);
          }
        }

        object.position = position;
      }

      const trigPos = trajectory.getPointAt(Math.abs(position) % 1);
      object.mesh.position.copy(trigPos);

      const label = object.mesh.children[0].element;
      label.innerHTML = `${index + 1}: ${trigPos.x.toFixed(
        2,
      )}, ${trigPos.y.toFixed(2)}, ${trigPos.z.toFixed(2)}`;

      positionsArray[index] = trigPos.clone();
      trajectory.updateArcLengths();
    });
  }

  updateObject(index, updates, positionsArray) {
    const object = this.objects[index];

    if (!object) return;

    if ('animate' in updates) {
      this.updatePositionInput(index);
    }

    Object.keys(updates).forEach((key) => {
      if (key === 'delete' && updates[key] === true) {
        // Handle object deletion
        this.deleteObject(index, object.buttonID);
        positionsArray.splice(index, 1);
      } else if (key === 'speed') {
        // Update speed magnitude but preserve direction
        const newSpeed = Math.abs(updates[key]);

        object[key] = object.speed >= 0 ? newSpeed : -newSpeed;
      } else {
        object[key] = updates[key];
      }
    });
  }

  renderLabels(camera) {
    this.labelRenderer.render(this.scene, camera);
  }

  updatePositionInput(index) {
    const positionSlider = document.getElementById(`position${index}`);

    if (positionSlider && positionSlider.noUiSlider) {
      positionSlider.noUiSlider.set(this.objects[index].position);
    } else {
      console.error(
        `Position slider with id position${index} not found or noUiSlider not initialized`,
      );
    }
  }

  updateLabelRendererSize(width, height) {
    this.labelRenderer.setSize(width, height);
  }

  updateObjectControlDiv(index) {
    const object = this.objects[index];
    const div = document.getElementById(`object${index}`);
    if (div) {
      // Update the animate checkbox
      const animateCheckbox = div.querySelector(`#animate${index}`);
      animateCheckbox.checked = object.animate;

      const speedControl = div.querySelector(`div.control:has(#speed${index})`);
      const positionControl = div.querySelector(
        `div.control:has(#position${index})`,
      );
      // Show or hide the speed and position controls based on the animate checkbox
      if (animateCheckbox.checked) {
        positionControl.style.display = 'none'; // Hide position control when animated
        speedControl.style.display = ''; // Show speed control (use default or '' to reset)
      } else {
        positionControl.style.display = ''; // Show position control when not animated
        speedControl.style.display = 'none'; // Hide speed control
      }

      const speedRange = div.querySelector(`#speed${index}`);
      speedRange.value = object.speed;

      const positionRange = div.querySelector(`#position${index}`);
      positionRange.value = object.position;

      const trajectorySelect = div.querySelector(`#trajectory${index}`);
      trajectorySelect.value = object.trajectoryIndex;

      const loopCheckbox = div.querySelector(`#loop${index}`);
      loopCheckbox.checked = object.loop;

      const ltrButton = div.querySelector(`#ltr${index}`);
      const rtlButton = div.querySelector(`#rtl${index}`);
      if (object.direction === 'ltr') {
        ltrButton.classList.add('selected');
        rtlButton.classList.remove('selected');
      } else if (object.direction === 'rtl') {
        rtlButton.classList.add('selected');
        ltrButton.classList.remove('selected');
      }
    }
  }
}

export default ObjectManager;
