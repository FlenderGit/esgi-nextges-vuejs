<script lang="ts" setup>
import { Icon } from '@iconify/vue'

const props = defineProps<{
  icon: string
  text: string
}>()
</script>

<template>
  <div
    class="flex justify-center items-center text-red-50 size-12 mx-auto hover:bg-cyan-300/20 rounded transition-colors"
    :title="props.text"
  >
    <Icon :icon="props.icon" class="size-9" />
  </div>
</template>
