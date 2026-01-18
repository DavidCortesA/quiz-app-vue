import { ref, onUnmounted } from 'vue'

export function useTimer(seconds = 60) {
  const time = ref(seconds)
  let interval: number

  const start = () => {
    interval = window.setInterval(() => {
      if (time.value > 0) time.value--
    }, 1000)
  }

  const stop = () => clearInterval(interval)

  onUnmounted(stop)

  return { time, start, stop }
}
