<script setup lang="ts">
import { onMounted, ref } from "vue";
import LinkButton from "./LinkButton.vue";

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
  <LinkButton
    :href="`mailto:${emailAddress}`"
    new-tab
    @click.once="updateEmailAddress"
  >
    <div class="content">
      <span class="material-icons-round" aria-hidden="true">mail</span>
      Email
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
