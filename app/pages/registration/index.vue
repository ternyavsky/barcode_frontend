<template>
  <div class="items-center justify-center flex flex-col h-full">
    <h1 class="text-3xl font-bold font-hector tracking-wide">
      {{ $t("registration.title") }}
    </h1>
    <div class="flex flex-col gap-2 font-inter text-tertiary mt-2">
      <p>
        {{ $t("registration.first_desc") }}
      </p>
      <p>
        {{ $t("registration.second_desc") }}
      </p>
    </div>
    <UButton
      leading-icon="mingcute:telegram-fill"
      class="mt-2 text-primary rounded-[12px] bg-bg-tertiary h-9 font-semibold"
      variant="solid"
    >
      {{ $t("registration.login_tg") }}
    </UButton>

    <RegistrationForm />
  </div>
</template>

<script setup lang="ts">
import RegistrationForm from "~/features/registration/RegistrationForm.vue";

// Устанавливаем мета-теги для страницы
useHead({
  title: "Регистрация - Barcode AI",
  meta: [
    {
      name: "description",
      content: "Создайте новый аккаунт в системе Barcode AI",
    },
  ],
});
</script>
