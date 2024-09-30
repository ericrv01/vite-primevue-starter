
<script setup lang="ts">
import { ref, defineProps, watch, defineEmits } from 'vue';

// Définir les propriétés
const props = defineProps({
  isRunning: {
    type: Boolean,
    required: true
  },
  isAllowed: {
    type: Boolean,
    required: true
  }
});

// Définir les événements
const emit = defineEmits(['status-changed']);

// État local pour isRunning
const localIsRunning = ref(props.isRunning);

// Mettre à jour l'état local lorsque la prop change
watch(() => props.isRunning, (newVal) => {
  localIsRunning.value = newVal;
});

// Fonction pour basculer l'état du système
const toggleState = () => {
  if (props.isAllowed) {
    localIsRunning.value = !localIsRunning.value;
    emit('status-changed', localIsRunning.value);
  }
};
</script>

<template>
  <div class="system-card">
    <!-- Indicateur d'état du système -->
    <div :class="['status-indicator', localIsRunning ? 'running' : 'stopped']">
      <span>{{ localIsRunning ? 'Automatisation active' : 'Automatisation arrêtée' }}</span>
    </div>

    <!-- Bouton de contrôle circulaire -->
    <Button
        :label="localIsRunning ? 'STOP' : 'START'"
        :class="['circular-button', localIsRunning ? 'stop' : 'start']"
        @click="toggleState"
        :disabled="!props.isAllowed"
    />
  </div>
</template>

<style scoped>
/* Conteneur principal de la carte */
.system-card {
  padding: 20px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(135deg, #e0e0e0 0%, #bdbdbd 100%);
  transition: all 0.3s ease;
}

/* Indicateur d'état du système */
.status-indicator {
  width: 80%;
  padding: 10px;
  border-radius: 12px;
  font-size: 1.6rem;
  font-weight: bold;
  text-align: center;
  color: #ffffff;
  margin-bottom: 20px;
  transition: background-color 0.5s ease, box-shadow 0.3s ease;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); /* Légère ombre */
}

/* Styles pour l'état en marche */
.running {
  background-color: #16a085; /* Vert légèrement plus vif */
}

/* Styles pour l'état arrêté */
.stopped {
  background-color: #f39c12; /* Orange plus vif */
  animation: blink 1s infinite; /* Clignotement progressif */
}

/* Animation de clignotement pour l'état arrêté */
@keyframes blink {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
}

/* Bouton circulaire de contrôle */
.circular-button {
  border-radius: 50%;
  width: 120px;
  height: 120px;
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  transition: all 0.3s ease;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  border: none;
  margin-top: 20px; /* Ajuster l'espacement vertical */
}

/* Styles pour le bouton "START" */
.start {
  background: radial-gradient(circle, #4caf50 30%, #388e3c 90%);
  color: #ffffff;
}

/* Styles pour le bouton "STOP" */
.stop {
  background: radial-gradient(circle, #f44336 30%, #d32f2f 90%);
  color: #ffffff;
}
</style>