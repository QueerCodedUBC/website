<script setup lang="ts">
import LinkButton, { type LinkButtonProps } from "./LinkButton.vue";

withDefaults(
  defineProps<
    LinkButtonProps & {
      iconPosition?: "left" | "right";
    }
  >(),
  {
    iconPosition: "left",
  }
);
</script>

<template>
  <LinkButton
    :href="href"
    :color="color"
    :new-tab="newTab"
    :square="square"
    :download="download"
    :aria-label="ariaLabel"
    :disabled="disabled"
  >
    <div v-if="iconPosition === 'left'" class="content">
      <slot name="icon" />
      <slot />
    </div>
    <div v-else class="content">
      <slot />
      <slot name="icon" />
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
