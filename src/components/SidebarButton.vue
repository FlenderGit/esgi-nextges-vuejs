<script lang="ts" setup>
import { useSession } from '@/stores/session'
import { Icon } from '@iconify/vue'
import { computed } from 'vue'

const props = defineProps<{
  icon: string
  text: string
  onlyAdmin?: boolean
}>()

const session = useSession()

const isAccessible = computed(() => {
  return !props.onlyAdmin || (props.onlyAdmin && session.user?.role === 'admin')
})
</script>

<template>
  <div
    v-if="isAccessible"
    class="flex justify-center items-center text-red-50 size-12 mx-auto hover:bg-cyan-300/20 rounded transition-colors"
    :title="props.text"
  >
    <Icon :icon="props.icon" class="size-9" />
  </div>
</template>
