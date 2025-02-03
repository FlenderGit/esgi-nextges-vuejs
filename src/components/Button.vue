<script lang="ts">
export default {
  name: 'Button',
  props: {
    text: {
      type: String,
      default: 'Voir plus',
    },
    size: {
      type: String,
      default: 'md',
    },
  },
}
</script>

<template>
  <div>
    <button class="text-[.6rem] bg-purple-900 text-red-50 px-2 py-1 rounded-full">
      {{ text }}
    </button>
  </div>
</template>
