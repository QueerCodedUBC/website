<script setup lang="ts">
import { onMounted, ref } from "vue";
import IconLinkButton from "./IconLinkButton.vue";

const emailAddress = ref("");

onMounted(() => {
  // mousemove and touchstart event is used to prevent email address from being scraped by bots
  document.body.addEventListener("mousemove", updateEmailAddress, {
    once: true,
    passive: true,
  });
  document.body.addEventListener("touchstart", updateEmailAddress, {
    once: true,
    passive: true,
  });
  document.addEventListener("scroll", updateEmailAddress, {
    once: true,
    passive: true,
  });
});

function updateEmailAddress() {
  emailAddress.value = caesarCipher("txhhufrghgxefCjpdlo1frp", -3);
}

function caesarCipher(s: string, offset: number): string {
  return s
    .split("")
    .map((c) => {
      const code = c.charCodeAt(0);

      return String.fromCharCode(code + offset);
    })
    .join("");
}
</script>

<template>
  <IconLinkButton
    :href="`mailto:${emailAddress}`"
    new-tab
    @click.once="updateEmailAddress"
  >
    <template #icon>
      <span
        class="material-symbols-rounded"
        :style="{
          fontVariationSettings: `'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24`,
        }"
        >mail</span
      >
    </template>
    <template #default>Email</template>
  </IconLinkButton>
</template>
