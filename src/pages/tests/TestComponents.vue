<template>
<!--  <div class="flex flex-row gap-4 p-0 mb-4">-->
  <div class="flex flex-row">
      <div class="basis-1/4 little-card">
        <ActionableStatus title="Status 1" :status="true" :is-activable="true"/>
      </div>
      <div class="basis-1/4 little-card">
        <StartStopButton2></StartStopButton2>
      </div>
      <div class="basis-1/2 little-card">
        <StatisticCard title="Jobs en attente" :number="1200" styleClass="style-orange" />


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
      <StartStopButton></StartStopButton>
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
  <div>
    <StartStopButton></StartStopButton>
  </div>

</template>

<script setup lang="ts">
import ActionableStatus from '@/components/ActionableStatusCard.vue'; // Assurez-vous que le chemin est correct
import StatisticCard from '@/components/StatisticCard.vue';
import StartStopButton from "@/components/StartStopButton.vue";
import StartStopButton2 from "@/components/StartStopButton2.vue";
</script>

<style scoped>

/*.mb-4 {
  margin-bottom: 16px;
}*/

.little-card {
  padding: 4px;
}

</style>
