<script setup lang="ts">
defineProps<{ text: string }>()
</script>

<template>
  <h2 class="text-xl text-white font-bold mb-6">
    {{ text }}
  </h2>
</template>
