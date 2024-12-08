<script lang="ts">
import { defineComponent } from 'vue';
import WidgetBase from './WidgetBase.vue';
import Button from '../Button.vue';

type News = {
  id: string;
  title: string;
  content: string;
  date: string;
  type: string;
};

export default defineComponent({
  components: {
    WidgetBase,
    Button,
  },
  data() {
    return {
      news: [
        {
          id: "1",
          title: "News 1",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec libero.",
          date: "2024-12-07",
          type: "General"
        },
        {
          id: "2",
          title: "News 2",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec libero.",
          date: "2024-12-07",
          type: "General"
        },
        {
          id: "3",
          title: "News 3",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec libero.",
          date: "2024-12-07",
          type: "General"
        },
        {
          id: "4",
          title: "News 4",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec libero.",
          date: "2024-12-07",
          type: "General"
        },
        {
          id: "5",
          title: "News 5",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec libero.",
          date: "2024-12-07",
          type: "General"
        },
      ] as News[],  // Typage des données
    };
  },
});
</script>

<template>
  <WidgetBase title="Les actualités" :cols="2" :rows="3">
    <div class="grid gap-2">
      <div v-for="(news, i) in news">
        <div class="grid gap-1">
          <div class="flex justify-between items-start">
            <p class="text-sky-600 font-bold text-lg">{{ news.title }}</p>
            <p class="text-xs px-2 py-1 rounded-full bg-red-500 text-neutral-50">{{ news.type }}</p>
          </div>
          <p class="text-neutral-700/80 text-xs">{{ news.content }}</p>
        </div>
      </div>
    </div>
  </WidgetBase>
</template>
