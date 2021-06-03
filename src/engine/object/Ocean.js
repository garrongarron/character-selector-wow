import * as THREE from 'three';

const boxWidth = 100;
const boxHeight = .1;
const boxDepth = 100;
const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

const material = new THREE.MeshStandardMaterial({ color: 0x336BFF });

const ocean = new THREE.Mesh(geometry, material);
ocean.position.y = -.05
ocean.castShadow = true;
ocean.receiveShadow = true;

export default ocean