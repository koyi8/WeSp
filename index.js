import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import CurveManager from './js/classes/CurveManager';
import TriggerManager from './js/classes/TriggerManager';

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

let camera, scene, renderer;
let curveManager;
let triggerManager;
let positionsArray = [];
let container;

const init = () => {
  container = document.getElementById('3d-container');
  setupScene();
  setupLights();
  setupGeometry();
  setupControls();
  curveManager = new CurveManager(scene, settings);
  curveManager.createCurves();
  triggerManager = new TriggerManager(scene, settings, curveManager, container);
  triggerManager.createTriggers();
  render();
  window.addEventListener('resize', onWindowResize, false);
};

const setupScene = () => {
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xf0f0f0);

  const { width, height } = container.getBoundingClientRect();
  camera = new THREE.PerspectiveCamera(70, width / height, 1, 10000);
  camera.position.set(30, 16, 0);
  scene.add(camera);

  renderer = new THREE.WebGLRenderer({ antialias: settings.antialias });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(width, height);
  renderer.shadowMap.enabled = false; // disable shadows
  container.appendChild(renderer.domElement);
};

const setupLights = () => {
  const ambientLight = new THREE.AmbientLight(0xf0f0f0, 3);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 4.5);
  directionalLight.position.set(0, 30, 4);
  directionalLight.angle = Math.PI * 0.2;
  scene.add(directionalLight);
};

const setupGeometry = () => {
  const planeGeometry = new THREE.PlaneGeometry(20, 20).rotateX(-Math.PI / 2);
  const planeMaterial = new THREE.ShadowMaterial({
    color: 0x000000,
    opacity: 1.0,
  });
  const plane = new THREE.Mesh(planeGeometry, planeMaterial);
  scene.add(plane);

  const gridHelper = new THREE.GridHelper(20, 20);
  scene.add(gridHelper);
};

const setupControls = () => {
  new OrbitControls(camera, renderer.domElement);
  const axesHelper = new THREE.AxesHelper(20);
  scene.add(axesHelper);
};

const animate = () => {
  requestAnimationFrame(animate);
  triggerManager.animateTriggers();
  curveManager.updateSplineOutline();
  render();
};

const render = () => {
  renderer.render(scene, camera);
  triggerManager.renderLabels(camera);
};

// Throttle resize function
let resizeTimeout;
const onWindowResize = () => {
  if (!resizeTimeout) {
    resizeTimeout = setTimeout(() => {
      resizeTimeout = null;
      const { width, height } = container.getBoundingClientRect();
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      triggerManager.updateLabelRendererSize(width, height);
      render();
    }, 250); // execute every 250ms
  }
};

init();
animate();

export { positionsArray };
