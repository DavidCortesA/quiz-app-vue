<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
defineProps<{
  name: string
  description: string
  icon: any
  color: string
  bg: string
  active?: boolean
}>()

defineEmits<{
  (e: 'select', value: string): void
}>()
</script>

<template>
  <button
    @click="$emit('select', name)"
    class="w-48 h-48 rounded-2xl border p-5 flex flex-col items-center justify-center gap-3 transition focus:outline-none"
    :class="active
      ? 'border-white bg-white/10'
      : 'border-white/20 hover:border-white/50'"
  >
    <!-- ICON -->
    <div
      class="w-12 h-12 rounded-xl flex items-center justify-center"
      :style="{ backgroundColor: bg }"
    >
      <component
        :is="icon"
        :size="26"
        :color="color"
        stroke-width="2.2"
      />
    </div>

    <!-- TEXT -->
    <div class="text-center">
      <h6 class="font-bold text-white">{{ name }}</h6>
      <p class="italic text-neutral-300 text-sm">{{ description }}</p>
    </div>
  </button>
</template>
