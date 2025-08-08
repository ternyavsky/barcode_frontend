<template>
  <div class="flex h-screen bg-gray-900">
    <div class="flex-1 bg-gray-900 text-white p-6">
      <div class="text-center">
        <h1 class="text-3xl font-bold mb-4">Welcome to Barcode AI</h1>
        <p class="text-gray-400 mb-8">Your smart barcode and MRZ solution</p>
        <UButton
          color="success"
          variant="solid"
          size="lg"
          @click="navigateTo('/bulk-generation')"
        >
          Get Started
        </UButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
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
