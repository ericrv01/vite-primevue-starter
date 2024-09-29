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
  styleClass: {
    type: String,
    default: 'style-blue', // Style par défaut
  },
})
consola.info(props.number)
</script>

<template>
  <Card data-testid="statistic-card" class="statistic-card">

    <!-- Titre de la card -->
    <template #title>{{ props.title }}</template>
    <template #content><p class="m-0">{{ props.number}}</p>
    </template>
  </Card>
  </template>


<style scoped>
.statistic-card {
  //background-color: #3CB371;
  padding: 10px; /* Ajoutez plus d'espace autour du contenu */
  background: linear-gradient(135deg, #4f86ed 0%, #61dafb 100%); /* Dégradé bleu */
  //margin: 4px;
  border-radius: 16px;
  height: 100%;
  min-height: 150px; /* Ajustez selon vos besoins */
  //min-width: 250px; /* Ajustez selon vos besoins */
  //display: flex;
  //flex-direction: column;
  //justify-content: center;
  //align-items: center;
}

.statistic-card:hover {
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  transform: translateY(-5px);
  transition: all 0.3s ease;
}


/* Style pour le titre */
/*:deep(.p-card-title)  {
  color: black;
  font-size: 1.5rem; !* Taille du texte plus grande *!
  font-weight: bold; !* Texte en gras *!
}*/

:deep(.p-card-title) {
  text-align: center;
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