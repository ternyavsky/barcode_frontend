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
          {{ $t("wallet.buy_packages.title") }}
        </h1>
      </div>
      <div
        class="flex justify-between mt-[38px] gap-[10px] h-full mobile:flex-col mobile:mx-4"
      >
        <div
          class="rounded-[12px] flex flex-col mobile:flex-row items-center gap-[25px] py-[14px] px-[15px] mobile:p-4 cursor-pointer size-full max-w-[117px] mobile:max-w-full max-h-[107px] transition-all duration-300 justify-between"
          :class="{
            'bg-primary': selectedPackage === packageEl.id,
            'bg-white': selectedPackage !== packageEl.id,
          }"
          @click="selectedPackage = packageEl.id"
          v-for="packageEl in packages"
          :key="packageEl.id"
        >
          <p class="text-sm font-semibold mx-auto mobile:mx-0">
            {{ packageEl.name }}
          </p>
          <p
            class="text-xl font-medium mx-auto font-hector mobile:mx-0 mobile:font-inter"
          >
            ${{ packageEl.price }}
          </p>
        </div>
      </div>

      <div class="rounded-[16px] bg-white flex flex-col gap-2 mt-[38px] w-full">
        <p class="text-lg font-semibold px-[22px] mt-3">Purchase</p>
        <div
          class="flex justify-between items-center py-[14px] gap-3 px-6 h-full"
        >
          <div class="flex gap-3">
            <img
              src="/_nuxt/assets/svg/white/Frame 1321315575.svg"
              alt="BTC"
              class="w-10 h-10"
            />
            <div class="flex flex-col">
              <p class="text-sm font-semibold">Total balance</p>
              <p class="text-text-alternative-secondary text-sm font-semibold">
                $200 USD
              </p>
            </div>
          </div>
          <img
            src="/_nuxt/assets/svg/white/Chevron-Left.svg"
            alt="Expand"
            class="py-3 rotate-270 brightness-75 cursor-pointer"
          />
        </div>
      </div>
      <div
        class="rounded-[16px] border-white/20 border-solid border-[1px] flex flex-col mt-3 w-full"
      >
        <p class="text-lg font-semibold px-[22px] py-[14px]">Promo code</p>

        <div class="flex flex-col gap-3 w-full">
          <div
            class="flex mx-3 items-center bg-white rounded-[12px] gap-2 mb-[14px]"
          >
            <input
              type="text"
              class="rounded-[12px] text-sm font-semibold w-full h-10 px-4 py-2 focus:outline-none"
              placeholder="Enter"
            />
            <Button
              color="primary"
              text-color="dark"
              class="mx-2 my-[6px] rounded-[8px] text-sm font-semibold h-[32px]"
              >Apply</Button
            >
          </div>
        </div>
      </div>

      <Button color="primary" text-color="dark" class="mt-[24px]">
        {{ $t("wallet.buy_packages.buy") }}
        ${{ packages[selectedPackage - 1].price }}
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from "~/shared/ui/Button.vue";
const router = useRouter();
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
</script>
