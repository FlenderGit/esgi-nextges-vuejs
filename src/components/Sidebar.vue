<script>
import SidebarButton from './SidebarButton.vue'

export default {
  components: {
    SidebarButton
  }
}
</script>

<template>
  <div class="h-screen bg-blue-900 px-3 py-2 flex flex-col gap-3">
    <div class="round-full bg-red-600 size-12"></div>
    <nav class="grid gap-2">
      <SidebarButton icon="ic:baseline-edit-calendar" text="Home" />
      <SidebarButton icon="ic:baseline-notes" text="Search" />
    </nav>
  </div>
</template>
