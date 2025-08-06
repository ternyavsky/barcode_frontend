<template>
  <UCard class="max-w-md mx-auto">
    <template #header>
      <h2 class="text-2xl font-bold text-gray-900">Регистрация</h2>
      <p class="text-gray-600 mt-1">Создайте новый аккаунт</p>
    </template>

    <form @submit.prevent="handleSubmit" class="space-y-4">
      <div class="grid grid-cols-2 gap-4">
        <div>
          <UFormGroup label="Имя">
            <UInput
              v-model="form.firstName"
              placeholder="Введите имя"
              :error="errors.firstName"
            />
          </UFormGroup>
        </div>
        <div>
          <UFormGroup label="Фамилия">
            <UInput
              v-model="form.lastName"
              placeholder="Введите фамилию"
              :error="errors.lastName"
            />
          </UFormGroup>
        </div>
      </div>

      <UFormGroup label="Email">
        <UInput
          v-model="form.email"
          type="email"
          placeholder="Введите email"
          :error="errors.email"
        />
      </UFormGroup>

      <UFormGroup label="Пароль">
        <UInput
          v-model="form.password"
          type="password"
          placeholder="Введите пароль"
          :error="errors.password"
        />
      </UFormGroup>

      <UFormGroup label="Подтвердите пароль">
        <UInput
          v-model="form.confirmPassword"
          type="password"
          placeholder="Подтвердите пароль"
          :error="errors.confirmPassword"
        />
      </UFormGroup>

      <UButton type="submit" :loading="isLoading" class="w-full" size="lg">
        {{ isLoading ? "Регистрация..." : "Зарегистрироваться" }}
      </UButton>
    </form>

    <template #footer>
      <p class="text-center text-sm text-gray-600">
        Уже есть аккаунт?
        <NuxtLink
          to="/login"
          class="text-blue-600 hover:text-blue-500 font-medium"
        >
          Войти
        </NuxtLink>
      </p>
    </template>
  </UCard>
</template>

<script setup lang="ts">
import type { CreateUserDto } from "~/entities/user/types";

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
