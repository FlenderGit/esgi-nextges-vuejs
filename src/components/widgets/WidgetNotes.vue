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
        },
        {
          name: "Notes 5",
          note: 7
        },
        {
          name: "Notes 6",
          note: 8
        },
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
      <WidgetBase title="Dernières notes" :cols="2" :rows="2">
        <template v-slot:actions>
          <Button/>
        </template>
        <div class="grid gap-2">
          <div v-for="(note, i) in notes">
            <div class="flex justify-between items-center px-2 py-1 hover:bg-neutral-100 rounded-xl cursor-pointer">
              <p class="font-semibold">{{ note.name }}</p>
              <p class="">{{ note.note.toFixed(2) }}</p>
            </div>
          </div>
        </div>
      </WidgetBase>
</template>
