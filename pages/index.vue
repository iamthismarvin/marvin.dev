import { ThreeRenderer } from '~/.nuxt/components';

<template>
  <div>
    <div class="flex items-center m-4 absolute">
      <img
        src="@/assets/images/logo.svg"
        alt="Marvin Parada"
        class="h-8 mr-4"
      />
    </div>
    <ClientOnly>
      <ThreeCanvas />
    </ClientOnly>
  </div>
</template>
