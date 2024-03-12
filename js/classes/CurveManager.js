import * as THREE from 'three';
import { updateTrajectoriesHTML } from '../updateTrajectoriesHTML';

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

  addNewSplineObject(curveIndex, position = new THREE.Vector3()) {
    this.addSplineObject(position, curveIndex);
    this.updateCurveFromControlPoint({ curveIndex });
  }

  deleteSplineObject(objectIndex) {
    const objectToRemove = this.splineHelperObjects[objectIndex];
    if (!objectToRemove) return;

    const { curveIndex } = objectToRemove;

    this.scene.remove(objectToRemove);
    objectToRemove.geometry.dispose();
    objectToRemove.material.dispose();

    this.splineHelperObjects.splice(objectIndex, 1);

    this.updateCurveFromControlPoint({ curveIndex });
  }

  addRandomCurve() {
    const randomPositions = [];

    for (let i = 0; i < 4; i++) {
      randomPositions.push(
        new THREE.Vector3(
          THREE.MathUtils.randFloatSpread(20), // x between -10 and 10
          THREE.MathUtils.randFloat(0, 10), // y between 0 and 10
          THREE.MathUtils.randFloatSpread(20), // z between -10 and 10
        ),
      );
    }

    const curveIndex = this.curves.length;
    const curveObjects = randomPositions.map((pos) =>
      this.addSplineObject(pos, curveIndex),
    );
    this.createCurve(
      curveObjects.map((obj) => obj.position),
      this.settings.closed,
    );

    updateTrajectoriesHTML(this);
  }

  createCurve(positions, isClosed) {
    const curve = new THREE.CatmullRomCurve3(positions, isClosed);
    curve.needsUpdate = true;
    this.curves.push(curve);
  }

  initCurves() {
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
      const curveObjects = positions.map((pos) =>
        this.addSplineObject(pos, index),
      );
      this.createCurve(
        curveObjects.map((obj) => obj.position),
        this.settings.closed,
      );
    });
  }

  deleteCurve(curveIndex) {
    const curveToRemove = this.curves[curveIndex];
    if (curveToRemove && curveToRemove.mesh) {
      this.scene.remove(curveToRemove.mesh);
      curveToRemove.mesh.geometry.dispose();
      curveToRemove.mesh.material.dispose();
    }

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

    this.splineHelperObjects.forEach((object) => {
      if (object.curveIndex > curveIndex) {
        object.curveIndex--;
      }
    });

    for (let i = curveIndex; i < this.curves.length; i++) {
      if (this.curves[i].mesh) {
        this.curves[i].mesh.curveIndex--;
      }
    }
  }

  toggleCurveClosed(curveIndex, isClosed) {
    const curve = this.curves[curveIndex];
    if (curve) {
      curve.closed = isClosed;
      this.updateCurveFromControlPoint({ curveIndex });
    }
  }

  toggleCurveSelected(curveIndex, isSelected) {
    const curve = this.curves[curveIndex];
    if (curve) {
      if (curve.mesh) {
        curve.mesh.geometry.dispose();
      }
      const radius = isSelected ? 0.1 : 0.03;
      const geometry = new THREE.TubeGeometry(curve, 100, radius, 8, false);
      curve.mesh.geometry = geometry;
    }
  }

  updateCurveGeometry(curve) {
    const geometry = new THREE.TubeGeometry(curve, 100, 0.03, 8, false);

    if (curve.mesh) {
      curve.mesh.geometry.dispose();
      curve.mesh.geometry = geometry;
    } else {
      const material = new THREE.MeshLambertMaterial({
        color: Math.random() * 0xffffff,
      });
      curve.mesh = new THREE.Mesh(geometry, material);
      this.scene.add(curve.mesh);
    }
  }

  updateCurveTension(curveIndex, tension) {
    const curve = this.curves[curveIndex];
    if (curve) {
      const points = this.splineHelperObjects
        .filter((object) => object.curveIndex === curveIndex)
        .map((object) => object.position.clone());

      curve.curveType = 'catmullrom';
      curve.tension = tension;
      curve.points = points;

      this.updateCurveGeometry(curve);
    }
  }

  updateCurveFromControlPoint(object) {
    const curve = this.curves[object.curveIndex];

    if (curve) {
      const newPositions = this.splineHelperObjects
        .filter((obj) => obj.curveIndex === object.curveIndex)
        .map((obj) => obj.position);

      curve.points = newPositions;
      curve.needsUpdate = true;

      this.updateCurveGeometry(curve);
    }
  }

  updateSplineOutline() {
    this.curves.forEach((curve) => {
      if (curve.needsUpdate) {
        this.updateCurveGeometry(curve);
        curve.needsUpdate = false;
      }
    });
  }
}

export default CurveManager;
