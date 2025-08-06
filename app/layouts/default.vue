<template>
  <div
    class="bg-bg-gray dark:bg-bg-primary w-screen h-screen text-primary dark:text-white"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode();

console.log(colorMode.value);
</script>
