import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { TransformControls } from 'three/addons/controls/TransformControls.js';
import { debounce } from './js/heplers/debounce';
import {
  updateTrajectoriesHTML,
  updateControlPointsHTML,
  selectedCurveIndex,
} from './js/updateTrajectoriesHTML';
import CurveManager from './js/classes/CurveManager';
import TriggerManager from './js/classes/TriggerManager';
import MultiPlayerManager from './js/classes/MultiPlayerManager';
import { createOCSTables } from './js/createOCSTables';

const cameraSettings = {
  fov: 70, // field of view
  near: 0.1,
  far: 5000,
  position: { x: 3, y: 0, z: 1.6 },
  up: { x: 0, y: 0, z: 1 },
};

const lightSettings = {
  ambient: { color: 0xf0f0f0, intensity: 3 },
  directional: {
    color: 0xffffff,
    intensity: 4.5,
    position: { x: 0, y: 0.4, z: 3 },
    angle: Math.PI * 0.2,
  },
};

const geometrySettings = {
  plane: {
    width: 10,
    height: 10,
    color: 0xff0000,
    opacity: 1.0,
    rotationX: Math.PI / 2,
  },
  gridHelper: {
    size: 2,
    divisions: 20,
  },
  axesHelper: {
    size: 2,
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
let multiPlayerManager;
let positionsArray = [];
let selectedObject = null;
let controls;
let transformControl;
let socket;

let isDragging = false;

const init = () => {
  setupSocket();
  setupScene();
  setupLights();
  setupGeometry();
  setupControls();
  curveManager = new CurveManager(scene, settings, container);
  curveManager.initCurves();
  triggerManager = new TriggerManager(scene, settings, curveManager, container);
  triggerManager.setupAddTriggerListeners();
  multiPlayerManager = new MultiPlayerManager(
    scene,
    curveManager,
    triggerManager,
    socket,
  );
  curveManager.setMultiPlayerManager(multiPlayerManager);
  initListeners();
  render();
  updateTrajectoriesHTML(curveManager);
  createOCSTables();
  multiPlayerManager.initSocketID();
  multiPlayerManager.toggleDummyState();
  multiPlayerManager.receiveClientList();
  multiPlayerManager.getCurvesOnClientConnected();
  multiPlayerManager.getTriggersOnClientConnected();
  multiPlayerManager.setCurvesOnClientConnected();
  multiPlayerManager.setTriggersOnClientConnected();
  multiPlayerManager.updateSceneOnChanges();
  multiPlayerManager.updateClientsDiv();
  multiPlayerManager.updateTriggersClientOnChange();
  multiPlayerManager.updateTriggersClientsStateFromServer();
};

const setupSocket = () => {
  const serverURL = 'http://:8081/'; //
  // Client Initialization
  socket = io(serverURL);
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
  camera.up.set(cameraSettings.up.x, cameraSettings.up.y, cameraSettings.up.z);

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
  );
  planeGeometry.rotateX(-Math.PI / 2);
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
  gridHelper.rotation.x = -Math.PI / 2;
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
  //triggerManager.animateTriggers(positionsArray);
  triggerManager.animateAllTriggers(positionsArray);
  curveManager.updateSplineOutline();
  multiPlayerManager.sendUpdateTriggersClientsStateToServer();
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
  console.log(selectedCurveIndex);

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

const debouncedUpdateControlPointsHTML = debounce(() => {
  updateControlPointsHTML(curveManager);
  multiPlayerManager.sendStatetoServer();
  // console.log(multiPlayerManager.clients);
  //console.log(triggerManager.triggers);
  console.log(positionsArray);
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
    isDragging = event.value;
  });
  transformControl.addEventListener('objectChange', () => {
    if (selectedObject) {
      curveManager.updateCurveFromControlPoint(selectedObject);
      debouncedUpdateControlPointsHTML();
    }
  });
  document.getElementById('create-curve').addEventListener('click', () => {
    curveManager.addRandomCurve();
    debouncedUpdateControlPointsHTML();
  });
  window.addEventListener('uiUpdated', () => {
    debouncedUpdateControlPointsHTML();
  });
  window.addEventListener('addedTrigger', () => {
    multiPlayerManager.sendTriggersClientsLengthToServer();
  });
  window.addEventListener('deletedTrigger', () => {
    multiPlayerManager.sendTriggersClientsLengthToServer();
  });
};

init();
animate();

export { positionsArray, socket };
