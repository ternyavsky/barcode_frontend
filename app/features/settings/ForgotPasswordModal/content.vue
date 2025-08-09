<template>
  <div class="flex flex-col gap-12 w-full">
    <div class="flex justify-between items-center w-full">
      <div class="flex gap-1 items-center">
        <img
          src="assets/svg/white/Chevron-Left.svg"
          alt="back"
          @click="emit('setIsChangePasswordModalOpen')"
        />
        <h3 class="font-medium text-[24px] text-black">
          {{ $t("forgot_password.title") }}
        </h3>
      </div>
      <img
        src="assets/svg/white/Frame 1042.svg"
        alt="close"
        class="cursor-pointer"
        @click="emit('update:isOpen', false)"
      />
    </div>
    <div class="flex flex-col gap-2 text-[#A6A6A6] text-center">
      <p>{{ $t("forgot_password.desc") }}</p>
      <input
        placeholder="Email"
        class="bg-white rounded-[12px] h-11 font-semibold placeholder:font-semibold placeholder:text-text-alternative-secondary p-3 border-none focus:outline-none focus:ring-0 shadow-[inset_0_-1px_30px_0_rgba(214,214,214,0.3)] mt-2"
      />
    </div>
    <div class="flex flex-col gap-2">
      <Button color="primary" text-color="dark" class="h-11">
        {{ $t("settings.send") }}
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from "~/shared/ui/Button.vue";
const emit = defineEmits<{
  (e: "update:isOpen", value: boolean): void;
  (e: "setIsChangePasswordModalOpen"): void;
}>();
</script>
