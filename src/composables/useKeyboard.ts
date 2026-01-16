import { onMounted, onUnmounted } from 'vue'

export function useKeyboard(callback: (key: string) => void) {
  const handler = (e: KeyboardEvent) => callback(e.key)

  onMounted(() => window.addEventListener('keydown', handler))
  onUnmounted(() => window.removeEventListener('keydown', handler))
}
