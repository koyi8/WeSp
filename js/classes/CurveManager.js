import * as THREE from 'three';

class CurveManager {
  constructor(scene, settings) {
    this.scene = scene;
    this.settings = settings;
    this.curves = [];
    this.splineHelperObjects = [];
  }

  addSplineObject(position) {
    const geometry = new THREE.BoxGeometry(0.4, 0.4, 0.4);
    const material = new THREE.MeshBasicMaterial({
      color: Math.random() * 0xffffff,
    });
    const object = new THREE.Mesh(geometry, material);
    object.position.copy(position);
    this.scene.add(object);
    this.splineHelperObjects.push(object);
  }

  createCurve(positions) {
    const curve = new THREE.CatmullRomCurve3(positions, this.settings.closed);
    const geometry = new THREE.BufferGeometry().setAttribute(
      'position',
      new THREE.BufferAttribute(
        new Float32Array(this.settings.arcSegments * 3),
        3,
      ),
    );
    const colors = [0x000000, 0xff0000, 0x0000ff, 0x808080];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const material = new THREE.LineBasicMaterial({
      color: randomColor,
      opacity: 0.35,
    });
    curve.mesh = new THREE.Line(geometry, material);
    this.scene.add(curve.mesh);
    return curve;
  }

  createCurves() {
    const curvesPositions = [
      [
        new THREE.Vector3(-10, 1, -10),
        new THREE.Vector3(10, 1, -10),
        new THREE.Vector3(10, 1, 10),
        new THREE.Vector3(-10, 1, 10),
      ],
      [
        new THREE.Vector3(-10, 4, -10),
        new THREE.Vector3(10, 4, -10),
        new THREE.Vector3(10, 4, 10),
        new THREE.Vector3(-10, 4, 10),
      ],
    ];

    for (let j = 0; j < this.settings.curveAmount; j++) {
      const positions = curvesPositions[j];
      positions.forEach((position) => this.addSplineObject(position));
      this.curves.push(this.createCurve(positions));
    }
  }

  updateSplineOutline() {
    this.curves.forEach((curve) => {
      const splineMesh = curve.mesh;
      const position = splineMesh.geometry.attributes.position;
      for (let i = 0; i < this.settings.arcSegments; i++) {
        const t = i / (this.settings.arcSegments - 1);
        const point = curve.getPoint(t);
        position.setXYZ(i, point.x, point.y, point.z);
      }
      position.needsUpdate = true;
    });
  }
}

export default CurveManager;
