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
      <WidgetBase title="Profile" :cols="3">
        <div>Profile et stats, PP et Card number/stats
          <div class="flex gap-2 justify-between">
            <NumberStat title="Moyenne" :value="15.00" />
            <NumberStat title="Devoirs" :value="2" />
          </div>
          jean<br>jean<br>jean<br>jean<br>jean
        </div>
      </WidgetBase>
</template>
