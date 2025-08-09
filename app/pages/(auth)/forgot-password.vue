<template>
  <div class="items-center justify-center flex flex-col h-full px-4">
    <h1 class="text-3xl font-medium font-hector tracking-wide">
      {{ $t("forgot_password.title") }}
    </h1>
    <div class="flex gap-2 justify-center items-center max-w-lg">
      <p class="font-medium text-center text-text-tertiary">
        {{ $t("forgot_password.desc") }}
      </p>
    </div>

    <ForgotPasswordForm class="mt-10" />
  </div>
</template>

<script setup lang="ts">
import ForgotPasswordForm from "~/features/auth/forgot-password/ForgotPasswordForm.vue";

// Устанавливаем мета-теги для страницы
useHead({
  title: "Восстановление пароля - Barcode AI",
  meta: [
    {
      name: "description",
      content: "Восстановите ваш пароль в системе Barcode AI",
    },
  ],
});
</script>
