import * as THREE from 'three';
import {
  CSS2DObject,
  CSS2DRenderer,
} from 'three/addons/renderers/CSS2DRenderer.js';
import { createTriggerControlDiv } from '../createTriggerControlDiv';

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
        const index = parseInt(button.id.split('-')[2]);
        this.addTrigger(index, button);
      });
    });
  }

  addTrigger(index, buttonElement) {
    const triggerDefaults = {
      animate: true,
      loop: true,
      speed: Math.random() * 0.2,
      position: Math.random(),
      curveIndex: 0,
      direction: 'ltr',
    };

    const triggerDiv = createTriggerControlDiv(
      index,
      (index, updates) => this.updateTrigger(index, updates),
      this.curveManager.curves,
      triggerDefaults,
      () => this.updatePositionInput(index),
    );

    const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
    const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

    const labelElement = document.createElement('div');
    labelElement.className = 'label';
    const cubeLabel = new CSS2DObject(labelElement);
    cubeLabel.position.set(0, 1.5, 0);
    cube.add(cubeLabel);

    this.scene.add(cube);

    const curve = this.curveManager.curves[triggerDefaults.curveIndex];
    const trigPos = curve.getPointAt(Math.abs(triggerDefaults.position) % 1);
    cube.position.copy(trigPos);

    this.triggers.push({
      mesh: cube,
      label: labelElement,
      ...triggerDefaults,
    });

    buttonElement.parentNode.replaceChild(triggerDiv, buttonElement);
  }

  // createTriggers() {
  //   const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
  //   const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  //   const triggersContainer = document.getElementById('triggers');

  //   for (let i = 0; i < this.settings.triggerAmount; i++) {
  //     const triggerDefaults = {
  //       animate: true,
  //       loop: true,
  //       speed: Math.random() * 0.2,
  //       position: Math.random(),
  //       curveIndex: 0,
  //       direction: 'ltr',
  //     };
  //     const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
  //     const labelElement = document.createElement('div');
  //     labelElement.className = 'label';
  //     const cubeLabel = new CSS2DObject(labelElement);
  //     cubeLabel.position.set(0, 1.5, 0);
  //     cube.add(cubeLabel);
  //     this.scene.add(cube);

  //     this.triggers.push({
  //       mesh: cube,
  //       label: labelElement,
  //       ...triggerDefaults,
  //     });

  //     const triggerDiv = createTriggerControlDiv(
  //       i,
  //       (index, updates) => this.updateTrigger(index, updates),
  //       this.curveManager.curves,
  //       triggerDefaults,
  //       () => this.updatePositionInput(i),
  //     );
  //     triggersContainer.insertBefore(
  //       triggerDiv,
  //       triggersContainer.lastElementChild,
  //     );
  //   }
  // }

  animateTriggers(positionsArray) {
    this.triggers.forEach((trigger, index) => {
      const curve = this.curveManager.curves[trigger.curveIndex];
      let position = trigger.position;
      if (trigger.animate) {
        let directionFactor = trigger.direction === 'rtl' ? -1 : 1;
        let speedAdjustment =
          (trigger.speed / curve.getLength()) * directionFactor;

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
    });
  }

  updateTrigger(index, updates) {
    const trigger = this.triggers[index];

    if (!trigger) return;

    if ('animate' in updates) {
      this.updatePositionInput(index);
    }

    Object.keys(updates).forEach((key) => {
      if (key === 'delete' && updates[key] === true) {
        // Handle trigger deletion
        // this.deleteTrigger(index);
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