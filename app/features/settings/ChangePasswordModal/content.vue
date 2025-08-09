<template>
  <div class="flex flex-col gap-12 w-full">
    <div class="flex justify-between items-center w-full">
      <div class="flex gap-1 items-center">
        <!-- <img src="assets/svg/dark/Chevron-Left.svg" alt="back" /> -->
        <h3 class="font-medium text-[24px] text-black">Change Password</h3>
      </div>
      <img
        src="assets/svg/white/Frame 1042.svg"
        alt="close"
        class="cursor-pointer"
        @click="emit('update:isOpen', false)"
      />
    </div>
    <div class="flex flex-col gap-2">
      <input
        placeholder="Old password"
        class="bg-white rounded-[12px] h-11 font-semibold placeholder:font-semibold placeholder:text-text-alternative-secondary p-3 border-none focus:outline-none focus:ring-0 shadow-[inset_0_-1px_30px_0_rgba(214,214,214,0.3)]"
      />
      <input
        placeholder="New password"
        class="bg-white rounded-[12px] h-11 font-semibold placeholder:font-semibold placeholder:text-text-alternative-secondary p-3 border-none focus:outline-none focus:ring-0 shadow-[inset_0_-1px_30px_0_rgba(214,214,214,0.3)]"
      />
    </div>
    <div class="flex flex-col gap-2">
      <Button color="primary" text-color="dark" class="h-11">
        {{ $t("settings.change") }}
      </Button>
      <p
        class="text-center mt-2 cursor-pointer font-semibold text-black"
        @click="emit('setIsForgotPasswordModalOpen')"
      >
        {{ $t("settings.change_password.forgot_password") }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from "~/shared/ui/Button.vue";
const emit = defineEmits<{
  (e: "update:isOpen", value: boolean): void;
  (e: "setIsForgotPasswordModalOpen"): void;
}>();
</script>
