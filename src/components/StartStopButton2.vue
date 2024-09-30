<script setup lang="ts">
import { ref } from 'vue';

// État du système
const isRunning = ref(false);

// Fonction pour basculer l'état du système
const toggleState = () => {
  isRunning.value = !isRunning.value;
};
</script>

<template>
  <div class="system-card">
    <!-- Indicateur d'état du système -->
    <div :class="['status-indicator', isRunning ? 'running' : 'stopped']">
      <span>{{ isRunning ? 'Automatisation active' : 'Automatisation arrêtée' }}</span>
    </div>

    <!-- Bouton de contrôle circulaire -->
    <Button
        :label="isRunning ? 'STOP' : 'START'"
        :class="['circular-button', isRunning ? 'stop' : 'start']"
        @click="toggleState"
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
  //background: linear-gradient(135deg, #4f86ed 0%, #61dafb 100%);
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
  animation: blink 2s infinite ease-in-out; /* Clignotement progressif */
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
