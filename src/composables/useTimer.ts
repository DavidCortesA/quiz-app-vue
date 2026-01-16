import { ref, onUnmounted } from 'vue'

export function useTimer(seconds = 20) {
  const timeLeft = ref(seconds)
  let interval: number

  const start = () => {
    interval = setInterval(() => {
      if (timeLeft.value > 0) timeLeft.value--
    }, 1000)
  }

  const reset = () => {
    timeLeft.value = seconds
  }

  onUnmounted(() => clearInterval(interval))

  return { timeLeft, start, reset }
}
