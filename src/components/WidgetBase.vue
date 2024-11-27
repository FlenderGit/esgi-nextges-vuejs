<script setup lang="ts">
import { defineProps } from "vue";

defineProps({
  cols: {
    type: Number,
    default: 1,
  },
  rows: {
    type: Number,
    default: 1,
  },
  title: {
    type: String,
    default: "",
  },
  withPadding: {
    type: Boolean,
    default: true,
  },
});
</script>

<template>
  <div
    :style="{ gridColumn: `span ${cols}`, gridRow: `span ${rows}` }"
    class="shadow-md bg-white rounded-xl overflow-hidden relative"
    :class="{ 'px-4': withPadding, 'py-3': withPadding }">
    <p v-if="title.trim()" class="uppercase text-neutral-400/80 text-lg font-bold">
      {{ title }}
    </p>
    <slot></slot>
  </div>
</template>
