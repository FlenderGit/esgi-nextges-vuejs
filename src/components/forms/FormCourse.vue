<script setup lang="ts">
import type { Class } from '@/model/Group'

defineProps({
  course: {
    type: Object as () => Class,
    default: () =>
      ({
        name: '',
        start: '',
        end: '',
      }) as Class,
  },
})
</script>

<template>
  <form @submit.prevent="$emit('submit', course)">
    <label for="name">Nom</label>
    <input type="text" id="name" v-model="course.name" />

    <label for="start">Début</label>
    <input type="date" id="start" v-model="course.start" />

    <label for="end">Fin</label>
    <input type="date" id="end" v-model="course.end" />

    <button type="submit">Enregistrer</button>
  </form>
</template>
