<script setup lang="ts">
import { consola } from "consola";
const props = defineProps({
  title: {
    type: String,
    required: true, // La prop `title` est obligatoire
  },
  number: {
    type: Number,
    required: true, // La prop `title` est obligatoire
  },
})
consola.info(props.number)
</script>

<template>
  <Card data-testid="statistic-card" class="statistic-card">

    <!-- Titre de la card -->
    <template #title>{{ props.title }}</template>
    <template #content>{{ props.number}}
    </template>
  </Card>
  </template>


<style scoped>
.statistic-card {
  background-color: #3CB371;
  //margin: 4px;
  border-radius: 8px;
  height: 100%;
  min-height: 150px; /* Ajustez selon vos besoins */
  //min-width: 250px; /* Ajustez selon vos besoins */
  //display: flex;
  //flex-direction: column;
  //justify-content: center;
  //align-items: center;
}
/* Style pour le titre */
:deep(.p-card-title)  {
  color: black;
  font-size: 1.5rem; /* Taille du texte plus grande */
  font-weight: bold; /* Texte en gras */
}

/* Style pour le nombre */
:deep(.p-card-content)  {
  color: black;
  font-size: 3rem; /* Taille du texte plus grande */
  font-weight: bold; /* Texte en gras */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/* Couleurs de fond dynamique */
.bg-on {
  background-color: #3CB371;
}

.bg-off {
  background-color: #d3d3d3;
}


</style>