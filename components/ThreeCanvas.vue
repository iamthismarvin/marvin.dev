<template>
  <canvas ref="canvas"></canvas>
  <button class="absolute top-0 right-0" @click="getNextTexture">
    Update Skybox
  </button>
</template>

<script setup lang="ts">
const TEXTURES = [
  '/skybox/digital_painting_cozy_town_fantasy_world_combina.jpg',
  '/skybox/digital_painting_mountain_landscape_with_lake_and_.jpg',
  '/skybox/digital_painting_mountain_landscape_with_lake_and_(1).jpg',
  '/skybox/digital_painting_work_from_home_office_software_e(2).jpg',
]
const canvas = ref<HTMLCanvasElement | null>(null)
const currentTexture = ref(0)

const { init, animate, handleDispose, handleResize, updateSkybox } = useThree()

onMounted(() => {
  init({ canvas: canvas.value, texture: getRandomTexture() })
  animate()
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  handleDispose()
  window.removeEventListener('resize', handleResize)
})

function getNextTexture() {
  if (currentTexture.value < TEXTURES.length - 1) currentTexture.value += 1
  else currentTexture.value = 0
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
