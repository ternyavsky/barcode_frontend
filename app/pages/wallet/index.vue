<template>
  <div class="min-h-screen bg-gray-50">
    <header class="bg-white shadow-sm border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center">
            <NuxtLink to="/" class="text-gray-900 hover:text-blue-600">
              <UIcon name="i-heroicons-arrow-left" class="h-5 w-5 mr-2" />
              Назад
            </NuxtLink>
            <h1 class="text-xl font-bold text-gray-900 ml-4">Кошелек</h1>
          </div>
        </div>
      </div>
    </header>

    <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div class="px-4 py-6 sm:px-0">
        <UCard>
          <template #header>
            <h2 class="text-lg font-semibold">Цифровой кошелек</h2>
          </template>

          <div class="text-center py-12">
            <UIcon
              name="i-heroicons-credit-card"
              class="h-16 w-16 text-gray-400 mx-auto mb-4"
            />
            <h3 class="text-lg font-medium text-gray-900 mb-2">
              Функция в разработке
            </h3>
            <p class="text-gray-600">
              Модуль управления цифровым кошельком находится в разработке.
            </p>
          </div>
        </UCard>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Кошелек - Barcode AI",
  meta: [{ name: "description", content: "Управление цифровым кошельком" }],
});
</script>
