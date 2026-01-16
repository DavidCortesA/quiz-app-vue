<script setup lang="ts">
defineProps<{
  name: string
  description: string
  active?: boolean
}>()
const emit = defineEmits<{
  (e: 'select', value: string): void
}>()
</script>

<template>
  <button
    @click="emit('select', name)"
    class="rounded-md p-6 border flex flex-col items-center justify-center gap-2 text-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white h-42 w-42"
    :class="[
      active
        ? 'border-white bg-white/20'
        : 'border-neutral-400 hover:bg-white/10'
    ]"
  >
    <h6 class="font-bold">{{ name }}</h6>
    <p class="italic text-neutral-200">{{ description }}</p>
  </button>
</template>
