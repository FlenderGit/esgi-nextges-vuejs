<script lang="ts">
import { defineComponent } from 'vue';
import WidgetBase from './WidgetBase.vue';
import Button from '../Button.vue';
import type { Event } from '@/model/Event'
import { PropType } from 'vue';

export default defineComponent({
  components: {
    WidgetBase,
    Button,
  },
  props: {
    news: {
      type: Array as PropType<Event[]>,
      required: true,
    },
  },
});

</script>

<template>
  <WidgetBase title="Les actualités" :cols="2" :rows="3">
    <div class="grid gap-2">
      <div v-for="(news, i) in news">
        <div class="grid gap-1">
          <div class="flex justify-between items-start">
            <p class="cursor-pointer text-sky-600 font-bold text-lg">{{ news.name }}</p>
            <p class="text-xs px-2 py-1 rounded-full bg-red-500 text-neutral-50">{{ news.tag }}</p>
          </div>
          <p class="text-neutral-700/80 text-xs">{{ news.sub }}</p>
        </div>
      </div>
    </div>
  </WidgetBase>
</template>
