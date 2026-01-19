<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  value: number
  max: number
}>()

const percentage = computed(() =>
  Math.min(100, Math.round((props.value / props.max) * 100))
)
</script>

<template>
  <div
    class="w-full h-3 bg-white/20 rounded-full overflow-hidden"
    role="progressbar"
    :aria-valuenow="value"
    :aria-valuemax="max"
  >
    <div
      class="h-full bg-white transition-all duration-300 w-9/12"
      :style="{ width: `${percentage}%` }"
    />
  </div>
</template>
