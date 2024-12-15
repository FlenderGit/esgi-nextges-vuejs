<script>
import WidgetBase from './WidgetBase.vue'
import { Icon } from '@iconify/vue';

export default {
  components: {
    WidgetBase,
    Icon,
  }
}
</script>

<template>
    <WidgetBase :withPadding="false">
      <div class="cursor-pointer flex flex-col gap-1 justify-center items-center flex-1 bg-blue-500/20">
        <Icon icon="ic:baseline-notifications-none" class="size-9 text-blue-500"/>
      <p class="text-blue-500 font-semibold">3 notifications</p>
      </div>
    </WidgetBase>
</template>
