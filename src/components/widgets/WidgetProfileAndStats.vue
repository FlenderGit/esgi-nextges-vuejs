<script>
import WidgetBase from './WidgetBase.vue'
import NumberStat from '../NumberStat.vue'
import { useSession } from '../../stores/session'

export default {
  data() {
    return {
      session: useSession()
    }
  },
  methods: {
    emailToNames(email) {
      return email.split('@')[0].replace('.', ' ').split(' ').map((name) => name.charAt(0).toUpperCase() + name.slice(1)).join(' ')
    }
  },
  components: {
    WidgetBase,
    NumberStat
  }
}
</script>

<template>
    <WidgetBase :cols="2" :rows="1">
      <div class="flex flex-col gap-1">
        <div class="flex gap-2 items-center">
          <div class="size-12 bg-neutral-100 rounded-full">
            <img src="https://avatar.iran.liara.run/public" alt="profile" class="rounded-full" />
          </div>
          <div class="flex flex-col">
          <p class="font-semibold text-lg">{{ session.user.name ?? emailToNames(session.user.email) }}</p>
          <p class="text-neutral-600/80 text-sm">Informatique • ESGI Mastère 1</p>
          </div>
        </div>
        <div class="flex flex-col gap-1">
          <div class="flex justify-between">
            <p class="text-neutral-700 text-sm">Moyenne générale</p>
            <p class="text-neutral-700 text-sm">14.5/20</p>
          </div>
          <div class="h-2 overflow-hidden w-full bg-neutral-100 rounded-full">
            <div class="h-2 w-10/12 bg-sky-600"></div>
          </div>
        </div>
        <div class="flex justify-between">
          <p class="text-neutral-700 text-sm">Absence</p>
          <p class="text-neutral-700 text-sm">3/20 autorisées</p>
        </div>
      </div>
    </WidgetBase>
</template>
