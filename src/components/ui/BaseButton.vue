<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  variant?: 'primary' | 'secondary' | 'ghost'
  disabled?: boolean
  type?: 'button' | 'submit'
}>()

const classes = computed(() => {
  const base =
    'inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white disabled:opacity-50 disabled:pointer-events-none'

  const variants = {
    primary: 'bg-white text-black hover:bg-neutral-200',
    secondary: 'bg-neutral-800 text-white hover:bg-neutral-700',
    ghost: 'bg-transparent border border-white text-white hover:bg-white/10',
  }

  return `${base} ${variants[props.variant ?? 'primary']}`
})
</script>

<template>
  <button
    :type="type ?? 'button'"
    :disabled="disabled"
    :class="classes"
  >
    <slot />
  </button>
</template>
