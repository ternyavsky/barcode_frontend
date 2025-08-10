<template>
  <NuxtLayout name="main">
    <div class="pt-2 h-screen flex flex-col w-full mx-auto">
      <h1 class="font-hector text-3xl font-medium mt-[24px]">
        {{ $t("settings.title") }}
      </h1>
      <div class="flex justify-center h-screen items-center">
        <SettingsForm />
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import SettingsForm from "~/features/settings/SettingsForm.vue";
</script>
