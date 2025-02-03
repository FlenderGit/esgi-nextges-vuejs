import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Group } from '@/model/Group'

export const useGroupStore = defineStore('group', () => {
  const group = ref<Group | null>(null)

  function setGroup(newGroup: Group) {
    group.value = newGroup
  }

  return { group, setGroup }
})
