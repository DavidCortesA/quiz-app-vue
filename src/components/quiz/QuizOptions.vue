<script setup lang="ts">
defineProps<{
  options: string[]
  selected: string | null
}>()

defineEmits<{
  (e: 'select', option: string): void
}>()
</script>

<template>
  <div class="grid gap-4 mt-6">
    <BaseCard
      v-for="opt in options"
      :key="opt"
      :active="selected === opt"
      @click="$emit('select', opt)"
    >
      {{ opt }}
    </BaseCard>
  </div>
</template>
