<script lang="ts">
import WidgetBase from './WidgetBase.vue'
import Button from '../Button.vue';
import { defineComponent } from 'vue';

type Class = {
  id: string;
  name: string;
  place: string;
  bloc: string;
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
          bloc: "1"
        },
        {
          id: "2",
          name: "UX UI",
          place: "A2",
          bloc: "1"
        },
        {
          id: "3",
          name: "Dev Web",
          place: "A3",
          bloc: "2"
        },
        {
          id: "4",
          name: "Dev Mobile",
          place: "A4",
          bloc: "2"

        }
      ] as Class[],
    };
  },
});
</script>

<template>
      <WidgetBase title="Mes cours" :cols="2" :rows="2">
        <template v-slot:actions>
          <Button/>
        </template>
        <div class="grid gap-2">
          <div v-for="(classe, i) in classes">
            <div class="flex justify-between items-center">
              <div class="grid">
                <p class="font-semibold text-lg">{{ classe.name }}</p>
                <p class="text-neutral-600/80">Bloc {{ classe.bloc }}</p>
              </div>
              <p class="text-xs bg-sky-600 text-neutral-50 rounded-full px-3 py-1">{{ classe.place }}</p>
            </div>
          </div>
        </div>
      </WidgetBase>
</template>
