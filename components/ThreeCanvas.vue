<template>
  <div class="relative">
    <canvas ref="canvas"></canvas>
    <div
      v-if="enableTextureControls"
      class="absolute bg-blue-50 bottom-0 drop-shadow-lg flex items-center mb-8 p-4 right-0 rounded-l-lg"
    >
      <p class="font-bold mr-3 text-gray-700">Change Skybox</p>
      <ThreeCanvasControl
        class="mr-1"
        direction="previous"
        @click="changeTexture('previous')"
        >Previous</ThreeCanvasControl
      >
      <ThreeCanvasControl direction="next" @click="changeTexture('next')"
        >Next</ThreeCanvasControl
      >
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({ enableTextureControls: Boolean })

const TEXTURES = [
  '/skybox/town_1.jpg',
  '/skybox/town_2.jpg',
  '/skybox/town_3.jpg',
  '/skybox/town_4.jpg',
  '/skybox/town_5.jpg',
  '/skybox/office_1.jpg',
  '/skybox/office_2.jpg',
  '/skybox/office_3.jpg',
]
const canvas = ref<HTMLCanvasElement | null>(null)
const currentTexture = ref(0)

const { init, animate, handleDispose, handleResize, updateSkybox } = useThree()

onMounted(() => {
  init({
    canvas: canvas.value,
    rendererOptions: {
      width: window.innerWidth,
      height: window.innerHeight,
      antialias: false,
    },
    texture: getRandomTexture(),
    cameraOptions: {
      fov: 90,
      aspect: window.innerWidth / window.innerHeight,
      near: 0.1,
      far: 1000,
    },
  })
  animate()
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  handleDispose()
  window.removeEventListener('resize', handleResize)
})

function changeTexture(direction: 'previous' | 'next') {
  if (direction === 'previous') {
    if (currentTexture.value === 0) currentTexture.value = TEXTURES.length - 1
    else currentTexture.value -= 1
  }
  if (direction === 'next') {
    if (currentTexture.value < TEXTURES.length - 1) currentTexture.value += 1
    else currentTexture.value = 0
  }
  updateSkybox(TEXTURES[currentTexture.value])
}

function getRandomTexture() {
  currentTexture.value = Math.floor(Math.random() * TEXTURES.length)
  return TEXTURES[currentTexture.value]
}
</script>

<style>
canvas {
  display: block;
}
</style>
