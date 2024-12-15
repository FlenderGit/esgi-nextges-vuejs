<script lang="ts">
import WidgetBase from './WidgetBase.vue'
import Button from '../Button.vue';
import { defineComponent } from 'vue';

type Class = {
  id: string;
  name: string;
  place: string;
  bloc: string;
  start: string;
  end: string;
}

export default defineComponent({
  components: {
    WidgetBase,
    Button,
  },
  data() {
    return {
      classes: [
        {
          id: "1",
          name: "Elm",
          place: "A1",
          bloc: "1",
          start: "08:00",
          end: "10:00"
        },
        {
          id: "2",
          name: "UX UI",
          place: "A2",
          bloc: "1",
          start: "10:00",
          end: "12:00"
        },
        {
          id: "3",
          name: "Dev Web",
          place: "A3",
          bloc: "2",
          start: "14:00",
          end: "15:00"
        },
        {
          id: "4",
          name: "Dev Mobile",
          place: "A4",
          bloc: "2",
          start: "15:00",
          end: "16:00"
        },
        {
          id: "5",
          name: "Elm",
          place: "A5",
          bloc: "3",
          start: "16:00",
          end: "17:00"
        },
      ] as Class[],
    };
  },
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
                <p class="text-neutral-600/80 text-xs">Salle {{ classe.place }} • Bloc {{ classe.bloc }}</p>
              </div>
            <div>
            <p class="text-neutral-600/80 text-xs">{{ classe.start }} - {{ classe.end }}</p>
          </div>
            </div>
          </div>
        </div>
      </WidgetBase>
</template>
