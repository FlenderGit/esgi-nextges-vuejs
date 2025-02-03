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
      <div class="cursor-pointer flex flex-col gap-1 justify-center items-center flex-1 bg-red-500/20">
        <Icon icon="carbon:warning" class="size-9 text-red-500"/>
      <p class="text-red-500 font-semibold">3 warnings</p>
      </div>
    </WidgetBase>
</template>
