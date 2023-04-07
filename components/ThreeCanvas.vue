<template>
  <canvas ref="canvas"></canvas>
</template>

<script setup lang="ts">
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const canvas = ref<HTMLCanvasElement | null>(null)
let scene: THREE.Scene,
  camera: THREE.PerspectiveCamera,
  renderer: THREE.WebGLRenderer,
  sphere: THREE.Mesh,
  sphereTexture: THREE.Texture,
  controls: OrbitControls

function init() {
  // Create scene & camera
  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(
    90,
    window.innerWidth / window.innerHeight,
    0.1,
    1000,
  )
  camera.position.z = 5

  // Create render
  renderer = new THREE.WebGLRenderer({ canvas: canvas.value!, antialias: true })
  renderer.setSize(window.innerWidth, window.innerHeight)

  // Create sphere
  sphereTexture = new THREE.TextureLoader().load(
    '/skybox/digital_painting_work_from_home_office_software_e(2).jpg',
  )
  const geometry = new THREE.SphereGeometry(50, 32, 32)
  const material = new THREE.MeshBasicMaterial({
    map: sphereTexture,
    side: THREE.BackSide,
  })
  sphere = new THREE.Mesh(geometry, material)
  scene.add(sphere)

  // Create controls
  controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  controls.enablePan = false
  controls.autoRotate = true
  controls.autoRotateSpeed = 1
  controls.dampingFactor = 0.05
  controls.rotateSpeed = 0.3
  controls.minDistance = 10
  controls.maxDistance = 50
}

function animate() {
  requestAnimationFrame(animate)
  controls.update()
  renderer.render(scene, camera)
}

function handleResize() {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
}

onMounted(() => {
  init()
  animate()
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  renderer.dispose()
  controls.dispose()
  window.removeEventListener('resize', handleResize)
})
</script>

<style>
canvas {
  display: block;
}
</style>
