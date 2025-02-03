<script lang="ts">
import { Icon } from '@iconify/vue'
import { defineComponent } from 'vue'
import WidgetBase from './WidgetBase.vue'

type Document = {
  id: string
  title: string
  class: string
}

export default defineComponent({
  components: {
    WidgetBase,
    Icon,
  },
  data() {
    return {
      documents: [
        {
          id: '1',
          title: 'Document 1',
          class: 'Elm',
        },
        {
          id: '2',
          title: 'Document 2',
          class: 'UX UI',
        },
        {
          id: '3',
          title: 'Document 3',
          class: 'Dev Web',
        },
        {
          id: '4',
          title: 'Document 4',
          class: 'Dev Mobile',
        },
        {
          id: '5',
          title: 'Document 5',
          class: 'Elm',
        },
      ] as Document[],
    }
  },
  methods: {
    send_warning() {
      alert('dummy component')
    },
  },
})
</script>

<template>
  <WidgetBase title="Documents" :cols="2" :rows="2">
    <div class="grid gap-2">
      <div v-for="(doc, i) in documents">
        <div
          @click="send_warning"
          class="flex gap-1 cursor-pointer items-center rounded-xl hover:bg-neutral-200 px-2 py-1"
        >
          <Icon icon="akar-icons:file" class="size-8 text-neutral-500" />
          <div class="flex flex-col">
            <p class="font-semibold">{{ doc.title }}</p>
            <p class="text-xs text-neutral-500">{{ doc.class }}</p>
          </div>
        </div>
      </div>
    </div>
  </WidgetBase>
</template>
