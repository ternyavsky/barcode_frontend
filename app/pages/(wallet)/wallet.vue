<template>
  <NuxtLayout name="main">
    <div class="pt-2 flex flex-col mx-auto overflow-y-auto px-4">
      <h1 class="font-hector text-3xl font-medium mt-[24px]">
        {{ $t("wallet.title") }}
      </h1>
      <div class="flex gap-4 mt-[38px] w-full mobile:flex-col mobile:gap-6">
        <BalanceBlock class="w-full" />
        <PackagesBlock class="w-full" />
      </div>
      <div
        class="flex justify-between items-center mt-[24px] mobile:flex-col mobile:justify-start mobile:items-start mobile:gap-3"
      >
        <h1 class="font-hector text-3xl font-medium">
          {{ $t("wallet.history.title") }}
        </h1>
        <Select
          :options="[t('wallet.history.sort_by.title')]"
          class="desktop:max-w-[270px] w-full"
        />
      </div>
      <div class="mt-4">
        <div class="flex gap-2">
          <div
            class="px-3 py-2 rounded-[12px] cursor-pointer font-medium"
            v-for="category in categories"
            :key="category"
            :class="
              filterCategory === category
                ? 'bg-primary text-black'
                : 'bg-none text-black'
            "
            @click="filterCategory = category"
          >
            {{ category }}
          </div>
        </div>
      </div>
      <div class="mt-7">
        <div v-for="(group, date) in groupedHistory" :key="date" class="mb-6">
          <div class="font-medium text-lg">
            {{ formatDate(date) }}
          </div>
          <div class="">
            <TransactionSlot
              v-for="transaction in group"
              :key="transaction.id"
              :title="transaction.title"
              :category="transaction.category"
              :value="transaction.value"
              :svg="transaction.svg"
              :status="transaction.status"
              :dateMinutes="
                transaction.date.split('T')[1]?.split(':')[0] +
                ':' +
                transaction.date.split('T')[1]?.split(':')[1]
              "
            />
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import BalanceBlock from "~/features/wallet/balance/BalanceBlock.vue";
import PackagesBlock from "~/features/wallet/PackagesBlock.vue";
import TransactionSlot from "~/features/wallet/TransactionSlot.vue";
import Select from "~/shared/ui/Select.vue";
const { t } = useI18n();

const categories = [
  t("wallet.history.categories.all"),
  t("wallet.history.categories.top_ups"),
  t("wallet.history.categories.store"),
  t("wallet.history.categories.purchases"),
];
const filterCategory = ref(categories[0]);
const history = [
  {
    id: 1,
    title: "PDF - Tax Return",
    date: "2025-02-10T12:03:00Z",
    category: "Purchase",
    value: "x12",
    svg: "/_nuxt/assets/svg/white/PDF-transactiion.svg",
    status: "Success",
  },
  {
    id: 2,
    title: "Balance Top up",
    date: "2025-02-10T12:03:00Z",
    category: "Top up",
    value: "$600 USD",
    svg: "/_nuxt/assets/svg/white/Success.svg",
    status: "Success",
  },
  {
    id: 3,
    title: "30 PD",
    date: "2025-01-18T12:03:00Z",
    category: "Purchase",
    value: "x1",
    svg: "/_nuxt/assets/svg/white/Package.svg",
    status: "Success",
  },
  {
    id: 4,
    title: "Unlimited for 168 hours",
    date: "2025-01-18T12:03:00Z",
    category: "Subscription",
    value: "x1, $30 USD",
    svg: "/_nuxt/assets/svg/white/Subscription.svg",
    status: "Success",
  },
  {
    id: 5,
    title: "Balance Top up",
    date: "2025-01-14T12:03:00Z",
    category: "Top up",
    value: "$500 USD",
    svg: "/_nuxt/assets/svg/white/Success.svg",
    status: "Success",
  },
];

const filteredHistory = computed(() => {
  if (filterCategory.value === categories[0]) {
    return history;
  }
  return history.filter((transaction) => {
    if (filterCategory.value === categories[1]) {
      return transaction.category === "Top up";
    }
    if (filterCategory.value === categories[2]) {
      return transaction.category === "Store";
    }
    if (filterCategory.value === categories[3]) {
      return transaction.category === "Purchase";
    }
  });
});

const groupedHistory = computed(() => {
  const groups: Record<string, typeof filteredHistory.value> = {};

  filteredHistory.value.forEach((transaction) => {
    const date = transaction.date.split("T")[0];
    if (date && !groups[date]) {
      groups[date] = [];
    }
    if (date && groups[date]) {
      groups[date].push(transaction);
    }
  });

  return groups;
});

// Форматирование даты
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleDateString("en-US", { month: "long" });
  const year = date.getFullYear();

  return `${day} ${month}, ${year}`;
};
</script>
