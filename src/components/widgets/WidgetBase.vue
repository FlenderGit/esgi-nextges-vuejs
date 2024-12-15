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
  loading: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div
    :style="{ gridColumn: `span ${cols}`, gridRow: `span ${rows}` }"
    class="shadow-md bg-white rounded-xl overflow-hidden relative flex flex-col gap-1"
    :class="{ 'px-3': withPadding, 'py-2': withPadding }">
    <div v-if="loading" class="absolute inset-0 flex items-center justify-center">
      Chargement...
    </div>
    <div v-else class="flex justify-between" v-if="title.trim()">
      <p class="uppercase text-neutral-400/80 text-lg font-bold">
        {{ title.trim() ?? "" }}
      </p>
      <slot name="actions"></slot>
    </div>
    <slot></slot>
  </div>
</template>
