import { ref, computed } from 'vue'

export function useQuiz(questions: any[]) {
  const currentIndex = ref(0)
  const selected = ref<number | null>(null)
  const score = ref(0)

  const currentQuestion = computed(() => questions[currentIndex.value])
  const isLast = computed(() => currentIndex.value === questions.length - 1)

  const selectOption = (index: number) => {
    selected.value = index
  }

  const next = () => {
    if (selected.value === currentQuestion.value.answer) {
      score.value++
    }

    selected.value = null
    if (!isLast.value) currentIndex.value++
  }

  return {
    currentIndex,
    currentQuestion,
    selected,
    score,
    isLast,
    selectOption,
    next
  }
}
