<template>
  <div class="overflow-y-hidden">
    <div
      class="bg-[url('/_nuxt/assets/images/bg-wallet.png')] bg-contain bg-center absolute left-[-100px] top-[-25px] w-full h-full bg-no-repeat overflow-y-hidden"
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
        <h1 class="text-white text-3xl font-medium mx-auto">Buy packages</h1>
        <div class="flex justify-between mt-[38px] gap-[10px] h-full">
          <div
            class="rounded-[12px] flex flex-col gap-[25px] py-[14px] px-[15px] cursor-pointer size-full max-w-[117px] max-h-[107px] transition-all duration-300 justify-between"
            :class="{
              'text-black bg-white': selectedPackage === packageEl.id,
              'text-white bg-white/10': selectedPackage !== packageEl.id,
            }"
            @click="selectedPackage = packageEl.id"
            v-for="packageEl in packages"
            :key="packageEl.id"
          >
            <p class="text-sm font-semibold mx-auto">
              {{ packageEl.name }}
            </p>
            <p class="text-2xl font-semibold mx-auto">${{ packageEl.price }}</p>
          </div>
        </div>

        <div
          class="rounded-[16px] border-white/20 border-solid border-[1px] flex flex-col gap-2 mt-[38px] w-full"
        >
          <p class="text-white text-lg font-semibold px-[22px] mt-3">
            Purchase
          </p>
          <div
            class="flex justify-between items-center py-[14px] gap-3 px-6 h-full"
          >
            <div class="flex gap-3">
              <img
                src="/_nuxt/assets/svg/dark/Frame 1321315575.svg"
                alt="BTC"
                class="w-10 h-10"
              />
              <div class="flex flex-col">
                <p class="text-white text-sm font-semibold">Total balance</p>
                <p class="text-text-tertiary text-sm font-semibold">$200 USD</p>
              </div>
            </div>
            <img
              src="/_nuxt/assets/svg/dark/Chevron-Left.svg"
              alt="Expand"
              class="py-3 rotate-270 brightness-75 cursor-pointer"
            />
          </div>
        </div>
        <div
          class="rounded-[16px] border-white/20 border-solid border-[1px] flex flex-col mt-3 w-full"
        >
          <p class="text-white text-lg font-semibold px-[22px] py-[14px]">
            Promo code
          </p>

          <div class="flex flex-col gap-3 w-full">
            <div
              class="flex mx-3 items-center bg-bg-secondary rounded-[12px] gap-2 mb-[14px]"
            >
              <input
                type="text"
                class="rounded-[12px] text-sm font-semibold w-full h-10 px-4 py-2 focus:outline-none"
                placeholder="Enter"
              />
              <Button
                color="tertiary"
                text-color="white"
                class="mx-2 my-[6px] rounded-[8px] text-sm font-semibold h-[32px]"
                >Apply</Button
              >
            </div>
          </div>
        </div>
        <Button color="white" text-color="dark" class="mt-[24px]"
          >Buy for ${{ packages[selectedPackage - 1]?.price }}</Button
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from "~/shared/ui/Button.vue";
import { useRouter } from "vue-router";
const packages = [
  {
    id: 1,
    name: "Package x10",
    price: 100,
  },
  {
    id: 2,
    name: "Package x20",
    price: 200,
  },
  {
    id: 3,
    name: "Package x50",
    price: 500,
  },
  {
    id: 4,
    name: "Package x10",
    price: 1000,
  },
];
const selectedPackage = ref(1);

const router = useRouter();

const amount = ref(0);
</script>
