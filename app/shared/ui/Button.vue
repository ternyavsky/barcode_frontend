<template>
  <UButton
    :leading-icon="leadingIcon"
    :trailing-icon="trailingIcon"
    variant="solid"
    :class="
      ' rounded-[12px] h-9 font-semibold flex justify-center hover:opacity-85  cursor-pointer ' +
      buttonClass
    "
    :disabled="disabled"
    :loading="loading"
    @click="onClick"
  >
    <slot />
  </UButton>
</template>

<script setup lang="ts">
const props = defineProps<{
  leadingIcon?: string;
  color: "primary" | "white" | "tertiary" | "grey";
  textColor: "primary" | "dark" | "white" | "negative";
  trailingIcon?: string;
  disabled?: boolean;
  loading?: boolean;
  class?: string;
  onClick?: () => void;
}>();
const buttonClass = computed(() => {
  const textColorClass =
    props.textColor === "primary"
      ? "text-primary"
      : props.textColor === "dark"
      ? "text-black"
      : props.textColor === "white"
      ? "text-white"
      : "text-negative";

  const bgColorClass =
    props.color === "primary"
      ? "bg-bg-primary hover:bg-bg-primary"
      : props.color === "white"
      ? "bg-bg-white hover:bg-bg-white-accent"
      : props.color === "tertiary"
      ? "bg-bg-tertiary hover:bg-bg-tertiary-accent"
      : props.color === "grey"
      ? "bg-[#CACACA] hover:bg-[#CACACA]"
      : "";

  return [textColorClass, bgColorClass, props.class].join(" ").trim();
});
</script>
