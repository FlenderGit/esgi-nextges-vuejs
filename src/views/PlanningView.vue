<script lang="ts">
import { defineComponent } from 'vue'
import { CalendarView } from 'vue-simple-calendar'
import Sidebar from '../components/Sidebar.vue'
import { useGroupStore } from '../stores/group'
import { ref } from 'vue'

// Import the styles
import '../../node_modules/vue-simple-calendar/dist/style.css'
import '../../node_modules/vue-simple-calendar/dist/css/default.css'

export default defineComponent({
  setup() {
    const loading = ref(false)
    const group_store = useGroupStore()
    const classes = group_store.group?.classes ?? []
    const date = ref(new Date())
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
      return this.classes.map((classe) => {
        console.log(classe)
        return {
          id: classe.name,
          startDate: new Date(Number(classe.start) * 1000),
          title: classe.name,
        }
      })
    },
    formated_date() {
      return this.showDate.toLocaleDateString(navigator.language, {
        month: 'long',
        year: 'numeric',
      })
    },
  },
  methods: {
    goNext() {
      this.showDate = new Date(this.showDate.getFullYear(), this.showDate.getMonth() + 1, 1)
      console.log(this.showDate)
    },
    goPrev() {
      this.showDate = new Date(this.showDate.getFullYear(), this.showDate.getMonth() - 1, 1)
      console.log(this.showDate)
    },
  },
})
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
          <div>
            <p class="font-bold text-neutral-900 text-xl">{{ formated_date }}</p>
            <div class="flex gap-2">
              <button
                @click="goPrev"
                class="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Mois précédent
              </button>
              <button
                @click="showDate = new Date()"
                class="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Aujourd'hui
              </button>
              <button
                @click="goNext"
                class="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Mois suivant
              </button>
            </div>
          </div>
        </div>
        <div class="h-3/4 mt-4">
          <CalendarView :items="items" :show-date="showDate" class="theme-default" />
        </div>
      </main>
    </div>
  </div>
</template>
