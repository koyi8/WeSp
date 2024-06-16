import * as THREE from 'three';
import {
  CSS2DObject,
  CSS2DRenderer,
} from 'three/addons/renderers/CSS2DRenderer.js';
import { createTriggerControlDiv } from '../objectsModule_GUI';
import { positionsArray } from '../..';

class TriggerManager {
  constructor(scene, settings, curveManager, container) {
    this.scene = scene;
    this.settings = settings;
    this.curveManager = curveManager;
    this.container = container;
    this.triggers = [];
    this.clientTriggers = {};
    this.initLabelRenderer();
    this.triggerColor = this.setTriggerColor();
  }

  getTriggers() {
    return this.triggers;
  }

  initLabelRenderer() {
    this.labelRenderer = new CSS2DRenderer();
    this.labelRenderer.setSize(
      this.container.offsetWidth,
      this.container.offsetHeight,
    );
    this.labelRenderer.domElement.className = 'trigger-container';
    this.container.appendChild(this.labelRenderer.domElement);
  }

  setupAddTriggerListeners() {
    document.querySelectorAll('.add-trigger').forEach((button) => {
      button.addEventListener('click', () => {
        this.createTrigger(button);
      });
    });
  }

  setTriggerColor() {
    const colors = [0x000000, 0xff0000, 0x0000ff, 0x808080];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    this.triggerColor = randomColor;
    return this.triggerColor;
  }

  createTrigger(button) {
    const cubeGeometry = new THREE.BoxGeometry(0.1, 0.1, 0.1);
    const cubeMaterial = new THREE.MeshBasicMaterial({
      color: this.triggerColor,
    });
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

    const labelElement = document.createElement('div');
    labelElement.className = 'label';
    const cubeLabel = new CSS2DObject(labelElement);
    cubeLabel.position.set(0, 0.2, 0);
    cube.add(cubeLabel);

    this.scene.add(cube);

    // default properties for the new trigger
    const triggerDefaults = {
      animate: true,
      loop: true,
      speed: Math.random() * (3 - 1) + 0.3,
      position: Math.random(),
      curveIndex: 0,
      direction: 'ltr',
    };

    const buttonID = button.id;
    let index = this.triggers.indexOf(null);
    if (index === -1) {
      index = this.triggers.length;
    }

    const newTrigger = {
      mesh: cube,
      label: labelElement,
      buttonID,
      ...triggerDefaults,
    };

    // Replace the null value in the array with the new trigger
    this.triggers[index] = newTrigger;

    const triggerDiv = createTriggerControlDiv(
      index,
      (index, updates) => this.updateTrigger(index, updates, positionsArray),
      this.curveManager.curves,
      triggerDefaults,
      () => this.updatePositionInput(index),
    );

    button.replaceWith(triggerDiv);

    // event for Server to update the trigger
    const event = new CustomEvent('addedTrigger', { detail: { index: index } });
    window.dispatchEvent(event);
  }

  createTriggerFromClient(clientID, clients, triggerState) {
    const cubeGeometry = new THREE.BoxGeometry(0.05, 0.05, 0.05);
    const cubeMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color(
        triggerState.color.r,
        triggerState.color.g,
        triggerState.color.b,
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

    // default properties for the new trigger
    const triggerDefaults = {
      animate: triggerState.animate,
      loop: triggerState.loop,
      speed: triggerState.speed,
      position: triggerState.position,
      curveIndex: triggerState.curveIndex,
      direction: triggerState.direction,
    };

    const newTrigger = {
      mesh: cube,
      label: labelElement,
      ...triggerDefaults,
    };

    // Store Trigger in the local clientTriggers array
    if (!this.clientTriggers[clientID]) {
      this.clientTriggers[clientID] = [];
    }
    let index = this.clientTriggers[clientID].indexOf(null);
    if (index === -1) {
      index = this.clientTriggers[clientID].length;
    }
    // Add the new trigger to the array
    this.clientTriggers[clientID][index] = newTrigger;
    // Store Trigger in the corresponding clients object
    clients[clientID].Triggers[index] = newTrigger;
  }

  deleteTriggerFromClient(clientID, clients, index) {
    const triggerToRemove = this.clientTriggers[clientID][index];
    if (!triggerToRemove) return;

    this.scene.remove(triggerToRemove.mesh);

    triggerToRemove.mesh.geometry.dispose();
    triggerToRemove.mesh.material.dispose();

    if (triggerToRemove.mesh.children.length > 0) {
      const labelObject = triggerToRemove.mesh.children.find(
        (child) => child instanceof CSS2DObject,
      );
      if (labelObject) {
        labelObject.element.remove(); // Remove label from the DOM
        this.scene.remove(labelObject); // Remove CSS2DObject from scene graph
      }
    }
    // Set the trigger to null in the clientTriggers array
    this.clientTriggers[clientID][index] = null;

    // Set the trigger to null in the clients object
    clients[clientID].Triggers[index] = null;
  }

  deleteTrigger(index) {
    const triggerToRemove = this.triggers[index];
    if (!triggerToRemove) return;

    this.scene.remove(triggerToRemove.mesh);

    triggerToRemove.mesh.geometry.dispose();
    triggerToRemove.mesh.material.dispose();

    if (triggerToRemove.mesh.children.length > 0) {
      const labelObject = triggerToRemove.mesh.children.find(
        (child) => child instanceof CSS2DObject,
      );
      if (labelObject) {
        labelObject.element.remove(); // Remove label from the DOM
        this.scene.remove(labelObject); // Remove CSS2DObject from scene graph
      }
    }

    const triggersContainer = document.getElementById('triggers');
    const addButton = document.createElement('button');
    addButton.id = triggerToRemove.buttonID;
    addButton.className = 'add-trigger';
    addButton.textContent = '+';
    addButton.addEventListener('click', () => {
      this.createTrigger(addButton);
    });

    const triggerDiv = document.getElementById(`trigger${index}`);
    if (triggerDiv) {
      triggersContainer.replaceChild(addButton, triggerDiv);
    }

    //this.triggers.splice(index, 1);
    // Replace the trigger in the array with null
    this.triggers[index] = null;

    // Event for Server to update the trigger
    const event = new Event('deletedTrigger');
    window.dispatchEvent(event);
  }

  createTriggers() {
    const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
    const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const triggersContainer = document.getElementById('triggers');

    for (let i = 0; i < this.settings.triggerAmount; i++) {
      const triggerDefaults = {
        animate: true,
        loop: true,
        speed: Math.random() * 0.02,
        position: Math.random(),
        curveIndex: 0,
        direction: 'ltr',
      };
      const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
      const labelElement = document.createElement('div');
      labelElement.className = 'label';
      const cubeLabel = new CSS2DObject(labelElement);
      cubeLabel.position.set(0, 0.2, 0);
      cube.add(cubeLabel);
      this.scene.add(cube);

      this.triggers.push({
        mesh: cube,
        label: labelElement,
        ...triggerDefaults,
      });

      const triggerDiv = createTriggerControlDiv(
        i,
        (index, updates) => this.updateTrigger(index, updates, positionsArray),
        this.curveManager.curves,
        triggerDefaults,
        () => this.updatePositionInput(i),
      );
      triggersContainer.insertBefore(
        triggerDiv,
        triggersContainer.lastElementChild,
      );
    }
  }

  animateTrigger(trigger, index, positionsArray) {
    if (trigger === null || trigger === undefined) {
      if (positionsArray) {
        positionsArray[index] = { x: null, y: null, z: null }; // Set the corresponding index in positionsArray to null for OSC UI
      }
      return; // Skip this iteration
    }
    const curves = this.curveManager.getCurves();

    const curve = curves[trigger.curveIndex];

    let position = trigger.position;

    if (!curve) {
      console.warn(`Curve ${trigger.curveIndex} not found`);
      return; // Skip this iteration
    }
    if (trigger.animate) {
      let arclength = curve.getLength();
      let directionFactor = trigger.direction === 'rtl' ? -1 : 1;
      let speedAdjustment = (trigger.speed / arclength) * directionFactor;

      position += speedAdjustment;

      if (trigger.loop) {
        if (position < 0) position += 1;
        position %= 1;
      } else {
        if (position >= 1 || position <= 0) {
          trigger.speed *= -1;
          position = position >= 1 ? 1 - (position - 1) : Math.abs(position);
        }
      }

      trigger.position = position;
    }

    const trigPos = curve.getPointAt(Math.abs(position) % 1);
    trigger.mesh.position.copy(trigPos);
    const label = trigger.mesh.children[0].element;
    label.innerHTML = `${index + 1}`;

    if (positionsArray) {
      const label = trigger.mesh.children[0].element;
      label.innerHTML = `${index + 1}: ${trigPos.x.toFixed(
        2,
      )}, ${trigPos.y.toFixed(2)}, ${trigPos.z.toFixed(2)}`;

      positionsArray[index] = trigPos.clone();
    }
    curve.updateArcLengths();
  }

  lerp(start, end, t) {
    return start * (1 - t) + end * t;
  }

  animateAllTriggers(positionsArray) {
    this.triggers.forEach((trigger, index) => {
      this.animateTrigger(trigger, index, positionsArray);
    });

    Object.entries(this.clientTriggers).forEach(
      ([clientID, clientTriggers]) => {
        clientTriggers.forEach((trigger, index) => {
          this.animateTrigger(trigger, index);
        });
      },
    );
  }

  animateTriggers(positionsArray) {
    this.triggers.forEach((trigger, index) => {
      if (trigger === null || trigger === undefined) {
        positionsArray[index] = { x: null, y: null, z: null }; // Set the corresponding index in positionsArray to null for OSC UI
        return; // Skip this iteration
      }
      const curves = this.curveManager.getCurves();

      const curve = curves[trigger.curveIndex];
      let position = trigger.position;
      if (!curve) {
        console.warn(`Curve ${trigger.curveIndex} not found`);
        return; // Skip this iteration
      }
      if (trigger.animate) {
        let arclength = curve.getLength();
        let directionFactor = trigger.direction === 'rtl' ? -1 : 1;
        let speedAdjustment = (trigger.speed / arclength) * directionFactor;

        position += speedAdjustment;

        if (trigger.loop) {
          if (position < 0) position += 1;
          position %= 1;
        } else {
          if (position >= 1 || position <= 0) {
            trigger.speed *= -1;
            position = position >= 1 ? 1 - (position - 1) : Math.abs(position);
          }
        }

        trigger.position = position;
      }

      const trigPos = curve.getPointAt(Math.abs(position) % 1);
      trigger.mesh.position.copy(trigPos);

      const label = trigger.mesh.children[0].element;
      label.innerHTML = `${index + 1}: ${trigPos.x.toFixed(
        2,
      )}, ${trigPos.y.toFixed(2)}, ${trigPos.z.toFixed(2)}`;

      positionsArray[index] = trigPos.clone();
      curve.updateArcLengths();
    });
  }

  updateTrigger(index, updates, positionsArray) {
    const trigger = this.triggers[index];

    if (!trigger) return;

    if ('animate' in updates) {
      this.updatePositionInput(index);
    }

    Object.keys(updates).forEach((key) => {
      if (key === 'delete' && updates[key] === true) {
        // Handle trigger deletion
        this.deleteTrigger(index, trigger.buttonID);
        positionsArray.splice(index, 1);
      } else if (key === 'speed') {
        // Update speed magnitude but preserve direction
        const newSpeed = Math.abs(updates[key]);

        trigger[key] = trigger.speed >= 0 ? newSpeed : -newSpeed;
      } else {
        trigger[key] = updates[key];
      }
    });
  }

  renderLabels(camera) {
    this.labelRenderer.render(this.scene, camera);
  }

  updatePositionInput(index) {
    const positionSlider = document.getElementById(`position${index}`);

    if (positionSlider && positionSlider.noUiSlider) {
      positionSlider.noUiSlider.set(this.triggers[index].position);
    } else {
      console.error(
        `Position slider with id position${index} not found or noUiSlider not initialized`,
      );
    }
  }

  updateLabelRendererSize(width, height) {
    this.labelRenderer.setSize(width, height);
  }

  updateTriggerControlDiv(index) {
    const trigger = this.triggers[index];
    const div = document.getElementById(`trigger${index}`);
    if (div) {
      // Update the animate checkbox
      const animateCheckbox = div.querySelector(`#animate${index}`);
      animateCheckbox.checked = trigger.animate;

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
      speedRange.value = trigger.speed;

      const positionRange = div.querySelector(`#position${index}`);
      positionRange.value = trigger.position;

      const trajectorySelect = div.querySelector(`#trajectory${index}`);
      trajectorySelect.value = trigger.curveIndex;

      const loopCheckbox = div.querySelector(`#loop${index}`);
      loopCheckbox.checked = trigger.loop;

      const ltrButton = div.querySelector(`#ltr${index}`);
      const rtlButton = div.querySelector(`#rtl${index}`);
      if (trigger.direction === 'ltr') {
        ltrButton.classList.add('selected');
        rtlButton.classList.remove('selected');
      } else if (trigger.direction === 'rtl') {
        rtlButton.classList.add('selected');
        ltrButton.classList.remove('selected');
      }
    }
  }
}

export default TriggerManager;
