<template>
  <form class="flex flex-col gap-2 w-full max-w-lg">
    <Input placeholder="Full name" />
    <Input placeholder="Email" />
    <Input placeholder="Password" />

    <Button
      size="md"
      :color="isDark ? 'white' : 'primary'"
      text-color="dark"
      class="w-full mt-14"
    >
      {{ $t("continue") }}
    </Button>
    <NuxtLink
      :to="localePath('/login')"
      class="text-center mt-2 cursor-pointer font-semibold"
    >
      {{ $t("registration.or_sign_in") }}
    </NuxtLink>
  </form>
</template>

<script setup lang="ts">
import Button from "@/shared/ui/Button.vue";
import type { CreateUserDto } from "~/entities/user/types";
import Input from "~/shared/ui/Input.vue";

const localePath = useLocalePath();
const isDark = computed(() => useColorMode().value === "dark");

const form = ref({
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
});

const errors = ref({
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
});

const isLoading = ref(false);

const validateForm = () => {
  errors.value = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  let isValid = true;

  if (!form.value.email) {
    errors.value.email = "Email обязателен";
    isValid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.email)) {
    errors.value.email = "Введите корректный email";
    isValid = false;
  }

  if (!form.value.password) {
    errors.value.password = "Пароль обязателен";
    isValid = false;
  } else if (form.value.password.length < 6) {
    errors.value.password = "Пароль должен содержать минимум 6 символов";
    isValid = false;
  }

  if (form.value.password !== form.value.confirmPassword) {
    errors.value.confirmPassword = "Пароли не совпадают";
    isValid = false;
  }

  return isValid;
};

const handleSubmit = async () => {
  if (!validateForm()) return;

  isLoading.value = true;

  try {
    const userData: CreateUserDto = {
      email: form.value.email,
      password: form.value.password,
      firstName: form.value.firstName || undefined,
      lastName: form.value.lastName || undefined,
    };

    // Здесь будет вызов API для регистрации
    console.log("Регистрация пользователя:", userData);

    // Имитация API вызова
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // После успешной регистрации перенаправляем на главную
    await navigateTo("/");
  } catch (error) {
    console.error("Ошибка регистрации:", error);
  } finally {
    isLoading.value = false;
  }
};
</script>
