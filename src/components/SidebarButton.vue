<template>
  <div class="grid justify-items-center text-red-50 hover:bg-red-600 rounded transition-colors">
    <Icon :icon="icon" class="size-9" />
    <p class="text-xs">Text</p>
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
