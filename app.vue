<template>
  <NuxtPage />
</template>

<script setup lang="ts">
const route = useRoute()
const title = ref(`Marvin Parada | ${route.meta.title ?? 'Software Engineer'}`)
const description = ref(
  "I'm Marvin. I build software. Make a positive social impact and shape a brighter future through technology. Want to work together? Let's talk!",
)
const image = ref('https://marvin-dev-test.netlify.app/open_graph.png')

useSeoMeta({
  title,
  ogTitle: title,
  twitterTitle: title,
  description,
  ogDescription: description,
  twitterDescription: description,
  ogImage: image,
  twitterImage: image,
})
</script>
