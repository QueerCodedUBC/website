<script setup lang="ts">
import LinkButton, { type LinkButtonProps } from "./LinkButton.vue";

defineProps<LinkButtonProps>();
</script>

<template>
  <LinkButton
    :href="href"
    :color="color"
    :new-tab="newTab"
    :square="square"
    :download="download"
  >
    <div class="content">
      <slot name="icon" />
      <slot />
    </div>
  </LinkButton>
</template>

<style lang="scss" scoped>
.content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
}
</style>
