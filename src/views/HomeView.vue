<script lang="ts">
import WidgetProfileAndStats from '../components/widgets/WidgetProfileAndStats.vue'
import WidgetDocuments from '../components/widgets/WidgetDocuments.vue'
import Carousel from '../components/Carousel.vue'
import WidgetBase from '../components/widgets/WidgetBase.vue'
import WidgetCalendar from '../components/widgets/WidgetCalendar.vue'
import WidgetWarning from '../components/widgets/WidgetWarning.vue'
import WidgetOffer from '../components/widgets/WidgetOffer.vue'
import WidgetClass from '../components/widgets/WidgetClass.vue'
import WidgetNotes from '../components/widgets/WidgetNotes.vue'
import Sidebar from '../components/Sidebar.vue'
import WidgetNews from '../components/widgets/WidgetNews.vue'
import { userRepository } from '../services/repository/PersonRepository.ts'
import { useSession } from '../stores/session'

export default {
  data() {
    return {
      session: useSession()
    }
  },
  setup() {
    const t = userRepository.getAll().then((res) => {
      console.log(res)
    })
    return {}
  },
  components: {
    WidgetProfileAndStats,
    Carousel,
    WidgetDocuments,
    WidgetBase,
    WidgetWarning,
    Sidebar,
    WidgetNotes,
    WidgetNews,
    WidgetClass,
    WidgetOffer,
    WidgetCalendar
  }
}

</script>

<template>
    <div class="flex">
      <Sidebar />
      <div class="flex-1 px-5 bg-neutral-100">
  <main>
    <div
      style="grid-template-columns: repeat(auto-fill, minmax(8rem, 1fr)); grid-template-rows: repeat(auto-fill, minmax(8rem, 1fr));"
      class="grid gap-5 grid-flow-dense h-screen overflow-y-auto pt-4">
      <WidgetProfileAndStats />
      <WidgetBase :cols="3" :rows="2" :withPadding="false" class="relative">
        <p class="absolute top-0 left-0 text-neutral-100 text-lg font-bold pl-4 pt-2 uppercase z-50">Actualité</p>
        <Carousel />
      </WidgetBase>
      <WidgetOffer />
      <WidgetClass />
      <WidgetNotes />
      <WidgetNews />
      <WidgetWarning />
      <WidgetCalendar />
      <WidgetDocuments />
      <!-- <WidgetBase title="Cours restants" :cols="2"> -->
      <!--   <div>Cours de la journée cours de la journée en propre, liste colorés</div> -->
      <!-- </WidgetBase> -->
      <!-- <WidgetBase :cols="3"> -->
      <!--   <div>Planning examens les prochains examens</div> -->
      <!-- </WidgetBase> -->
      <!-- <WidgetBase :cols="2"> -->
      <!--   <div>Devoirs, les prochains devoirs à faire</div> -->
      <!-- </WidgetBase> -->
      <!-- <WidgetBase :cols="2"> -->
      <!--   <div>Support de cours, les supports de cours récents. Avec un voir plus pour avoir par matière</div> -->
      <!-- </WidgetBase> -->
      <!-- <WidgetBase :cols="2" :rows="4"> -->
      <!--   <div>Evenements les évements en liste coloré qui vont se dérouler prochainement</div> -->
      <!-- </WidgetBase> -->
      <!-- <WidgetBase> -->
      <!--   <div>Notifications - Les alertes/warnings</div> -->
      <!-- </WidgetBase> -->
      <!-- <WidgetBase :rows="2"> -->
      <!--   <div>Sondage, p'tit sondage fun/pro pour le campus</div> -->
      <!--   <p>P'tit texte de remplissage</p> -->
      <!-- </WidgetBase> -->
    </div>
  </main>
      </div>
    </div>
</template>
