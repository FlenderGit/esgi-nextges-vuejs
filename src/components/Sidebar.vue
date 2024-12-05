<script>
import SidebarButton from './SidebarButton.vue'
import { useSession } from '@/stores/session'

export default {
  data() {
    return {
      session: useSession()
    }
  },
  components: {
    SidebarButton,
  },
}
</script>

<template>
  <div class="h-screen bg-blue-900 px-3 py-2 flex flex-col gap-3 shadow-md shadow-neutral-800">
    <div class="round-full bg-red-600 size-12"></div>
    <nav class="grid gap-2">
      <SidebarButton icon="ic:baseline-edit-calendar" text="Home" />
      <SidebarButton icon="ic:baseline-notes" text="Search" />
    </nav>
    <div @click="session.logout">
      Logout
    </div>
  </div>
</template>
