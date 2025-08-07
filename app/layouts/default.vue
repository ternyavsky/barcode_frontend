<template>
  <div
    class="bg-bg-gray dark:bg-bg-primary w-screen h-screen text-text-primary dark:text-white"
  >
    <Button
      color="primary"
      text-color="dark"
      size="md"
      class="absolute top-4 right-4"
      @click="changeColor"
      >change color</Button
    >
    <slot />
  </div>
</template>

<script setup lang="ts">
import Button from "~/shared/ui/Button.vue";
const colorMode = useColorMode();

const isDark = computed(() => colorMode.value === "dark");
const changeColor = () => {
  colorMode.value = isDark.value ? "light" : "dark";
};
</script>
