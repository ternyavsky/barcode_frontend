<template>
  <UButton
    :leading-icon="leadingIcon"
    :trailing-icon="trailingIcon"
    :class="
      props.class +
      ' rounded-[12px] h-9 font-semibold ' +
      (props.textColor === 'primary'
        ? 'text-primary'
        : textColor === 'dark'
        ? 'text-black'
        : textColor === 'white'
        ? 'text-white'
        : 'text-negative')
    "
    :size="size"
    :variant="variant"
    :disabled="disabled"
    :loading="loading"
    @click="onClick"
  >
    {{ props.text }}
  </UButton>
</template>

<script setup lang="ts">
const props = defineProps<{
  text: string;
  leadingIcon?: string;
  color: "primary" | "secondary" | "tertiary";
  textColor: "primary" | "dark" | "white" | "negative";
  size: "sm" | "md" | "lg" | "xl";
  trailingIcon?: string;
  variant: "solid" | "outline" | "ghost" | "link";
  disabled?: boolean;
  loading?: boolean;
  class?: string;
  onClick?: () => void;
}>();
</script>
