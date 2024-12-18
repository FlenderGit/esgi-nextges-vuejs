<script lang="ts">
import { defineComponent } from 'vue';
import { CalendarView } from "vue-simple-calendar"
import Sidebar from '../components/Sidebar.vue'
import { useGroupStore } from '../stores/group.ts'
import { ref } from 'vue'

// Import the styles
import "../../node_modules/vue-simple-calendar/dist/style.css"
import "../../node_modules/vue-simple-calendar/dist/css/default.css"

export default defineComponent({
  date() {
    return {
      showDate: new Date(),
    };
  },
  setup() {
    const loading = ref(false)
    const group_store = useGroupStore()
    console.log("Group store:", group_store); // Debug
    const classes = group_store.group.classes
    console.log("Classes:", classes); // Debug
    const date = new Date()
    return {
      classes,
      loading,
      showDate: date,
    }
  },
  components: {
    Sidebar,
    CalendarView,
  },
  computed: {
    items() {
      if (!this.classes) return []
      return this.classes.map((classe) => {
        return {
          id: classe.name,
          startDate: new Date(classe.start * 1000),
          title: classe.name,
        }
      })
    }
  },
  methods: {
    formatDate(date) {
      return date.toLocaleDateString()
    }
  }
});
</script>

<template>
    <div class="flex h-screen">
      <Sidebar />
      <div class="flex flex-col flex-1 px-16 py-6 bg-neutral-100">
      <main class="overflow-y-auto flex flex-col flex-1 gap-2">
        <div class="flex justify-between items-center">
          <div>
        <p class="text-2xl font-bold">Planning</p>
          <p class="text-sm text-neutral-500">Consultez votre planning</p>
          </div>
          <p class="font-bold text-neutral-900 text-xl">{{ formatDate(showDate) }}</p>
        </div>
        <div class="h-3/4 mt-4">
          <CalendarView :items="items" :show-date="showDate" class="theme-default"/>
        </div>
      </main>
    </div>
  </div>
</template>

