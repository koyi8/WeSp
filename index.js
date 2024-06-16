import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { TransformControls } from 'three/addons/controls/TransformControls.js';
import {
  CSS2DObject,
  CSS2DRenderer,
} from 'three/addons/renderers/CSS2DRenderer.js';
import { debounce } from './js/helpers/debounce';
import { logUIInteraction } from './js/helpers/logUIInteraction';
import {
  updateTrajectoriesHTML,
  updateControlPointsHTML,
  selectedCurveIndex,
} from './js/GUI/trajectoriesModule_GUI';
import CurveManager from './js/classes/CurveManager';
import ObjectManager from './js/classes/ObjectManager';
import MultiPlayerManager from './js/classes/MultiPlayerManager';
import { createOCSTables } from './js/GUI/oscModule_GUI';
import Stats from 'three/addons/libs/stats.module.js';

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
    size: 1.5,
  },
};

const settings = {
  splinePointsLength: 4,
  arcSegments: 200,
  closed: true,
  loop: true,
  arcLength: 0,
  antialias: true,
  objectAmount: 2,
  curveAmount: 1,
};

const container = document.getElementById('3d-container');
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
let camera, scene, renderer;
let curveManager;
let objectManager;
let multiPlayerManager;
let positionsArray = [];
let selectedObject = null;
let controls;
let transformControl;
let socket;
let stats;

// interaction log
let interactionLog = {};

let isDragging = false;

const init = () => {
  setupSocket();
  setupStats();
  setupScene();
  setupLights();
  setupGeometry();
  setupControls();
  curveManager = new CurveManager(scene, settings, container);
  curveManager.initCurves();
  objectManager = new ObjectManager(scene, settings, curveManager, container);
  objectManager.setupAddObjectListeners();
  multiPlayerManager = new MultiPlayerManager(
    scene,
    curveManager,
    objectManager,
    socket,
  );
  curveManager.setMultiPlayerManager(multiPlayerManager);
  initListeners();
  render();
  updateTrajectoriesHTML(curveManager, true); // true value for isNewTrajectory
  createOCSTables();
  setupMultiPlayerManager();
};

const setupSocket = () => {
  const serverURL = 'http://:8081/'; //
  // Client Initialization
  socket = io(serverURL);
};

const setupMultiPlayerManager = () => {
  multiPlayerManager.initSocketID();
  multiPlayerManager.toggleDummyState();
  multiPlayerManager.receiveClientList();
  multiPlayerManager.getCurvesOnClientConnected();
  multiPlayerManager.getObjectsOnClientConnected();
  multiPlayerManager.setCurvesOnClientConnected();
  multiPlayerManager.setObjectsOnClientConnected();
  multiPlayerManager.updateCurvesOnChanges();
  multiPlayerManager.updateClientsDiv();
  multiPlayerManager.updateObjectsClientOnChange();
  multiPlayerManager.updateObjectsClientsStateFromServer();
  multiPlayerManager.setObjectsOnClientDisconnected();
  multiPlayerManager.getClientColor();
  multiPlayerManager.listenRequestLogging();
};

const setupStats = () => {
  stats = new Stats();
  stats.dom.style.position = 'absolute';
  stats.dom.style.left = '0';
  stats.dom.style.bottom = '0%';
  stats.dom.style.top = 'unset';
  const settingsTab = document.getElementById('settings-container');

  settingsTab.appendChild(stats.dom);
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
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2.0));
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

  /*
  const polarGridHelper = new THREE.PolarGridHelper(
    1.3,
    32,
    16,
    64,
    0x808080,
    0x808080,
  );
  polarGridHelper.rotation.x = -Math.PI / 2;
  scene.add(polarGridHelper);
*/

  const axesHelper = new THREE.AxesHelper(geometrySettings.axesHelper.size);
  scene.add(axesHelper);
  // Create labels
  const labels = ['X+', 'Y+', 'Z+'];
  const colors = [0xff9900, 0x00cc00, 0x0099ff]; // Red for X, Green for Y, Blue for Z

  labels.forEach((label, i) => {
    const div = document.createElement('div');
    div.className = 'axes-label';
    div.textContent = label;
    div.style.color = `#${colors[i].toString(16).padStart(6, '0')}`;
    const labelObject = new CSS2DObject(div);
    labelObject.position.set(
      i === 0 ? 1.6 : 0,
      i === 1 ? 1.6 : 0,
      i === 2 ? 1.6 : 0,
    );
    axesHelper.add(labelObject);
  });
};

const setupControls = () => {
  controls = new OrbitControls(camera, renderer.domElement);
  transformControl = new TransformControls(camera, renderer.domElement);
  scene.add(transformControl);
};

const resetViewPoint = () => {
  camera.position.set(
    cameraSettings.position.x,
    cameraSettings.position.y,
    cameraSettings.position.z,
  );
  controls.reset();
  render();
};

const moveCamera = (direction) => {
  let initPosition = { x: camera.position.x, y: camera.position.y };

  switch (direction) {
    case 'left':
      camera.position.x = -initPosition.y; // Change to -x
      camera.position.y = initPosition.x; // Keep y the same
      break;
    case 'right':
      camera.position.x = initPosition.y; // Keep x the same
      camera.position.y = -initPosition.x; // Change to y
      break;
  }
  camera.lookAt(scene.position);
  render();
};

document
  .getElementById('reset-viewpoint')
  .addEventListener('click', resetViewPoint);

document
  .getElementById('rotate-left')
  .addEventListener('click', () => moveCamera('left')); // Move camera to the left

document
  .getElementById('rotate-right')
  .addEventListener('click', () => moveCamera('right')); // Move camera to the right

/*
const animate = () => {
  //requestAnimationFrame(animate);

  setTimeout(function () {
    requestAnimationFrame(animate);
  }, 1000 / 40);
  //objectManager.animateObjects(positionsArray);
  objectManager.animateAllObjects(positionsArray);
  curveManager.updateSplineOutline();
  multiPlayerManager.sendUpdateObjectsClientsStateToServer();
  render();
  stats.update();
};

*/

let lastRenderTime = performance.now();
let renderFPS = 50;
let renderInterval = 1000 / renderFPS;

let lastUpdateTime = 0;
let updateRate = 100; // Send update every 100 ms

const animate = () => {
  requestAnimationFrame(animate);
  let currentTime = performance.now();
  let delta = currentTime - lastRenderTime;

  if (delta > renderInterval) {
    // The draw or time dependent code are here
    objectManager.animateAllObjects(positionsArray);
    curveManager.updateSplineOutline();
    render();

    lastRenderTime = currentTime - (delta % renderInterval);
    stats.update();
  }

  updateObjectsToServer(currentTime);
};

const updateObjectsToServer = (currentTime) => {
  if (currentTime - lastUpdateTime > updateRate) {
    multiPlayerManager.sendUpdateObjectsClientsStateToServer();
    lastUpdateTime = currentTime;
  }
};

const render = () => {
  renderer.render(scene, camera);
  objectManager.renderLabels(camera);
};

const onWindowResize = () => {
  const { width, height } = container.getBoundingClientRect();
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
  objectManager.updateLabelRendererSize(width, height);
  render();
};

const onDocumentMouseDown = (event) => {
  event.preventDefault();
  //console.log(selectedCurveIndex);

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

export const debouncedUpdateControlPointsHTML = debounce(() => {
  // multiPlayerManager.sendCurvesStateToServer();
  updateControlPointsHTML(curveManager);
  multiPlayerManager.sendCurvesStateToServer();
  //console.log(positionsArray);
}, 300);

// Debounced log function
const debouncedOrbitControlLog = debounce(() => {
  logUIInteraction('3DModule', 'Orbit Control: 3DScene');
}, 250); // 250ms delay

// Interaction log add clientID
const clientIDtoInteractionLog = (entry) => {
  const { module, event } = entry;

  interactionLog = {
    clientID: multiPlayerManager.socketID,
    module: module,
    event: event,
  };
  return interactionLog;
};

const initListeners = () => {
  renderer.domElement.addEventListener('mousedown', onDocumentMouseDown, false);
  // renderer.domElement.addEventListener('mouseup', onDocumentMouseUp, false);
  window.addEventListener('resize', debounce(onWindowResize, 250), false);

  controls.addEventListener('end', debouncedOrbitControlLog);

  transformControl.addEventListener('mouseDown', (event) => {
    controls.enabled = false;
  });
  transformControl.addEventListener('mouseUp', (event) => {
    controls.enabled = true;

    // interaction log
    logUIInteraction('3DModule', 'Control Point Changed: 3DScene');
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
  window.addEventListener('uiUpdated', () => {
    debouncedUpdateControlPointsHTML();
  });
  window.addEventListener('addedObject', (event) => {
    multiPlayerManager.sendObjectsClientsLengthToServer();
    //interaction logging
    logUIInteraction('objectsModule', `Added Object ${event.detail.index + 1}`);
  });
  window.addEventListener('deletedObject', () => {
    multiPlayerManager.sendObjectsClientsLengthToServer();
  });
  window.addEventListener('interactionLog', (e) => {
    const entry = e.detail;
    const interactionlog = clientIDtoInteractionLog(entry);
    multiPlayerManager.sendLogDatatoServer(interactionlog);
  });
};

init();
animate();

export { positionsArray, socket };
