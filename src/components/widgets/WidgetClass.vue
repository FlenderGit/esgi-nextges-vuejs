<script lang="ts">
import WidgetBase from './WidgetBase.vue'
import Button from '../Button.vue';
import { defineComponent } from 'vue';
import type { Class } from '@/model/Group'

export default defineComponent({
  components: {
    WidgetBase,
    Button,
  },
  props: {
    classes: {
      type: Array as Class[],
      required: true,
    },
  },
  methods: {
    timestampToTime(timestamp: number): string {
      const date = new Date(timestamp * 1000)
      console.log("Date:", date); // Debug
      console.log("Timestamp:", timestamp); // Debug
      return date.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })
    },
  }
});
</script>

<template>
      <WidgetBase title="Mes cours" :cols="2" rows="2">
        <template v-slot:actions>
          <Button/>
        </template>
        <div class="grid gap-1">
          <div v-for="(classe, i) in classes">
            <div class="flex justify-between items-center px-2 py-1 rounded-xl hover:bg-neutral-200">
              <div class="grid">
                <p class="font-bold">{{ classe.name }}</p>
                <p class="text-neutral-600/80 text-xs">Salle {{ classe.location }} • Bloc {{ classe.bloc }}</p>
              </div>
            <div>
            <p class="text-neutral-600/80 text-xs">{{ timestampToTime(classe.start) }} - {{ timestampToTime(classe.end) }}</p>
          </div>
            </div>
          </div>
        </div>
      </WidgetBase>
</template>
