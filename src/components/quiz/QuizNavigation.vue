<script setup lang="ts">
import ProgressBar from '@/components/ui/ProgressBar.vue';

defineProps<{ current: number; total: number }>()
</script>

<template>
  <ProgressBar :value="current + 1" :max="total" />
</template>
