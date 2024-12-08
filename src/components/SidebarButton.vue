<template>
  <div class="grid justify-items-center text-red-50 size-12 mx-auto hover:bg-cyan-300/20 rounded transition-colors" :title="text">
    <Icon :icon="icon" class="size-9" />
    <!-- <p class="text-xs">Text</p> -->
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
