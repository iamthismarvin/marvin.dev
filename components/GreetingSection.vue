<template>
  <div
    :class="[
      'absolute bg-blue-50 drop-shadow-lg flex flex-col items-center justify-center p-4 rounded-xl text-gray-700 z-10 md:p-10',
    ]"
  >
    <div>
      <p class="font-black text-3xl md:text-4xl">Hello!</p>
      <p class="font-black text-6xl text-teal-600 md:text-7xl lg:text-8xl">
        I'm Marvin
      </p>
      <p class="font-black text-3xl md:text-4xl text-right">
        Software Engineer
      </p>
    </div>
    <a
      href="mailto:hello@marvin.dev"
      rel="noopener noreferrer"
      class="bg-pink-600 font-bold mt-8 p-3 rounded shadow-md text-white"
    >
      Let's work together!
    </a>
  </div>
</template>
