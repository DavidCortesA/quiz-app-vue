<script setup lang="ts">
defineProps<{ current: number; total: number }>()
</script>

<template>
  <BaseProgressBar :value="current + 1" :max="total" />
</template>
