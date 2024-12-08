<script lang="ts">
import { defineComponent } from 'vue';
import WidgetBase from './WidgetBase.vue';
import { CalendarView } from "vue-simple-calendar"
import "../../../node_modules/vue-simple-calendar/dist/style.css"
import "../../../node_modules/vue-simple-calendar/dist/css/default.css"

export default defineComponent({
  date() {
    return {
      showDate: new Date(),
    };
  },
  components: {
    WidgetBase,
    CalendarView,
  },
});
</script>

<template>
  <WidgetBase title="Calendrier" :cols="2" :rows="3">
    <div class="flex flex-col flex-grow">
      <CalendarView :show-date="showDate" 			class="theme-default"/>
    </div>
  </WidgetBase>
</template>
