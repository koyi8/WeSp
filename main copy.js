import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';

const settings = {
  splinePointsLength: 4,
  arcSegments: 200,
  closed: true,
  loop: true,
  arcLength: 0,
  antialias: true,
  triggerAmount: 1,
  curveAmount: 2,
};

let camera, scene, renderer;
let curves = [],
  triggers = [];
const splineHelperObjects = [],
  triggerSpeeds = [],
  triggerPositions = [],
  triggerAnimate = [],
  triggerCurveIndices = [];
let exportPositionsArray = [];

const init = () => {
  setupScene();
  setupLights();
  setupGeometry();
  setupControls();
  createCurves();
  createTriggers();
  render();
};

const setupScene = () => {
  const container = document.getElementById('container');
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xf0f0f0);

  const { width, height } = container.getBoundingClientRect();
  camera = new THREE.PerspectiveCamera(70, width / height, 1, 10000);
  camera.position.set(30, 16, 0);
  scene.add(camera);

  renderer = new THREE.WebGLRenderer({ antialias: settings.antialias });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(width, height);
  container.appendChild(renderer.domElement);
};

const setupLights = () => {
  const ambientLight = new THREE.AmbientLight(0xf0f0f0, 3);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 4.5);
  directionalLight.position.set(0, 30, 4);
  directionalLight.angle = Math.PI * 0.2;
  directionalLight.castShadow = true;
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

const createCurves = () => {
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

  for (let j = 0; j < settings.curveAmount; j++) {
    const positions = curvesPositions[j];
    positions.forEach((position) => addSplineObject(position));
    curves.push(createCurve(positions));
  }
};

const createTriggers = () => {
  const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
  const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

  for (let i = 0; i < settings.triggerAmount; i++) {
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    const cubeLabel = new CSS2DObject(document.createElement('div'));
    cubeLabel.position.set(0, 3, 0);
    cube.add(cubeLabel);
    scene.add(cube);

    triggers.push(cube);
    triggerSpeeds.push(Math.random() * 0.2);
    triggerPositions.push(Math.random());
    triggerAnimate.push(true);
    triggerCurveIndices.push(0);
  }
};

const animate = () => {
  requestAnimationFrame(animate);
  triggers.forEach((trigger, i) => animateTrigger(trigger, i));
  updateSplineOutline();
  render();
};

const animateTrigger = (trigger, index) => {
  const curveIndex = triggerCurveIndices[index];
  const curve = curves[curveIndex];
  let position = triggerPositions[index];
  let speed = triggerSpeeds[index];

  // Update position based on speed
  position += speed / curve.getLength();
  triggerPositions[index] = position;

  // Loop or bounce the movement
  if (settings.loop) {
    position %= 1;
  } else {
    if (position > 1 || position < 0) {
      triggerSpeeds[index] *= -1;
      position = Math.min(Math.max(position, 0), 1);
    }
  }

  // Update trigger position
  const trigPos = curve.getPointAt(position % 1);
  trigger.position.copy(trigPos);

  // Update label
  const label = trigger.children[0].element; // Assuming the first child is the label
  label.innerHTML = `Trigger ${index + 1}: ${trigPos.x.toFixed(
    2,
  )}, ${trigPos.y.toFixed(2)}, ${trigPos.z.toFixed(2)}`;
};

const createCurve = (positions) => {
  const curve = new THREE.CatmullRomCurve3(positions, settings.closed);
  const geometry = new THREE.BufferGeometry().setAttribute(
    'position',
    new THREE.BufferAttribute(new Float32Array(settings.arcSegments * 3), 3),
  );
  const colors = [0x000000, 0xff0000, 0x0000ff, 0x808080];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const material = new THREE.LineBasicMaterial({
    color: randomColor,
    opacity: 0.35,
  });
  curve.mesh = new THREE.Line(geometry, material);
  scene.add(curve.mesh);

  return curve;
};

const addSplineObject = (position) => {
  const geometry = new THREE.BoxGeometry(0.4, 0.4, 0.4);
  const material = new THREE.MeshBasicMaterial({
    color: Math.random() * 0xffffff,
  });
  const object = new THREE.Mesh(geometry, material);
  object.position.copy(position);
  scene.add(object);
  splineHelperObjects.push(object);
};

const updateSplineOutline = () => {
  curves.forEach((curve) => {
    const splineMesh = curve.mesh;
    const position = splineMesh.geometry.attributes.position;
    for (let i = 0; i < settings.arcSegments; i++) {
      const t = i / (settings.arcSegments - 1);
      const point = curve.getPoint(t);
      position.setXYZ(i, point.x, point.y, point.z);
    }
    position.needsUpdate = true;
  });
};

const render = () => {
  renderer.render(scene, camera);
};

init();
animate();

export { exportPositionsArray };
