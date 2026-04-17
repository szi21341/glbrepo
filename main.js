import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Controls for dragging and looking around
const controls = new OrbitControls(camera, renderer.domElement);

const loader = new GLTFLoader();
loader.load('https://github.com/szi21341/glbrepo/blob/main/sandwich.glb', (object) => {
    object.scale.set(0.01, 0.01, 0.01); // FBX models are often huge
    scene.add(object);
});

// Animation Loop
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();
