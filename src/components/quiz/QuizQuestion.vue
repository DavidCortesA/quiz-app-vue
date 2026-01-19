<script setup lang="ts">
defineProps<{ question: string }>()
</script>

<template>
  <h2 class="text-white text-6xl font-bold mb-4 w-full md:w-1/2 mt-5 mx-auto pr-6">
    {{ question }}
  </h2>
</template>
