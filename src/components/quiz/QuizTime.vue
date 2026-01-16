<script setup lang="ts">
defineProps<{ time: number }>()
</script>

<template>
  <div class="text-white font-mono">
    ⏱️ {{ time }}s
  </div>
</template>
