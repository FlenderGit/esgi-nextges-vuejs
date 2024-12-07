<script>
import WidgetBase from './WidgetBase.vue'
import NumberStat from '../NumberStat.vue'

export default {
  components: {
    WidgetBase,
    NumberStat
  }
}
</script>

<template>
    <WidgetBase title="Profile" :cols="2" :rows="2">
      <div class="flex flex-col gap-1">
        <div class="flex gap-2 items-center">
          <div class="size-10 bg-neutral-100 rounded-full"></div>
          <div class="flex flex-col">
            <p class="font-semibold text-lg">John Doe</p>
          <p class="text-neutral-600/80 text-sm">Informatique ESGI Mastère 3</p>
          </div>
        </div>
        <div>
          <div class="flex justify-between">
            <p class="text-neutral-700">Moyenne générale</p>
            <p class="text-neutral-700">14.5/20</p>
          </div>
          <progress class="w-full" value="14.5" max="20"></progress>
        </div>
        <div class="flex justify-between">
          <p class="text-neutral-700">Absence</p>
          <p class="text-neutral-700">3/20 autorisées</p>
        </div>
      </div>
    </WidgetBase>
</template>
