<template>
  <div class="flex justify-center items-center text-red-50 size-12 mx-auto hover:bg-cyan-300/20 rounded transition-colors" :title="text">
    <Icon :icon="icon" class="size-9" />
  </div>
</template>

<script>
import { Icon } from '@iconify/vue';
export default {
  name: 'SidebarButton',
  props: {
    icon: String,
    text: String
  },
  components: {
    Icon
  }
}
</script>
