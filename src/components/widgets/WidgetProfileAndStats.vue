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
          <div class="size-12 bg-neutral-100 rounded-full"></div>
          <div class="flex flex-col">
            <p class="font-semibold text-lg">John Doe</p>
          <p class="text-neutral-600/80 text-sm">Informatique ESGI Mastère 3</p>
          </div>
        </div>
        <div class="flex flex-col gap-1">
          <div class="flex justify-between">
            <p class="text-neutral-700 text-sm">Moyenne générale</p>
            <p class="text-neutral-700 text-sm">14.5/20</p>
          </div>
          <div class="h-2 overflow-hidden w-full bg-neutral-100 rounded-full">
            <div class="h-2 w-10/12 bg-sky-600"></div>
          </div>
        </div>
        <div class="flex justify-between">
          <p class="text-neutral-700 text-sm">Absence</p>
          <p class="text-neutral-700 text-sm">3/20 autorisées</p>
        </div>
      </div>
    </WidgetBase>
</template>
