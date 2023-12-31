<script setup lang="ts">
export interface LinkButtonProps {
  href: string;
  newTab?: boolean;
  color?: "white" | "accent";
  square?: boolean;
  download?: string | boolean;
  ariaLabel?: string;
  disabled?: boolean;
}

withDefaults(defineProps<LinkButtonProps>(), {
  color: "white",
});

const emit = defineEmits<{
  click: [e: MouseEvent];
}>();
</script>

<template>
  <a
    :class="[color, { square }, { disabled }]"
    rel="noopener noreferrer"
    :href="href"
    :target="newTab ? '_blank' : '_self'"
    :download="
      download === true ? '' : download === false ? undefined : download
    "
    :aria-label="ariaLabel"
    :tabindex="disabled ? -1 : undefined"
  >
    <slot />
  </a>
</template>

<style lang="scss" scoped>
@use "sass:color";
@use "@/scss/colors";

a {
  display: block;

  height: 46px;
  border-radius: 23px;
  padding: 10px 14px;
  box-sizing: border-box;

  font-weight: 500;
  text-decoration: none;

  transition: all 0.2s ease-in-out;

  display: flex;
  align-items: center;
  justify-content: center;

  &.disabled {
    pointer-events: none;
    user-select: none;
    opacity: 0.5;
  }

  &.square {
    width: 46px;
  }

  &.white {
    color: colors.$primary-text-color !important;
    background-color: #fff;
    border: 1px solid #ebebeb;

    @media (hover: hover) {
      &:hover {
        background-color: #f5f5f5;
      }
    }

    &:active {
      background-color: #ebebeb;
    }
  }

  &.accent {
    color: colors.$primary-text-color !important;
    background-color: colors.$accent-color;

    @media (hover: hover) {
      &:hover {
        background-color: color.adjust(colors.$accent-color, $lightness: 6%);
      }
    }

    &:active {
      background-color: color.adjust(colors.$accent-color, $lightness: 12%);
    }

    @media (prefers-color-scheme: dark) {
      color: colors.$primary-text-color-dark !important;
      background-color: colors.$accent-color-dark;

      @media (hover: hover) {
        &:hover {
          background-color: color.adjust(
            colors.$accent-color-dark,
            $lightness: -6%
          );
        }
      }

      &:active {
        background-color: color.adjust(
          colors.$accent-color-dark,
          $lightness: -12%
        );
      }
    }
  }
}
</style>
