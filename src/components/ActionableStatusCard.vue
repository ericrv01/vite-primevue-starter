<template>
  <Card data-testid="actionable-status" class="automation-status-card"
        :class="{ 'bg-on': checked, 'bg-off': !checked }">

    <!-- Titre de la card -->
    <template #title>{{ title }}</template>
    <template #content>

    <!-- Contenu principal de la card -->
    <div class="switch-container">
      <span class="status-label">Arrêt</span>
      <InputSwitch
          v-model="checked"
          :disabled="!isActivable"
          class="switch custom-switch"
      />
      <span class="status-label">Marche</span>
    </div>
    </template>
  </Card>

</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const props = defineProps({
  isActivable: {
    type: Boolean,
    required: true,
  },
  status: {
    type: Boolean,
    required: true,
  },
  title: {
    type: String,
    required: true, // La prop `title` est obligatoire
  },
})

const checked = ref(props.status);
const emit = defineEmits(['status-changed']);


// Watch pour réagir aux changements de `status`
watch(() => props.status, (newValue) => {
  checked.value = newValue;
});

watch(checked, (newValue) => {
  emit('status-changed', newValue);
});

</script>

<style scoped>
.automation-status-card {
  transition: background-color 0.3s ease-in-out; /* Ajoute une transition fluide pour le changement de couleur */
  //margin: 4px;
  //padding: 4px;
  border-radius: 8px;
  height: 100%;
  min-height: 150px; /* Ajustez selon vos besoins */
  //min-width: 250px; /* Ajustez selon vos besoins */

}
/* Style pour le titre */
:deep(.p-card-title)  {
  color: black;
  font-size: 1.5rem; /* Taille du texte plus grande */
  font-weight: bold; /* Texte en gras */
}

/* Couleurs de fond dynamique */
.bg-on {
  background-color: #3CB371;
}

.bg-off {
  //background-color: #d3d3d3;
  //background-color: #A9A9A9;
  background-color: #B0BEC5;
}

/* Conteneur pour le switch et ses labels */
.switch-container {
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center; /* Centrer le contenu horizontalement */
}

/* Texte autour du switch */
.status-label {
  font-weight: bold;
}

/* Style pour le switch */
.switch {
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
}


</style>