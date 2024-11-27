<script lang="ts">
import WidgetBase from '../components/WidgetBase.vue'
import NumberStat from '../components/NumberStat.vue'
import Carousel from '../components/Carousel.vue'

export default {
  components: {
    WidgetBase,
    NumberStat,
    Carousel
  }
}

</script>

<template>
  <main>
    <div
      style="grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); grid-template-rows: repeat(auto-fill, minmax(200px, 1fr));"
      class="grid gap-5 grid-flow-dense h-screen overflow-y-auto pt-4">
      <WidgetBase>
        <div>Profile et stats, PP et Card number/stats
          <div class="flex gap-2 justify-between">
            <NumberStat title="Moyenne" :value="15.00" />
            <NumberStat title="Devoirs" :value="2" />
          </div>
        </div>
      </WidgetBase>
      <WidgetBase :rows="1" :cols="2" :withPadding="false" class="relative">
        <p class="absolute top-0 left-0 text-neutral-100 text-lg font-bold pl-4 pt-2 uppercase z-50">Actualité</p>
        <Carousel />
      </WidgetBase>
      <WidgetBase :cols="2" :rows="2">
        <div>Calendar quotidien - Un vrai calendrier avec une zone en dessous pour avoir les cours de la journées</div>

      </WidgetBase>
      <WidgetBase>
        <div>Cours de la journée cours de la journée en propre, liste colorés</div>
      </WidgetBase>
      <WidgetBase :cols="2">
        <div>Notes - les dernières notes parues, un voir plus</div>
      </WidgetBase>
      <WidgetBase :rows="3">
        <div>Planning examens les prochains examens</div>
      </WidgetBase>
      <WidgetBase :rows="4">
        <div>Devoirs, les prochains devoirs à faire</div>
      </WidgetBase>
      <WidgetBase :cols="2">
        <div>Support de cours, les supports de cours récents. Avec un voir plus pour avoir par matière</div>
      </WidgetBase>
      <WidgetBase :cols="2" :rows="4">
        <div>Evenements les évements en liste coloré qui vont se dérouler prochainement</div>
      </WidgetBase>
      <WidgetBase>
        <div>Notifications - Les alertes/warnings</div>
      </WidgetBase>
      <WidgetBase>
        <div>Sondage, p'tit sondage fun/pro pour le campus</div>
      </WidgetBase>
      <WidgetBase>
        <div>Offres de stage/alternance les denrières offres, avec un voir plus</div>
      </WidgetBase>
    </div>
  </main>
</template>
