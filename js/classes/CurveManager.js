import * as THREE from 'three';

class CurveManager {
  constructor(scene, settings) {
    this.scene = scene;
    this.settings = settings;
    this.curves = [];
    this.splineHelperObjects = [];
  }

  addSplineObject(position, curveIndex) {
    const geometry = new THREE.BoxGeometry(0.4, 0.4, 0.4);
    const material = new THREE.MeshBasicMaterial({
      color: Math.random() * 0xffffff,
    });
    const object = new THREE.Mesh(geometry, material);
    object.position.copy(position);
    object.curveIndex = curveIndex;
    this.scene.add(object);
    this.splineHelperObjects.push(object);
    return object;
  }

  getSplineHelperObjects() {
    return this.splineHelperObjects;
  }

  createCurve(positions) {
    const curve = new THREE.CatmullRomCurve3(positions, this.settings.closed);
    this.updateCurveGeometry(curve);
    this.curves.push(curve);
  }

  updateCurveGeometry(curve) {
    const points = curve.getPoints(this.settings.arcSegments);
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    if (curve.mesh) {
      curve.mesh.geometry.dispose();
      curve.mesh.geometry = geometry;
    } else {
      const material = new THREE.LineBasicMaterial({
        color: Math.random() * 0xffffff,
        opacity: 0.35,
      });
      curve.mesh = new THREE.Line(geometry, material);
      this.scene.add(curve.mesh);
    }
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

    curvesPositions.forEach((positions, index) => {
      const curveObjects = positions.map((pos, idx) =>
        this.addSplineObject(pos, index),
      );
      this.createCurve(curveObjects.map((obj) => obj.position));
    });
  }

  updateSplineOutline() {
    this.curves.forEach((curve) => this.updateCurveGeometry(curve));
  }
}

export default CurveManager;
