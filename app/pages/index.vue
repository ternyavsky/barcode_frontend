<template>
  <div class="flex flex-col gap-4">
    <Header />
  </div>
</template>

<script setup lang="ts">
import Header from "~/widgets/header.vue";
useHead({
  title: "Barcode AI - Smart Barcode Solution",
  meta: [
    {
      name: "description",
      content: "Smart barcode and MRZ generation platform",
    },
  ],
});
</script>
