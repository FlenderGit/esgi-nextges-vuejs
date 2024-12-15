<script>
import WidgetBase from './WidgetBase.vue'
import Button from '../Button.vue'

export default {
  methods: {
    randomNote() {
      return Math.floor(Math.random() * 20)
    }
  },
  data() {
    return {
      notes: [
        {
          name: "Elm",
          note: this.randomNote()
        },
        {
          name: "UI Design",
          note: this.randomNote()
        },
        {
          name: "Projet annuel",
          note: this.randomNote()
        },
        {
          name: "Svelte",
          note: this.randomNote()
        },
        {
          name: "Rust advanced",
          note: this.randomNote()
        },
        {
          name: "React",
          note: this.randomNote()
        },
        {
          name: "Gleam",
          note: this.randomNote()
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
