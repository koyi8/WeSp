import * as THREE from 'three';
import { CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';

class TriggerManager {
  constructor(scene, settings, curveManager) {
    this.scene = scene;
    this.settings = settings;
    this.curveManager = curveManager;
    this.triggers = [];
  }

  createTriggers() {
    const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
    const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

    for (let i = 0; i < this.settings.triggerAmount; i++) {
      const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
      const cubeLabel = new CSS2DObject(document.createElement('div'));
      cubeLabel.position.set(0, 3, 0);
      cube.add(cubeLabel);
      this.scene.add(cube);

      this.triggers.push({
        mesh: cube,
        speed: Math.random() * 0.2,
        position: Math.random(),
        animate: true,
        curveIndex: 0,
      });
    }
  }

  animateTriggers() {
    this.triggers.forEach((trigger) => {
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
      label.innerHTML = `Trigger ${trigPos.x.toFixed(2)}, ${trigPos.y.toFixed(
        2,
      )}, ${trigPos.z.toFixed(2)}`;
    });
  }
}

export default TriggerManager;
