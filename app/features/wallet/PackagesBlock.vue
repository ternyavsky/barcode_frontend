<template>
  <div
    class="flex flex-col gap-2 rounded-[16px] px-4 py-[14px] border-[1px] border-bg-tertiary w-full h-full bg-white"
  >
    <h3 class="text-xl font-semibold">
      {{ $t("wallet.packages.title") }}
    </h3>
    <div class="flex flex-col h-full mt-5">
      <div
        class="flex justify-between w-full items-center px-2 py-2 rounded-[16px]"
        v-for="packageEl in packages"
        :key="packageEl.id"
      >
        <div class="flex gap-2 items-center">
          <img :src="packageEl.svg" alt="package" />
          <h4 class="text-lg font-medium">
            {{ packageEl.title }}
          </h4>
        </div>
        <Button
          color="white"
          text-color="dark"
          class="px-4 py-2 text-sm h-9 rounded-[16px] shadow-[inset_0_0_0_1px_#E8E8E8]"
        >
          {{ $t("wallet.packages.buy") }}
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from "~/shared/ui/Button.vue";
const packages = [
  {
    id: 1,
    title: "Bank Statements",
    svg: "/_nuxt/assets/svg/white/Bank.svg",
  },
  {
    id: 2,
    title: "Bills",
    svg: "/_nuxt/assets/svg/white/Bills.svg",
  },
  {
    id: 3,
    title: "Paystubs",
    svg: "/_nuxt/assets/svg/white/Paystubs.svg",
  },
  {
    id: 4,
    title: "1040 (TAX)",
    svg: "/_nuxt/assets/svg/white/1040.svg",
  },
  {
    id: 5,
    title: "Transcript",
    svg: "/_nuxt/assets/svg/white/Transcript.svg",
  },
];
</script>
