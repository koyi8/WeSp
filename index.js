import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { TransformControls } from 'three/addons/controls/TransformControls.js';
import { debounce } from './js/heplers/debounce';
import {
  updateTrajectoriesHTML,
  updateControlPointsHTML,
} from './js/updateTrajectoriesHTML';
import CurveManager from './js/classes/CurveManager';
import TriggerManager from './js/classes/TriggerManager';

const cameraSettings = {
  fov: 70, // field of view
  near: 1,
  far: 10000,
  position: { x: 30, y: 16, z: 0 },
};

const lightSettings = {
  ambient: { color: 0xf0f0f0, intensity: 3 },
  directional: {
    color: 0xffffff,
    intensity: 4.5,
    position: { x: 0, y: 30, z: 4 },
    angle: Math.PI * 0.2,
  },
};

const geometrySettings = {
  plane: {
    width: 20,
    height: 20,
    color: 0x000000,
    opacity: 1.0,
    rotationX: -Math.PI / 2,
  },
  gridHelper: {
    size: 20,
    divisions: 20,
  },
  axesHelper: {
    size: 20,
  },
};

const settings = {
  splinePointsLength: 4,
  arcSegments: 200,
  closed: true,
  loop: true,
  arcLength: 0,
  antialias: true,
  triggerAmount: 2,
  curveAmount: 2,
};

const container = document.getElementById('3d-container');
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
let camera, scene, renderer;
let curveManager;
let triggerManager;
let positionsArray = [];
let selectedObject = null;
let controls;
let transformControl;

const init = () => {
  setupScene();
  setupLights();
  setupGeometry();
  setupControls();
  curveManager = new CurveManager(scene, settings);
  curveManager.initCurves();
  triggerManager = new TriggerManager(scene, settings, curveManager, container);
  triggerManager.setupAddTriggerListeners();
  initListeners();
  render();
  updateTrajectoriesHTML(curveManager);
};

const setupScene = () => {
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xf0f0f0);

  const { width, height } = container.getBoundingClientRect();
  camera = new THREE.PerspectiveCamera(
    cameraSettings.fov,
    width / height,
    cameraSettings.near,
    cameraSettings.far,
  );
  camera.position.set(
    cameraSettings.position.x,
    cameraSettings.position.y,
    cameraSettings.position.z,
  );

  scene.add(camera);

  renderer = new THREE.WebGLRenderer({ antialias: settings.antialias });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(width, height);
  renderer.shadowMap.enabled = false; // disable shadows
  container.appendChild(renderer.domElement);
};

const setupLights = () => {
  const ambientLight = new THREE.AmbientLight(
    lightSettings.ambient.color,
    lightSettings.ambient.intensity,
  );
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(
    lightSettings.directional.color,
    lightSettings.directional.intensity,
  );
  directionalLight.position.set(
    lightSettings.directional.position.x,
    lightSettings.directional.position.y,
    lightSettings.directional.position.z,
  );
  directionalLight.angle = lightSettings.directional.angle;
  scene.add(directionalLight);
};

const setupGeometry = () => {
  const planeGeometry = new THREE.PlaneGeometry(
    geometrySettings.plane.width,
    geometrySettings.plane.height,
  ).rotateX(geometrySettings.plane.rotationX);
  const planeMaterial = new THREE.ShadowMaterial({
    color: geometrySettings.plane.color,
    opacity: geometrySettings.plane.opacity,
  });
  const plane = new THREE.Mesh(planeGeometry, planeMaterial);
  scene.add(plane);

  const gridHelper = new THREE.GridHelper(
    geometrySettings.gridHelper.size,
    geometrySettings.gridHelper.divisions,
  );
  scene.add(gridHelper);
};

const setupControls = () => {
  const axesHelper = new THREE.AxesHelper(geometrySettings.axesHelper.size);

  controls = new OrbitControls(camera, renderer.domElement);
  transformControl = new TransformControls(camera, renderer.domElement);
  scene.add(transformControl, axesHelper);
};

const animate = () => {
  requestAnimationFrame(animate);
  triggerManager.animateTriggers(positionsArray);
  curveManager.updateSplineOutline();
  render();
};

const render = () => {
  renderer.render(scene, camera);
  triggerManager.renderLabels(camera);
};

const onWindowResize = () => {
  const { width, height } = container.getBoundingClientRect();
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
  triggerManager.updateLabelRendererSize(width, height);
  render();
};

const onDocumentMouseDown = (event) => {
  event.preventDefault();

  mouse.x = (event.clientX / renderer.domElement.clientWidth) * 2 - 1;
  mouse.y = -(event.clientY / renderer.domElement.clientHeight) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);

  const intersects = raycaster.intersectObjects(
    curveManager.getSplineHelperObjects(),
    true,
  );

  if (intersects.length > 0) {
    const object = intersects[0].object;

    if (transformControl.object !== object) {
      const curveIndex = selectedObject ? selectedObject.curveIndex : undefined;

      transformControl.detach();
      selectedObject = object;
      transformControl.attach(selectedObject);

      if (curveIndex !== undefined) {
        curveManager.curves[curveIndex].needsUpdate = true;
      }
    }
  } else {
    if (!transformControl.dragging) {
      transformControl.detach();
      selectedObject = null;
    }
  }
};

// const onDocumentMouseUp = (event) => {
//   event.preventDefault();
//   if (controls) controls.enabled = true;
//   selectedObject = null;
// };

const debouncedUpdateControlPointsHTML = debounce(() => {
  updateControlPointsHTML(curveManager);
}, 300);

const initListeners = () => {
  renderer.domElement.addEventListener('mousedown', onDocumentMouseDown, false);
  // renderer.domElement.addEventListener('mouseup', onDocumentMouseUp, false);
  window.addEventListener('resize', debounce(onWindowResize, 250), false);
  transformControl.addEventListener('mouseDown', (event) => {
    controls.enabled = false;
  });
  transformControl.addEventListener('mouseUp', (event) => {
    controls.enabled = true;
  });
  transformControl.addEventListener('dragging-changed', (event) => {
    controls.enabled = !event.value;
  });
  transformControl.addEventListener('objectChange', () => {
    if (selectedObject) {
      curveManager.updateCurveFromControlPoint(selectedObject);
      debouncedUpdateControlPointsHTML();
    }
  });
  document.getElementById('create-curve').addEventListener('click', () => {
    curveManager.addRandomCurve();
  });
};

init();
animate();

export { positionsArray };
