<template>
  <div class="overflow-y-hidden">
    <div class="flex flex-col max-w-[500px] mx-auto w-full mt-7 relative">
      <img
        src="/_nuxt/assets/svg/white/Chevron-Left.svg"
        alt="arrow-left"
        class="h-10 fill-black absolute cursor-pointer"
        @click="router.back()"
      />
      <div class="flex items-center justify-center">
        <h1 class="font-hector text-3xl font-medium mx-auto">
          {{ $t("wallet.top_up.title") }}
        </h1>
      </div>
      <p class="mt-[38px] font-albert_sans text-lg font-bold mx-auto">
        $5 USD = 1 BARCODE
      </p>
      <div class="flex flex-col bg-white rounded-[16px] mt-3">
        <div class="flex px-6 py-5 gap-3 items-center justify-between w-full">
          <div class="flex gap-3 items-center w-full">
            <img
              src="/_nuxt/assets/svg/white/BTC-wallet-top-up.svg"
              alt="BTC"
              class="w-9 h-9"
            />
            <div class="flex flex-col">
              <p class="text-black text-sm font-medium">Bitcoin</p>
              <p
                class="text-text-alternative-secondary text-sm font-semibold overflow-ellipsis whitespace-nowrap"
              >
                bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh
              </p>
            </div>
          </div>
          <img
            src="/_nuxt/assets/svg/white/Chevron-Left.svg"
            alt="Expand"
            class="py-3 rotate-270 brightness-75 cursor-pointer fill-text-alternative-secondary"
          />
        </div>
        <div class="flex flex-col gap-3 w-full">
          <div class="flex mx-3 items-center bg-bg-gray rounded-[12px] gap-2">
            <input
              type="text"
              class="rounded-[12px] text-lg font-semibold w-full h-10 px-4 py-2 focus:outline-none"
            />
            <p class="text-text-alternative-secondary font-semibold text-sm">
              BTC
            </p>
            <div
              class="bg-white/15 px-2 py-[6px] rounded-[8px] font-semibold text-sm min-w-[100px] mx-2 flex justify-center"
            >
              <p>≈ 0 USD</p>
            </div>
          </div>
        </div>
        <p
          class="px-[22px] text-sm text-text-alternative-secondary font-semibold mb-[14px] mt-2"
        >
          Current balance: $300 USD
        </p>
      </div>
      <Button color="primary" text-color="dark" class="mt-[24px]">
        {{ $t("wallet.top_up.title") }}
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from "~/shared/ui/Button.vue";
const router = useRouter();
</script>
