<template>
<!--  <div class="flex flex-row gap-4 p-0 mb-4">-->
  <div>
    <Toast />
  </div>
  <div class="flex flex-row">
      <div class="basis-1/4 little-card">
        <ActionableStatus title="Status 1" :status="true" :is-activable="true"/>
      </div>
      <div class="basis-1/4 little-card">
        <StartStopButton :is-allowed="true" :is-running="true" @status-changed="onAutomationStatusChange"></StartStopButton>
      </div>
      <div class="basis-1/2 little-card">
          <StartStopButton :is-allowed="false" :is-running="true"></StartStopButton>
      </div>
    </div>
  <div class="flex flex-row">
    <div class="basis-1/4 little-card">
      <StatisticCard title="Jobs réussis" :number="50000" styleClass="style-green" />
    </div>
    <div class="basis-1/4 little-card">
      <ActionableStatus title="Status 2" :status="true" :is-activable="true"/>
    </div>
    <div class="basis-1/4 little-card">
      <StatisticCard title="Nbr. Jobs terminés" :number="637484"/>
    </div>
    <div class="basis-1/4 little-card">
      <ActionableStatus title="Status 2" :status="true" :is-activable="true"/>
    </div>
    <div class="basis-1/2 little-card">
      <ActionableStatus title="Status 3" :status="true" :is-activable="true"/>
    </div>
    <div class="basis-1/4 little-card">
      <StatisticCard title="Nbr. Jobs actifs" :number="84" styleClass="style-blue"/>
    </div>
  </div>

</template>

<script setup lang="ts">
import { useToast } from "primevue/usetoast";
const toast = useToast();
import ActionableStatus from '@/components/ActionableStatusCard.vue'; // Assurez-vous que le chemin est correct
import StatisticCard from '@/components/StatisticCard.vue';
import StartStopButton from "@/components/StartStopButton.vue";
import { consola } from "consola"

// Reçois l'event de status change
const onAutomationStatusChange = (payload: any) => {
  consola.info(payload)
  toast.add({ severity: 'warn', summary: 'Warning', detail: 'Message Content', life: 3000 });
  toast.add({ severity: 'info', summary: 'Info', detail: 'Message Content' , life: 3000});
  toast.add({ severity: 'success', summary: 'Success', detail: 'Message Content ' , life: 3000});
  toast.add({ severity: 'error', summary: 'Error', detail: 'On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L\'avantage du Lorem Ipsum sur un texte générique comme \'Du texte. Du texte. Du texte.\' est qu\'il possède une distribution de lettres plus ou moins normale, et en tout cas comparable avec celle du français standard. De nombreuses suites logicielles de mise en page ou éditeurs de sites Web ont fait du Lorem Ipsum leur faux texte par défaut, et une recherche pour \'Lorem Ipsum\' vous conduira vers de nombreux sites qui n\'en sont encore qu\'à leur phase de construction. Plusieurs versions sont apparues avec le temps, \nparfois par accident, \nsouvent intentionnellement (histoire d\'y rajouter de petits clins d\'oeil, voire des phrases embarassantes).' , life: 3000});
}


</script>

<style scoped>


.little-card {
  padding: 4px;
}



</style>
