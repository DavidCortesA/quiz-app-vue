<script setup lang="ts">
defineProps<{ question: string }>()
</script>

<template>
  <h2 class="text-white text-xl font-bold mb-4">
    {{ question }}
  </h2>
</template>
