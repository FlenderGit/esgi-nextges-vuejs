<script setup lang="ts">
import { defineProps } from "vue";

defineProps({
  value: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="grid justify-items-center">
    <p class="text-3xl font-bold">{{ value }}</p>
    <p class="text-xl text-neutral-800">{{ title }}</p>
  </div>
</template>
