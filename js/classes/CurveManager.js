import * as THREE from 'three';

class CurveManager {
  constructor(scene, settings) {
    this.scene = scene;
    this.settings = settings;
    this.curves = [];
    this.splineHelperObjects = [];
  }

  getSplineHelperObjects() {
    return this.splineHelperObjects;
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

  createCurve(positions) {
    const curve = new THREE.CatmullRomCurve3(positions, this.settings.closed);
    curve.needsUpdate = true;
    this.curves.push(curve);
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

  deleteCurve(curveIndex) {
    const curveToRemove = this.curves[curveIndex];
    if (!curveToRemove) return;

    this.scene.remove(curveToRemove.mesh);
    curveToRemove.mesh.geometry.dispose();
    curveToRemove.mesh.material.dispose();

    this.splineHelperObjects = this.splineHelperObjects.filter((object) => {
      if (object.curveIndex === curveIndex) {
        this.scene.remove(object);
        object.geometry.dispose();
        object.material.dispose();
        return false;
      }
      return true;
    });

    this.curves.splice(curveIndex, 1);
  }

  updateCurveGeometry(curve) {
    const points = curve.getPoints(this.settings.arcSegments);
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    console.log(!curve.mesh);
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

  updateCurveFromControlPoint(object) {
    const curve = this.curves[object.curveIndex];

    if (curve) {
      curve.needsUpdate = true;
    }
  }

  updateSplineOutline() {
    this.curves.forEach((curve) => {
      // if (curve.needsUpdate) {
      // console.log(curve.needsUpdate);
      this.updateCurveGeometry(curve);
      curve.needsUpdate = false;
      // }
    });
  }
}

export default CurveManager;
