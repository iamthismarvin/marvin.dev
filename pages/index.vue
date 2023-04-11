<template>
  <div class="home bg-red-200 min-h-screen">
    <HeaderSection />
    <div class="relative flex items-center justify-center">
      <GreetingSection />
      <ClientOnly>
        <ThreeCanvas enable-texture-controls />
      </ClientOnly>
    </div>
  </div>
</template>
