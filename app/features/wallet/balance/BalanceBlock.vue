<template>
  <div
    class="flex flex-col gap-2 bg-bg-secondary rounded-[16px] px-4 py-[14px] max-w-[664px]"
  >
    <div class="flex justify-between items-center">
      <div class="flex flex-col gap-1">
        <h3 class="text-sm text-text-tertiary font-semibold">Total balance</h3>
        <h2 class="text-[20px] font-semibold">$400 USD</h2>
      </div>
      <Button color="tertiary" text-color="white" class="px-4 py-2 text-sm h-9">
        Top up
      </Button>
    </div>
    <div class="w-full h-[1px] bg-text-secondary mt-2"></div>
    <div class="flex flex-col gap-3 px-3 py-2">
      <CurrencySlot
        v-for="currency in currencies"
        :name="currency.name"
        :value="currency.value"
        :svg="currency.svg"
        :key="currency.name"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from "~/shared/ui/Button.vue";
import CurrencySlot from "./CurrencySlot.vue";

const currencies = [
  {
    name: "Bitcoin",
    value: "0.0000003 BTC ≈ $150",
    svg: "/_nuxt/assets/svg/dark/BTC-wallet.svg",
  },
  {
    name: "USDT",
    value: "200 USDT ≈ $200",
    svg: "/_nuxt/assets/svg/dark/USDT-wallet.svg",
  },
  {
    name: "Etherium",
    value: "0.0003 ETH ≈ $50",
    svg: "/_nuxt/assets/svg/dark/ETH-wallet.svg",
  },
  {
    name: "Litecoin",
    value: "0.00 LTC ≈ $0",
    svg: "/_nuxt/assets/svg/dark/LTC-wallet.svg",
  },
];
</script>
