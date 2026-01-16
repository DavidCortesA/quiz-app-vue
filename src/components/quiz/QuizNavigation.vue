<script setup lang="ts">
defineProps<{
  current: number
  total: number
}>()
</script>

<template>
  <div class="text-white mb-4">
    Pregunta {{ current + 1 }} / {{ total }}
  </div>
</template>
