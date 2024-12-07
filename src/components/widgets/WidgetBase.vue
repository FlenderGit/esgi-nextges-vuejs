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
    class="shadow-md bg-white rounded-xl overflow-hidden relative flex flex-col gap-2"
    :class="{ 'px-4': withPadding, 'py-3': withPadding }">
    <div class="flex justify-between">
      <p class="uppercase text-neutral-400/80 text-lg font-bold">
        {{ title.trim() ?? "" }}
      </p>
      <slot name="actions"></slot>
    </div>
    <slot></slot>
  </div>
</template>
