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
      <SidebarButton icon="mingcute:home-3-line" text="Home" @click="$router.push('/')" />
      <SidebarButton icon="mingcute:notebook-2-line" text="Notes" @click="$router.push('/notes')" />
      <SidebarButton icon="ic:baseline-edit-calendar" text="Home" @click="$router.push('/planning')" />
      <SidebarButton icon="ic:outline-logout" text="Logout" @click="session.logout" />
    </nav>
  </div>
</template>
