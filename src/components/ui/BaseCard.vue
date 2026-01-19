<script setup lang="ts">
defineProps<{
  active?: boolean
}>()
</script>

<template>
  <div
    class="rounded-2xl border p-6 transition cursor-pointer select-none"
    :class="[
      active
        ? 'border-white bg-white/10 text-neutral-100'
        : 'border-white/20 hover:border-white/50 hover:bg-white/5 text-white'
    ]"
  >
    <slot />
  </div>
</template>
