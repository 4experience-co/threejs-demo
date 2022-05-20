import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
// init

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate);

document.body.appendChild(renderer.domElement);
const camera = new THREE.PerspectiveCamera(
  70,
  window.innerWidth / window.innerHeight,
  0.01,
  100
);
camera.position.z = 2;

const controls = new OrbitControls(camera, renderer.domElement);
controls.maxDistance = 5;

const scene = new THREE.Scene();

const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
const planeGeometry = new THREE.BoxGeometry(10000, 0.1, 10000);
const skyGeometry = new THREE.BoxGeometry(10000, 0.1, 10000);
const sunGeometry = new THREE.SphereGeometry(0.5);

const boxMaterial = new THREE.MeshPhongMaterial({color: '#ff4fff',shininess: 55});
const planeMaterial = new THREE.MeshBasicMaterial({ color: '#08531e' });
const skyMaterial = new THREE.MeshBasicMaterial({ color: '#0c74d6' });
const sunMaterial = new THREE.MeshBasicMaterial({ color: '#f6fa02' });

const sun = new THREE.Mesh(sunGeometry, sunMaterial);
const cube = new THREE.Mesh(boxGeometry, boxMaterial);
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
const sky = new THREE.Mesh(skyGeometry, skyMaterial);

const sunLight = new THREE.PointLight('#ffffff', 2);
const ambientLight = new THREE.AmbientLight('#ffffff',0.5);

scene.add(sun);
scene.add(cube);
scene.add(plane);
scene.add(sky);
scene.add(sunLight);
scene.add(ambientLight);

plane.position.set(0, -5, 0);
sky.position.set(0, 15, 0);

sun.position.set(4, 13, 25);
sunLight.position.set(4, 13, 25);


function animate(time: number) {
  cube.rotation.x = (time / 20000);
  cube.rotation.y = (time / 10000);

  renderer.render(scene, camera);
}
