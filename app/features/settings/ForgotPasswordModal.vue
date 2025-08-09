<template>
  <UDrawer
    v-if="isMobile"
    :open="props.isOpen"
    class="bg-bg-secondary border-bg-secondary rounded-[12px]"
    :ui="{ overlay: 'bg-black/75' }"
    @update:open="emit('update:isOpen', $event)"
  >
    <template #header>
      <div class="flex flex-col gap-12 w-full">
        <div class="flex justify-between items-center w-full">
          <div class="flex gap-1 items-center">
            <!-- <img src="assets/svg/dark/Chevron-Left.svg" alt="back" /> -->
            <h3 class="font-medium text-[24px]">Change Password</h3>
          </div>
          <img
            src="assets/svg/dark/Frame 1041.svg"
            alt="close"
            class="cursor-pointer"
            @click="emit('update:isOpen', false)"
          />
        </div>
        <div class="flex flex-col gap-2">
          <input
            placeholder="Old password"
            class="bg-bg-tertiary rounded-[12px] h-11 font-semibold placeholder:font-semibold placeholder:text-text-tertiary p-3 border-none focus:outline-none focus:ring-0"
          />
          <input
            placeholder="New password"
            class="bg-bg-tertiary rounded-[12px] h-11 font-semibold placeholder:font-semibold placeholder:text-text-tertiary p-3 border-none focus:outline-none focus:ring-0"
          />
        </div>
        <div class="flex flex-col gap-2">
          <Button color="white" text-color="dark" class="h-11"> Change </Button>
          <p class="text-center mt-2 cursor-pointer font-semibold">
            Forgot password?
          </p>
        </div>
      </div>
    </template>
  </UDrawer>
  <UModal
    v-else
    :open="props.isOpen"
    class="bg-bg-secondary border-bg-secondary rounded-[12px]"
    :ui="{ overlay: 'bg-black/75' }"
    @update:open="emit('update:isOpen', $event)"
  >
    <template #header>
      <div class="flex flex-col gap-12 w-full">
        <div class="flex justify-between items-center w-full">
          <div class="flex gap-1 items-center">
            <!-- <img src="assets/svg/dark/Chevron-Left.svg" alt="back" /> -->
            <h3 class="font-medium text-[24px]">Change Password</h3>
          </div>
          <img
            src="assets/svg/dark/Frame 1041.svg"
            alt="close"
            class="cursor-pointer"
            @click="emit('update:isOpen', false)"
          />
        </div>
        <div class="flex flex-col gap-2">
          <input
            placeholder="Old password"
            class="bg-bg-tertiary rounded-[12px] h-11 font-semibold placeholder:font-semibold placeholder:text-text-tertiary p-3 border-none focus:outline-none focus:ring-0"
          />
          <input
            placeholder="New password"
            class="bg-bg-tertiary rounded-[12px] h-11 font-semibold placeholder:font-semibold placeholder:text-text-tertiary p-3 border-none focus:outline-none focus:ring-0"
          />
        </div>
        <div class="flex flex-col gap-2">
          <Button color="white" text-color="dark" class="h-11"> Change </Button>
          <p class="text-center mt-2 cursor-pointer font-semibold">
            Forgot password?
          </p>
        </div>
      </div>
    </template>
  </UModal>
</template>

<script setup lang="ts">
import Button from "~/shared/ui/Button.vue";
const props = defineProps<{
  isOpen: boolean;
}>();
const isMobile = ref(false);

onMounted(() => {
  const checkMobile = () => {
    isMobile.value = window.innerWidth < 768;
  };

  checkMobile();
  window.addEventListener("resize", checkMobile);

  onUnmounted(() => {
    window.removeEventListener("resize", checkMobile);
  });
});

const emit = defineEmits<{
  (e: "update:isOpen", value: boolean): void;
}>();
</script>
