<script setup lang="ts">
import { useRoute } from 'vue-router';
const route = useRoute();

console.log(route);
</script>

<template>
  <section class="home">
    <h1>Quiz FrontEnd</h1>
    <p>Pon a prueba tus conocimientos de HTML, CSS, JavaScript y Accesibilidad</p>
  </section>
</template>

<style scoped>
  .home {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
</style>
