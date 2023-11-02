<script setup lang="ts">
export interface LinkButtonProps {
  href: string;
  newTab?: boolean;
}

defineProps<LinkButtonProps>();

const emit = defineEmits<{
  click: [e: MouseEvent];
}>();
</script>

<template>
  <a
    rel="noopener noreferrer"
    :href="href"
    :target="newTab ? '_blank' : '_self'"
  >
    <slot />
  </a>
</template>

<style lang="scss" scoped>
@use "@/scss/colors";

a {
  display: block;

  height: 46px;
  border-radius: 23px;
  padding: 10px 14px;
  box-sizing: border-box;

  text-decoration: none;
  color: colors.$primary-text-color !important;
  background-color: #fff;

  transition: all 0.2s ease-in-out;

  @media (hover: hover) {
    &:hover {
      background-color: #f5f5f5;
    }
  }

  &:active {
    background-color: #ebebeb;
  }
}
</style>
