<template>
  <UDrawer
    v-if="isMobile"
    :open="props.isOpen"
    class="bg-white border-bg-white rounded-[12px]"
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
            Change
          </Button>
          <p class="text-center mt-2 cursor-pointer font-semibold text-black">
            Forgot password?
          </p>
        </div>
      </div>
    </template>
  </UDrawer>
  <UModal
    v-else
    :open="props.isOpen"
    class="bg-white border-bg-white rounded-[12px]"
    :ui="{ overlay: 'bg-black/75' }"
    @update:open="emit('update:isOpen', $event)"
  >
    <template #header>
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
            Change
          </Button>
          <p class="text-center mt-2 cursor-pointer font-semibold text-black">
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
