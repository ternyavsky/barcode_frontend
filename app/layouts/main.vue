<template>
  <div class="flex gap-[26px] mobile:flex-col tablet:flex-col">
    <Sidebar />
    <slot />
    <Button
      color="primary"
      text-color="dark"
      size="md"
      class=""
      @click="changeColor"
      >change color</Button
    >
  </div>
</template>

<script setup lang="ts">
import Sidebar from "~/widgets/sidebar.vue";
import Button from "~/shared/ui/Button.vue";
const colorMode = useColorMode();

const isDark = computed(() => colorMode.value === "dark");
const changeColor = () => {
  colorMode.value = isDark.value ? "light" : "dark";
};
</script>
