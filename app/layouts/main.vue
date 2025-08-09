<template>
  <div class="flex gap-[26px] mobile:flex-col tablet:flex-col">
    <Sidebar />
    <div class="w-full">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import Sidebar from "~/widgets/sidebar.vue";
</script>
