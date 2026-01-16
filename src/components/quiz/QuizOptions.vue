<script setup lang="ts">
defineProps<{
  options: string[]
  selected: number | null
}>()

const emit = defineEmits<{
  (e: 'select', index: number): void
}>()
</script>

<template>
  <div class="grid gap-4">
    <button
      v-for="(opt, i) in options"
      :key="i"
      @click="emit('select', i)"
      class="p-4 rounded-xl border text-white"
      :class="{
        'bg-white text-black': selected === i
      }"
    >
      {{ opt }}
    </button>
  </div>
</template>
