<script lang="ts">
import { defineComponent } from 'vue';
import WidgetBase from './WidgetBase.vue';
import { CalendarView } from "vue-simple-calendar"

// Import the styles
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
  props: {
    classes: {
      type: Array as Class[],
      required: true,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    items() {
      if (!this.classes) return []
      return this.classes.map((classe) => {
        return {
          id: classe.name,
          startDate: new Date(classe.start * 1000),
        }
      })
    }
  }
});
</script>

<template>
  <WidgetBase title="Calendrier" :cols="2" :rows="2" :loading="loading">
    <div v-show="!loading" class="flex flex-col flex-grow">
      <CalendarView :items="items" :show-date="showDate" class="theme-default"/>
    </div>
  </WidgetBase>
</template>
