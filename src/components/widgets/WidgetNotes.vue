<script>
import WidgetBase from './WidgetBase.vue'
import Button from '../Button.vue'

export default {
  data() {
    return {
      notes: [
        {
          name: "Notes 1",
          note: 3,
        },
        {
          name: "Notes 2",
          note: 4
        },
        {
          name: "Notes 3",
          note: 5
        },
        {
          name: "Notes 4",
          note: 6
        }
      ]
    }
  },
  components: {
    WidgetBase,
    Button
  }
}
</script>

<template>
      <WidgetBase title="Mes notes" :cols="2">
        <template v-slot:actions>
          <Button/>
        </template>
        <div class="grid gap-2">
          <div v-for="(note, i) in notes">
            <div class="px-3 py-1 flex items-center gap-4 bg-neutral-100 hover:bg-neutral-200 transition-colors rounded">
              <p class="text-xl font-bold">{{ note.note.toFixed(2) }}</p>
              <p>{{ note.name }}</p>
            </div>
          </div>
        </div>
      </WidgetBase>
</template>
