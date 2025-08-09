<template>
  <div class="flex gap-3 bg-bg-white pt-6 pl-6 pr-4 shadow-inner">
    <div class="w-64 flex flex-col mobile:w-full tablet:w-full">
      <!-- Top Section -->
      <div class="flex items-center justify-between px-2 py-1 flex-shrink-0">
        <div class="flex items-center gap-2">
          <span class="text-2xl font-bold font-roboto text">LOGO</span>
          <span class="text-xs text-text-secondary desktop:hidden">{{
            $t("sidebar.to_home")
          }}</span>
        </div>
        <div class="flex items-center gap-7">
          <span
            class="text-xs text-text-secondary mobile:hidden tablet:hidden"
            >{{ $t("sidebar.to_home") }}</span
          >
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
      <div
        class="rounded-[12px] mt-3 flex-shrink-0 bg-bg-white shadow-[inset_0_-1px_30px_0_rgba(214,214,214,0.3)] relative"
      >
        <div class="flex items-center justify-between px-4 py-3">
          <div>
            <h3 class="text-sm text-text-alternative-secondary mb-1">
              {{ $t("sidebar.balance") }}
            </h3>
            <div class="flex items-center gap-2">
              <p class="text-2xl font-medium font-hector">$10,100</p>
              <img
                src="/_nuxt/assets/svg/dark/plus.svg"
                alt="Add Balance"
                class="w-8 h-8 brightness-0"
              />
            </div>
          </div>
          <img
            src="/_nuxt/assets/svg/dark/man.svg"
            alt="Man"
            class="absolute top-[-8px] right-[-20px] h-[85px]"
          />
        </div>
        <div class="flex w-full h-[1px] bg-[#e8e8e8]" />
        <div class="px-4 py-3">
          <div class="flex justify-between">
            <h3 class="text-sm text-text-alternative-secondary mb-1">
              {{ $t("sidebar.pdfs") }}
            </h3>
          </div>
          <p class="text-[20px] font-hector font-medium">
            {{ $t("sidebar.unlimited") }}
          </p>
          <p
            class="px-2 py-1 bg-bg-secondary text-black rounded-[8px] text-[12px] max-w-[77px] text-center"
          >
            {{ $t("sidebar.in") }}
          </p>
        </div>
      </div>

      <!-- Navigation Menu -->
      <nav
        class="flex desktop:flex-col gap-1 flex-1 desktop:overflow-y-auto mt-3 overflow-x-auto tablet:justify-between mobile:justify-between"
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
        class="bg-primary rounded-[12px] mt-[51px] px-4 py-3 relative overflow-hidden hidden desktop:block"
      >
        <div class="flex flex-col gap-3">
          <p class="text-mb-3 font-hector max-w-[150px]">
            {{ $t("sidebar.need_to_generate_barcodes") }}
          </p>
          <Button
            color="white"
            size="sm"
            class="text-xs max-w-[87px] h-[32px]"
            text-color="dark"
          >
            {{ $t("sidebar.yes_i_do") }}
          </Button>
          <img
            src="assets/svg/white/AI.svg"
            alt="Man"
            class="absolute top-5 h-[73px] right-0"
          />
          <img
            src="assets/svg/white/AI1.svg"
            alt="Man"
            class="absolute top-8 h-[73px] right-[6px] z-10"
          />
          <img
            src="assets/svg/white/AI2.svg"
            alt="Man"
            class="absolute top-[44px] h-[73px] right-[12px] z-20"
          />
        </div>
      </div>
      <div class="flex-col hidden desktop:flex">
        <Button
          color="white"
          class="w-full h-[44px] text-[16px] shadow-[inset_0_-1px_30px_0_rgba(214,214,214,0.3)] mt-[20px]"
          text-color="dark"
        >
          {{ $t("sidebar.edit_pdf") }}
        </Button>
        <Button
          color="primary"
          class="w-full h-[44px] text-[16px] shadow-[inset_0_-1px_30px_0_rgba(214,214,214,0.3)] mt-3"
          text-color="dark"
        >
          <img
            src="/assets/svg/dark/plus.svg"
            alt="Plus"
            class="w-5 h-5 brightness-0 font-bold"
          />
          {{ $t("sidebar.generate_pdf") }}
        </Button>
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
    path: "/pdfs",
    label: t("sidebar.pdfs"),
    svg: "/_nuxt/assets/svg/white/pdf.svg",
    hasDropdown: false,
  },

  {
    path: "/wallet",
    label: t("sidebar.wallet"),
    svg: "/_nuxt/assets/svg/dark/wallet.svg",
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
  const isActivePath = route.path === path;
  console.log(`Path: ${path}, Current: ${route.path}, Active: ${isActivePath}`);
  return isActivePath;
};
</script>
