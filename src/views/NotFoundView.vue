<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const message = 'Page not found'
    return {
      message,
    }
  },
})
</script>

<template>
  <div class="flex flex-col gap-3 justify-center items-center h-screen text-neutral-800">
    <p class="font-bold text-2xl">404</p>
    <p v-text="message" />
    <a class="text-blue-500" href="/">Retour à l'accueil</a>
  </div>
</template>
