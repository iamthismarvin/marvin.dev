<template>
  <div>
    <div class="flex items-center m-4 absolute z-10">
      <img
        src="@/assets/images/logo.svg"
        alt="Marvin Parada"
        class="h-8 mr-4"
      />
    </div>
    <ClientOnly>
      <ThreeCanvas enable-texture-controls />
    </ClientOnly>
  </div>
</template>
