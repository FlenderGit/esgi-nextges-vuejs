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
  <div class="h-screen bg-blue-900 px-3 py-4 flex flex-col gap-3 shadow-md shadow-neutral-800">
    <nav class="grid gap-2">
      <SidebarButton icon="ic:baseline-edit-calendar" text="Home" />
      <SidebarButton icon="ic:baseline-notes" text="Search" />
      <SidebarButton icon="ic:outline-logout" text="Logout" @click="session.logout" />
    </nav>
  </div>
</template>
