<template>
  <div class="overflow-y-hidden h-full">
    <div
      class="flex flex-col max-w-[510px] mx-auto my-auto w-full mt-7 items-center h-full justify-center mobile:px-4 mobile:max-w-full"
    >
      <img src="/_nuxt/assets/svg/white/qr.svg" alt="qr" class="w-64 h-64" />
      <h4 class="mt-4 font-hector text-2xl font-medium">
        {{ $t("wallet.top_up.payment.title") }}
      </h4>
      <div class="flex justify-between mx-auto w-full mobile:flex-col">
        <p class="text-black text-lg font-medium">
          {{ $t("wallet.top_up.payment.transfer") }}
        </p>
        <p class="text-black text-lg font-medium">Bitcoin Wallet</p>
      </div>
      <div class="flex justify-between w-full mt-7 mobile:flex-col">
        <p class="text-black text-lg font-medium">
          {{ $t("wallet.top_up.payment.btc_address") }}:
        </p>
        <div class="flex items-center gap-2">
          <p class="text-black text-lg font-medium">
            1Pn85Vjc2zN3rfvDYXmZUsfT1p9j4
          </p>
          <img
            src="/_nuxt/assets/svg/white/copy.svg"
            alt="copy"
            class="w-4 h-4 cursor-pointer"
            @click="copyToClipboard('1Pn85Vjc2zN3rfvDYXmZUsfT1p9j4')"
          />
        </div>
      </div>
      <Button color="primary" text-color="dark" class="mt-12 w-full">
        {{ $t("wallet.top_up.payment.topup_with_oracle") }}
      </Button>
      <div class="flex justify-around w-full mt-4">
        <p class="text-black text-lg font-medium">
          {{ $t("wallet.top_up.payment.share_code") }}
        </p>
        <p class="text-black text-lg font-medium">
          {{ $t("wallet.top_up.payment.share_addy") }}
        </p>
      </div>
      <p class="text-black text-lg font-medium w-full mt-4 text-center">
        {{ $t("wallet.top_up.payment.share_addy") }}
      </p>
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

const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text);
};
</script>
