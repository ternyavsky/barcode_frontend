<template>
  <div class="flex gap-3">
    <div class="w-64 flex flex-col mobile:w-full tablet:w-full">
      <!-- Top Section -->
      <div class="flex items-center justify-between px-2 py-1 flex-shrink-0">
        <div class="flex items-center gap-2">
          <span class="text-2xl font-bold font-roboto text">LOGO</span>
          <span class="text-xs text-primary desktop:hidden">
            {{ t("sidebar.to_home") }}
          </span>
        </div>
        <div class="flex items-center gap-7">
          <span class="text-xs text-primary mobile:hidden tablet:hidden">{{
            t("sidebar.to_home")
          }}</span>
          <div class="flex gap-4">
            <div class="flex desktop:hidden gap-3">
              <img
                src="/assets/svg/dark/help.svg"
                alt="Help"
                class="w-5 h-5 brightness-150"
              />
              <img
                src="/assets/svg/dark/settings.svg"
                alt="Help"
                class="w-5 h-5 brightness-150"
              />
            </div>
            <div class="flex items-center gap-1">
              <span class="text-sm">EN</span>
              <UIcon name="i-heroicons-chevron-down" class="h-4 w-4" />
            </div>
          </div>
        </div>
      </div>

      <!-- Balance Section -->
      <div class="bg-bg-secondary rounded-[12px] mt-3 flex-shrink-0">
        <div class="flex items-center justify-between px-4 py-3">
          <div>
            <h3 class="text-sm text-[#888888] mb-1">
              {{ t("sidebar.balance") }}
            </h3>
            <p class="text-2xl font-bold font-space-grotesk">$10,100</p>
          </div>
          <img
            src="/_nuxt/assets/svg/dark/plus.svg"
            alt="Add Balance"
            class="w-6 h-6 mb-4"
          />
        </div>
        <div class="flex w-full bg-bg-tertiary h-[1px]" />
        <div class="px-4 py-3">
          <div class="flex justify-between">
            <h3 class="text-sm text-[#888888] mb-1">
              {{ t("sidebar.barcodes") }}
            </h3>
            <p
              class="px-2 py-1 bg-bg-tertiary text-primary rounded-[8px] text-[10px]"
            >
              {{ t("sidebar.in") }}
            </p>
          </div>
          <p
            class="text-[20px] font-space-grotesk font-bold desktop:max-w-[120px]"
          >
            {{ t("sidebar.unlimited") }}
          </p>
        </div>
      </div>

      <!-- Navigation Menu -->
      <nav
        class="flex desktop:flex-col gap-1 desktop:overflow-y-auto mt-3 overflow-x-auto tablet:justify-between mobile:justify-between"
      >
        <template v-for="item in sidebarItems" :key="item.path">
          <!-- Regular navigation links -->
          <NuxtLink
            v-if="!item.hasDropdown"
            :to="item.path"
            :class="[
              'flex flex-col desktop:flex-row items-center desktop:gap-3 px-3 py-[10px] rounded-lg min-w-fit gap-1 desktop:max-h-[40px]',
              isActive(item.path)
                ? 'bg-primary text-black font-semibold'
                : ' text-text-tertiary hover:bg-bg-tertiary',
            ]"
          >
            <img
              :src="item.svg"
              :alt="item.label"
              :class="[
                'w-5 h-5',
                isActive(item.path) ? 'filter brightness-0' : '',
              ]"
            />
            <span class="desktop:text-left text-center w-full">{{
              item.label
            }}</span>
          </NuxtLink>

          <!-- Dropdown items -->
          <div
            v-else
            class="flex items-center desktop:justify-between px-3 py-[10px] rounded-lg cursor-pointer text-text-tertiary min-w-fit"
          >
            <div
              class="flex items-center desktop:gap-3 desktop:flex-row flex-col min-w-fit gap-1"
            >
              <img
                src="/_nuxt/assets/svg/dark/other-tools.svg"
                alt="Other Tools"
                :class="[
                  'w-5 h-5',
                  isActive(item.path) ? 'filter brightness-0' : '',
                ]"
              />
              <span class="desktop:text-left text-center w-full">{{
                item.label
              }}</span>
            </div>
            <UIcon
              name="i-heroicons-chevron-down"
              class="h-4 w-4 hidden desktop:block"
            />
          </div>
        </template>
      </nav>

      <!-- Bottom Advertisement -->
      <div
        class="bg-primary rounded-[12px] mt-2 px-4 py-3 relative overflow-hidden hidden desktop:block"
      >
        <div class="flex flex-col gap-3">
          <p class="text-mb-3 font-hector text-black max-w-[150px]">
            {{ t("sidebar.need_to_generate_barcodes") }}
          </p>
          <Button
            color="white"
            size="sm"
            class="text-xs max-w-[87px] h-[32px]"
            text-color="dark"
          >
            {{ t("sidebar.yes_i_do") }}
          </Button>
          <img
            src="assets/svg/dark/man.svg"
            alt="Man"
            class="absolute top-2 right-[-45px] h-[126px]"
          />
        </div>
      </div>
    </div>
    <div class="w-[1px] bg-bg-tertiary" />
  </div>
</template>

<script setup lang="ts">
import Button from "~/shared/ui/Button.vue";

const route = useRoute();
const { t } = useI18n();
const sidebarItems = [
  {
    path: "/barcodes",
    label: t("sidebar.barcodes"),
    svg: "/_nuxt/assets/svg/dark/barcodes.svg",
    hasDropdown: false,
  },
  {
    path: "/mrz",
    label: t("sidebar.mrz"),
    svg: "/_nuxt/assets/svg/dark/mrz.svg",
    hasDropdown: false,
  },
  {
    path: "/other-tools",
    label: t("sidebar.other_tools"),
    svg: "/_nuxt/assets/svg/dark/other-tools.svg",
    hasDropdown: true,
  },
  {
    path: "/wallet",
    label: t("sidebar.wallet"),
    svg: "/_nuxt/assets/svg/dark/wallet.svg",
    hasDropdown: false,
  },
  {
    path: "/bulk-generation",
    label: t("sidebar.bulk_generation"),
    svg: "/_nuxt/assets/svg/dark/bulk.svg",
    hasDropdown: false,
  },
  {
    path: "/store-orders",
    label: t("sidebar.store_orders"),
    svg: "/_nuxt/assets/svg/dark/store-orders.svg",
    hasDropdown: false,
  },
  {
    path: "/referral",
    label: t("sidebar.referral"),
    svg: "/_nuxt/assets/svg/dark/referral.svg",
    hasDropdown: false,
  },
  {
    path: "/help",
    label: t("sidebar.help"),
    svg: "/_nuxt/assets/svg/dark/help.svg",
    hasDropdown: false,
  },
  {
    path: "/settings",
    label: t("sidebar.settings"),
    svg: "/_nuxt/assets/svg/dark/settings.svg",
    hasDropdown: false,
  },
];

const isActive = (path: string) => {
  return route.path === path;
};
</script>
