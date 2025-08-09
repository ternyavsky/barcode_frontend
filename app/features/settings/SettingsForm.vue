<template>
  <div class="flex flex-col gap-[24px]">
    <div class="flex">
      <input
        type="file"
        ref="fileInput"
        class="hidden"
        @change="handleFileChange"
      />
      <div
        class="flex flex-col bg-white px-4 py-3 rounded-[12px] cursor-pointer gap-[10px]"
        @click="fileInput?.click()"
      >
        <div class="flex items-center gap-[10px]">
          <h3 class="text-sm font-inter font-medium">
            {{ $t("settings.upload_account_photo") }}
          </h3>
        </div>
        <p class="text-xs font-inter font-medium text-text-secondary">
          {{ $t("settings.upload_account_photo_desc") }}
        </p>
      </div>
    </div>
    <div class="flex flex-col gap-3">
      <Input placeholder="Full name" />
      <Input placeholder="Email" />

      <!-- Password Input with Change Button -->
      <div
        class="flex items-center gap-3 bg-white border border-bg-tertiary rounded-[12px] h-11"
      >
        <input
          type="password"
          placeholder="********"
          class="flex-1 bg-transparent text-text-tertiary outline-none p-3"
        />
        <Button
          color="secondary"
          text-color="dark"
          class="h-9 my-1 mr-1 font-normal"
          @click="isChangePasswordModalOpen = true"
        >
          {{ $t("settings.change") }}
        </Button>
        <ClientOnly>
          <div>
            <ChangePasswordModal
              v-model:is-open="isChangePasswordModalOpen"
              :set-is-forgot-password-modal-open="
                () => {
                  isChangePasswordModalOpen = false;
                  isForgotPasswordModalOpen = true;
                }
              "
            />
            <ForgotPasswordModal
              v-model:is-open="isForgotPasswordModalOpen"
              :set-is-change-password-modal-open="
                () => {
                  isChangePasswordModalOpen = true;
                  isForgotPasswordModalOpen = false;
                }
              "
            />
            <ConfirmPasswordModal
              v-model:is-open="isConfirmPasswordModalOpen"
              :set-is-forgot-password-modal-open="
                () => {
                  isConfirmPasswordModalOpen = false;
                  isForgotPasswordModalOpen = true;
                }
              "
            />
          </div>
        </ClientOnly>
      </div>
      <div class="flex bg-white rounded-[12px] h-11 items-center px-3 py-2">
        <img
          src="/assets/svg/white/Telegram.svg"
          alt="telegram"
          class="w-[18px] h-[18px] brightness-0"
        />
        <Input
          type="text"
          class="text-text-tertiary outline-none"
          placeholder="Telegram link"
        />
      </div>
    </div>
    <Button
      color="primary"
      text-color="dark"
      class="h-11 rounded-[12px] mt-[24px]"
    >
      Log out
    </Button>
  </div>
</template>

<script setup lang="ts">
import Input from "~/shared/ui/Input.vue";
import Button from "~/shared/ui/Button.vue";
import ForgotPasswordModal from "./ForgotPasswordModal/index.vue";
import ChangePasswordModal from "./ChangePasswordModal/index.vue";
import ConfirmPasswordModal from "./ConfirmPasswordModal/index.vue";
const file = ref<File | null>(null);
const fileInput = ref<HTMLInputElement | null>(null);
const isChangePasswordModalOpen = ref(false);
const isForgotPasswordModalOpen = ref(false);
const isConfirmPasswordModalOpen = ref(false);
const handleFileChange = (event: Event) => {
  const input = event.target as HTMLInputElement;
  if (input.files) {
    file.value = input.files[0] || null;
  }
};
</script>
