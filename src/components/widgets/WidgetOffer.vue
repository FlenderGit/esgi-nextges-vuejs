<script lang="ts">
import { defineComponent } from 'vue';
import WidgetBase from './WidgetBase.vue';
import Button from '../Button.vue';
import type { Offer } from '@/model/Offer'
import { PropType } from 'vue';

export default defineComponent({
  components: {
    WidgetBase,
    Button,
  },
  props: {
    offers: {
      type: Array as PropType<Offer[]>,
      required: true,
    },
  },
});
</script>

<template>
  <WidgetBase title="Dernières offres" :cols="2" :rows="2">
    <div class="grid gap-1">
      <div v-for="(offer, i) in offers">
        <div class="flex flex-col hover:bg-neutral-200 px-2 py-1 rounded-xl cursor-pointer">
          <div class="flex justify-between items-center">
            <p class="font-bold">{{ offer.name }}</p>
            <p class="text-xs px-2 py-1 rounded-full"
              :class="{ 'bg-neutral-900 text-neutral-50': offer.type === 'alternance', 'bg-neutral-200 text-neutral-950': offer.type === 'stage' }"
            >{{ offer.type }}</p>
          </div>
          <p class="text-neutral-700/80 text-xs">{{ offer.location }}</p>
        </div>
      </div>
    </div>
  </WidgetBase>
</template>
