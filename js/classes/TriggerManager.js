import * as THREE from 'three';
import {
  CSS2DObject,
  CSS2DRenderer,
} from 'three/addons/renderers/CSS2DRenderer.js';
import { createTriggerControlDiv } from '../createTriggerControlDiv';
import { positionsArray } from '../..';

class TriggerManager {
  constructor(scene, settings, curveManager, container) {
    this.scene = scene;
    this.settings = settings;
    this.curveManager = curveManager;
    this.container = container;
    this.triggers = [];
    this.initLabelRenderer();
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

  createTrigger(button) {
    const colors = [0x000000, 0xff0000, 0x0000ff, 0x808080];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const cubeGeometry = new THREE.BoxGeometry(0.1, 0.1, 0.1);
    const cubeMaterial = new THREE.MeshBasicMaterial({ color: randomColor });
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
      speed: Math.random() * 0.02,
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

  animateTriggers(positionsArray) {
    this.triggers.forEach((trigger, index) => {
      if (trigger === null) {
        positionsArray[index] = { x: null, y: null, z: null }; // Set the corresponding index in positionsArray to null for OSC UI
        return; // Skip this iteration
      }

      const curve = this.curveManager.curves[trigger.curveIndex];
      let position = trigger.position;
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
    const positionInput = document.getElementById(`position${index}`);
    if (positionInput) {
      positionInput.value = this.triggers[index].position;
    }
  }

  updateLabelRendererSize(width, height) {
    this.labelRenderer.setSize(width, height);
  }
}

export default TriggerManager;
