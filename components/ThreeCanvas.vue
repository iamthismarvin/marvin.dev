<template>
  <canvas ref="canvas"></canvas>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import * as THREE from 'three'

let scene: THREE.Scene,
  camera: THREE.PerspectiveCamera,
  renderer: THREE.WebGLRenderer,
  cube: THREE.Mesh
const canvas = ref<HTMLCanvasElement | null>(null)

function init() {
  // create scene
  scene = new THREE.Scene()

  // create camera
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000,
  )
  camera.position.z = 5

  // create renderer
  renderer = new THREE.WebGLRenderer({ canvas: canvas.value!, antialias: true })
  renderer.setSize(window.innerWidth, window.innerHeight)

  // create cube
  const geometry = new THREE.BoxGeometry()
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
  cube = new THREE.Mesh(geometry, material)
  scene.add(cube)
}

function animate() {
  requestAnimationFrame(animate)

  // animate cube
  cube.rotation.x += 0.01
  cube.rotation.y += 0.01

  // render scene
  renderer.render(scene, camera)
}

function handleResize() {
  // update camera aspect ratio and renderer size on window resize
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
  window.removeEventListener('resize', handleResize)
})
</script>

<style>
canvas {
  display: block;
}
</style>
