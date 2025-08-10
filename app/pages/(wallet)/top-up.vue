<template>
  <div class="overflow-y-hidden">
    <div
      class="desktop:bg-[url('/_nuxt/assets/images/bg-wallet.png')] bg-[url('/_nuxt/assets/images/tablet-bg-wallet.png')] bg-contain bg-center absolute desktop:left-[-100px] top-[-25px] w-full h-full bg-no-repeat overflow-y-hidden"
    />

    <div
      class="flex justify-center mt-[73px] max-w-[500px] mx-auto relative overflow-y-hidden"
    >
      <div class="flex flex-col w-full">
        <img
          src="/_nuxt/assets/svg/dark/Chevron-Left.svg"
          alt="Expand"
          class="w-11 h-11 cursor-pointer absolute left-0 top-0"
          @click="router.back()"
        />
        <h1 class="text-white text-3xl font-medium mx-auto">Top up</h1>
        <p class="text-white text-lg font-albert_sans font-bold mx-auto mt-10">
          $5 USD = 1 BARCODE
        </p>

        <div
          class="rounded-[16px] border-white/20 border-solid border-[1px] flex flex-col gap-2 mt-3 w-full"
        >
          <div class="flex px-6 py-5 gap-3 items-center justify-between w-full">
            <div class="flex gap-3 items-center w-full">
              <img
                src="/_nuxt/assets/svg/dark/BTC-wallet.svg"
                alt="BTC"
                class="w-9 h-9"
              />
              <div class="flex flex-col">
                <p class="text-white text-sm font-medium">Bitcoin</p>
                <p class="text-text-tertiary text-sm font-semibold">
                  bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh
                </p>
              </div>
            </div>
            <img
              src="/_nuxt/assets/svg/dark/Chevron-Left.svg"
              alt="Expand"
              class="py-3 rotate-270 brightness-75 cursor-pointer"
            />
          </div>

          <div class="flex flex-col gap-3 w-full">
            <div
              class="flex mx-3 items-center bg-white/10 rounded-[12px] gap-2"
            >
              <input
                type="text"
                class="rounded-[12px] text-lg font-semibold w-full h-10 px-4 py-2 focus:outline-none"
              />
              <p class="text-text-tertiary font-semibold text-sm">BTC</p>
              <div
                class="bg-white/15 px-2 py-[6px] rounded-[8px] font-semibold text-sm w-[100px] mx-2 flex justify-center"
              >
                <p>≈ 0 USD</p>
              </div>
            </div>
          </div>
          <p
            class="px-[22px] text-sm text-text-tertiary font-semibold mb-[14px]"
          >
            Current balance: $300 USD
          </p>
        </div>
        <Button color="white" text-color="dark" class="mt-[24px]"
          >Top up</Button
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from "~/shared/ui/Button.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const amount = ref(0);
</script>
