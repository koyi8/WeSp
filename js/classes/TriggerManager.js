import * as THREE from 'three';
import {
  CSS2DObject,
  CSS2DRenderer,
} from 'three/addons/renderers/CSS2DRenderer.js';

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

  createTriggers() {
    const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
    const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

    for (let i = 0; i < this.settings.triggerAmount; i++) {
      const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
      const labelElement = document.createElement('div');
      labelElement.className = 'label';
      const cubeLabel = new CSS2DObject(labelElement);
      cubeLabel.position.set(0, 1.5, 0);
      cube.add(cubeLabel);
      this.scene.add(cube);

      this.triggers.push({
        mesh: cube,
        label: labelElement,
        speed: Math.random() * 0.2,
        position: Math.random(),
        animate: true,
        curveIndex: 0,
      });
    }
  }

  animateTriggers() {
    this.triggers.forEach((trigger, index) => {
      let position = trigger.position;
      let speed = trigger.speed;
      const curve = this.curveManager.curves[trigger.curveIndex];

      position += speed / curve.getLength();
      trigger.position = position;

      if (this.settings.loop) {
        position %= 1;
      } else {
        if (position > 1 || position < 0) {
          trigger.speed *= -1;
          position = Math.min(Math.max(position, 0), 1);
        }
      }

      const trigPos = curve.getPointAt(position % 1);
      trigger.mesh.position.copy(trigPos);

      const label = trigger.mesh.children[0].element;
      label.innerHTML = `${index + 1}: ${trigPos.x.toFixed(
        2,
      )}, ${trigPos.y.toFixed(2)}, ${trigPos.z.toFixed(2)}`;
    });
  }

  renderLabels(camera) {
    this.labelRenderer.render(this.scene, camera);
  }

  updateLabelRendererSize(width, height) {
    this.labelRenderer.setSize(width, height);
  }
}

export default TriggerManager;
