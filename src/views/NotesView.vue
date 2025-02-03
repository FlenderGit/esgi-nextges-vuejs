<script lang="ts">
import { defineComponent } from 'vue'
import Sidebar from '../components/Sidebar.vue'
import { useGroupStore } from '../stores/group'
import { ref } from 'vue'

export default defineComponent({
  setup() {
    const loading = ref(false)
    const group_store = useGroupStore()
    const notes = group_store.group?.notes ?? []
    const date = new Date().toLocaleDateString()
    const search = ref('')
    return {
      date,
      notes,
      loading,
      search,
    }
  },
  computed: {
    filteredNotes() {
      return this.notes.filter((note) =>
        note.name.toLocaleLowerCase().includes(this.search.toLocaleLowerCase()),
      )
    },
  },
  components: {
    Sidebar,
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
            <p class="text-2xl font-bold">Mes notes</p>
            <p class="text-sm text-neutral-500">Consultez vos notes</p>
          </div>
          <input
            v-model="search"
            type="text"
            class="px-4 py-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Rechercher une note"
          />
        </div>
        <div class="grid gap-4">
          <div
            v-for="note in filteredNotes"
            :key="note.id"
            class="bg-white px-4 py-1 rounded-lg shadow-md flex justify-between items-center hover:shadow-lg transition-shadow hover:bg-neutral-50 cursor-pointer transition-colors"
          >
            <div>
              <p class="text-lg font-bold">{{ note.name }}</p>
              <p class="text-sm text-neutral-500">{{ note.note }}</p>
            </div>
            <div>
              <p class="text-sm text-neutral-500">{{ date }}</p>
              <p class="text-sm text-neutral-500">Jean Durant</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
