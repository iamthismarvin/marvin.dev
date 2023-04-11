<template>
  <button
    class="bg-teal-600 drop-shadow-md flex h-10 items-center justify-center outline-none p-2 text-white rounded-full w-10 sm:h-8 sm:w-8"
  >
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="h-6 w-6 sm:h-5 sm:w-5"
      >
        <path stroke-linecap="round" stroke-linejoin="round" :d="arrowIcon" />
      </svg>
    </div>
  </button>
</template>

<script setup lang="ts">
const props = defineProps({ direction: { type: String, required: true } })

const arrowIcon = computed(() =>
  props.direction === 'previous'
    ? 'M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18'
    : 'M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3',
)
</script>
