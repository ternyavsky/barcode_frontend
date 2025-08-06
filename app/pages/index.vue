<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <header class="bg-white shadow-sm border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center">
            <h1 class="text-xl font-bold text-gray-900">Barcode AI</h1>
          </div>
          <nav class="flex space-x-8">
            <NuxtLink
              to="/"
              class="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
              active-class="text-blue-600"
            >
              Главная
            </NuxtLink>
            <NuxtLink
              to="/barcodes"
              class="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
              active-class="text-blue-600"
            >
              Штрих-коды и MRZ
            </NuxtLink>
            <NuxtLink
              to="/wallet"
              class="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
              active-class="text-blue-600"
            >
              Кошелек
            </NuxtLink>
            <NuxtLink
              to="/settings"
              class="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
              active-class="text-blue-600"
            >
              Настройки
            </NuxtLink>
          </nav>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div class="px-4 py-6 sm:px-0">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- Registration Card -->
          <UCard
            hover
            class="cursor-pointer"
            @click="navigateTo('/registration')"
          >
            <div class="text-center">
              <div
                class="mx-auto flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600"
              >
                <UIcon name="i-heroicons-user-plus" class="h-6 w-6" />
              </div>
              <h3 class="mt-4 text-lg font-medium text-gray-900">
                Регистрация
              </h3>
              <p class="mt-2 text-sm text-gray-600">
                Создайте новый аккаунт в системе
              </p>
            </div>
          </UCard>

          <!-- Barcodes Card -->
          <UCard hover class="cursor-pointer" @click="navigateTo('/barcodes')">
            <div class="text-center">
              <div
                class="mx-auto flex items-center justify-center h-12 w-12 rounded-md bg-green-100 text-green-600"
              >
                <UIcon name="i-heroicons-document-text" class="h-6 w-6" />
              </div>
              <h3 class="mt-4 text-lg font-medium text-gray-900">
                Штрих-коды и MRZ
              </h3>
              <p class="mt-2 text-sm text-gray-600">
                Работа с штрих-кодами и MRZ документами
              </p>
            </div>
          </UCard>

          <!-- Wallet Card -->
          <UCard hover class="cursor-pointer" @click="navigateTo('/wallet')">
            <div class="text-center">
              <div
                class="mx-auto flex items-center justify-center h-12 w-12 rounded-md bg-yellow-100 text-yellow-600"
              >
                <UIcon name="i-heroicons-credit-card" class="h-6 w-6" />
              </div>
              <h3 class="mt-4 text-lg font-medium text-gray-900">Кошелек</h3>
              <p class="mt-2 text-sm text-gray-600">
                Управление цифровым кошельком
              </p>
            </div>
          </UCard>

          <!-- Settings Card -->
          <UCard hover class="cursor-pointer" @click="navigateTo('/settings')">
            <div class="text-center">
              <div
                class="mx-auto flex items-center justify-center h-12 w-12 rounded-md bg-gray-100 text-gray-600"
              >
                <UIcon name="i-heroicons-cog-6-tooth" class="h-6 w-6" />
              </div>
              <h3 class="mt-4 text-lg font-medium text-gray-900">Настройки</h3>
              <p class="mt-2 text-sm text-gray-600">Настройки приложения</p>
            </div>
          </UCard>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Главная - Barcode AI",
  meta: [
    { name: "description", content: "Главная страница системы Barcode AI" },
  ],
});
</script>
