<script lang="ts">
import { defineComponent } from 'vue';
import WidgetBase from './WidgetBase.vue';
import Button from '../Button.vue';

type Offer = {
  id: string;
  title: string;
  place: string;
  type: 'Alternance' | 'Stage';
};

export default defineComponent({
  components: {
    WidgetBase,
    Button,
  },
  data() {
    return {
      offers: [
        {
          id: "1",
          title: "Offre 1",
          place: "Reims (51)",
          type: "Alternance",
        },
        {
          id: "2",
          title: "Offre 2",
          place: "Paris (75)",
          type: "Stage",
        },
        {
          id: "3",
          title: "Offre 3",
          place: "Lille (59)",
          type: "Alternance",
        },
        {
          id: "4",
          title: "Offre 4",
          place: "Lyon (69)",
          type: "Stage",
        },
      ] as Offer[],
    };
  },
});
</script>

<template>
  <WidgetBase title="Dernières offres" :cols="2" :rows="2">
    <div class="grid gap-2">
      <div v-for="(offer, i) in offers">
        <div class="grid">
          <div class="flex justify-between items-center">
            <p class="font-bold">{{ offer.title }}</p>
            <p class="text-xs px-2 py-1 rounded-full"
              :class="{ 'bg-neutral-900 text-neutral-50': offer.type === 'Alternance', 'bg-neutral-200 text-neutral-950': offer.type === 'Stage' }"
            >{{ offer.type }}</p>
          </div>
          <p class="text-neutral-700/80 text-xs">{{ offer.place }}</p>
        </div>
      </div>
    </div>
  </WidgetBase>
</template>
