<template>
  <div class="flex px-9 py-8 h-full justify-between">
    <div class="flex flex-col justify-between min-h-[360px]">
      <h1 class="text-2xl font-roboto uppercase font-bold">Logo</h1>
      <div class="flex gap-[15px]">
        <img
          src="/assets/svg/dark/facebook.svg"
          alt="Facebook"
          class="w-11 h-11"
        />
        <img
          src="/assets/svg/dark/inst.svg"
          alt="Instagram"
          class="w-11 h-11"
        />
        <img src="/assets/svg/dark/x.svg" alt="X" class="w-11 h-11" />
      </div>
    </div>
    <div class="flex gap-[82px]">
      <div class="flex justify-between flex-col h-full">
        <div class="flex flex-col gap-[20px]">
          <h4 class="text-[16px] font-medium">
            {{ $t("home.footer.main_sections") }}
          </h4>
          <div class="flex flex-col gap-[5px] text-[16px]">
            <NuxtLink :to="localePath('/')" class="opacity-75">
              {{ t("home.home") }}
            </NuxtLink>
            <NuxtLink :to="localePath('/')" class="opacity-75">
              {{ t("home.pdfs") }}
            </NuxtLink>
            <NuxtLink :to="localePath('/')" class="opacity-75">
              {{ t("home.faq") }}
            </NuxtLink>
            <NuxtLink :to="localePath('/')" class="opacity-75">
              {{ t("home.discussion") }}
            </NuxtLink>
            <NuxtLink :to="localePath('/')" class="opacity-75">
              {{ t("home.eecp") }}
            </NuxtLink>
          </div>
        </div>
        <div class="flex flex-col">
          <div class="w-full h-[1px] bg-white" />
          <h5 class="mt-[20px] text-sm text-white/75">+7 (411) 390-51-11</h5>
          <h5 class="mt-[5px] text-sm text-white/75">support@barcodeai.com</h5>
        </div>
      </div>
      <div class="flex flex-col gap-[20px]">
        <h4 class="text-[16px] font-medium">
          {{ $t("home.footer.resources") }}
        </h4>
        <div class="flex flex-col gap-[5px] text-[16px]">
          <NuxtLink :to="localePath('/')" class="opacity-75">
            {{ t("home.footer.help") }}
          </NuxtLink>
          <NuxtLink :to="localePath('/')" class="opacity-75">
            {{ t("home.footer.privacy") }}
          </NuxtLink>
          <NuxtLink :to="localePath('/')" class="opacity-75">
            {{ t("home.footer.terms") }}
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="flex flex-col justify-between">
      <Button
        color="primary"
        text-color="dark"
        class="px-4 py-2 text-xs h-9 max-w-[84px] self-end"
      >
        {{ $t("sign_in.title") }}
      </Button>
      <div class="flex flex-col">
        <h5 class="mt-[20px] text-sm text-white/75">© 2025 Barcode AI</h5>
        <h5 class="mt-[5px] text-sm text-white/75">All Rights Reserved</h5>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from "~/shared/ui/Button.vue";
const { t } = useI18n();
const localePath = useLocalePath();
</script>
