<!--
<script setup lang="ts">
import { ref } from 'vue';

// État du bouton (démarré/arrêté)
const isRunning = ref(false);

// Fonction pour basculer l'état du mécanisme
const toggleState = () => {
  isRunning.value = !isRunning.value;
};
</script>

<template>
  <div class="status-text">
    {{ isRunning ? 'Système en marche' : 'Système arrêté' }}
  </div>

  &lt;!&ndash; Bouton rond personnalisé &ndash;&gt;
  <Button
      :label="isRunning ? 'STOP' : 'START'"
      :class="['circular-button', isRunning ? 'stop' : 'start']"
      @click="toggleState"
  />
</template>

<style scoped>
/* Bouton circulaire de base */
.circular-button {
  border-radius: 50%; /* Rendre le bouton circulaire */
  width: 120px; /* Largeur du bouton */
  height: 120px; /* Hauteur du bouton */
  font-size: 1.5rem; /* Taille du texte */
  font-weight: bold; /* Texte en gras */
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  transition: all 0.3s ease; /* Transition fluide */
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  border: none;
}



/* Styles pour le bouton "Start" */
.start {
  background: radial-gradient(circle, #4caf50 30%, #388e3c 90%); /* Dégradé vert */
  color: #ffffff;
}

/* Styles pour le bouton "Stop" */
.stop {
  background: radial-gradient(circle, #f44336 30%, #d32f2f 90%); /* Dégradé rouge */
  color: #ffffff;
}

.status-text {
  font-size: 1.2rem;
  font-weight: bold;
  color: #ffffff; /* Texte blanc par défaut */
  margin-top: 10px;
}
</style>
-->
<script setup lang="ts">
import { ref } from 'vue';

// État du mécanisme (en marche ou arrêté)
const isRunning = ref(false);

// Fonction pour basculer l'état du mécanisme
const toggleState = () => {
  isRunning.value = !isRunning.value;
};
</script>

<template>
  <div class="control-card">
    <!-- Indicateur de l'état du système -->
    <div
        class="system-status"
        :class="isRunning ? 'active' : 'inactive'"
    >
      {{ isRunning ? 'Système en marche' : 'Système arrêté' }}
    </div>

    <!-- Bouton circulaire pour démarrer/arrêter le mécanisme -->
    <Button
        :label="isRunning ? 'STOP' : 'START'"
        :class="['circular-button', isRunning ? 'stop' : 'start']"
        @click="toggleState"
    />
  </div>
</template>

<style scoped>
/* Conteneur principal */
.control-card {
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

/* Indicateur de l'état du système */
.system-status {
  padding: 10px 20px;
  border-radius: 16px;
  font-size: 1.2rem;
  font-weight: bold;
  color: #ffffff;
  text-align: center;
  transition: all 0.3s ease;
}

/* Couleur verte lorsque le système est actif */
.system-status.active {
  background: linear-gradient(135deg, #10B981 0%, #34D399 100%);
}

/* Couleur orange avec clignotement lorsque le système est inactif */
.system-status.inactive {
  background: linear-gradient(135deg, #F97316 0%, #FB923C 100%);
  animation: blink 2s infinite ease-in-out;
}

/* Animation pour clignoter */
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

/* Bouton circulaire de base */
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
}

/* Styles pour le bouton "Start" */
.start {
  background: radial-gradient(circle, #4caf50 30%, #388e3c 90%);
  color: #ffffff;
}

/* Styles pour le bouton "Stop" */
.stop {
  background: radial-gradient(circle, #f44336 30%, #d32f2f 90%);
  color: #ffffff;
}
</style>
