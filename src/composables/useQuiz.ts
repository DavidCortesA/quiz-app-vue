import { ref, computed } from 'vue'

export interface Question {
  question: string
  options: string[]
  answer: string
  hint?: string
}

export function useQuiz(questions: Question[]) {
  const current = ref(0)
  const selected = ref<string | null>(null)
  const score = ref(0)

  const question = computed(() => questions[current.value])
  const total = questions.length
  const isLast = computed(() => current.value === total - 1)

  const select = (option: string) => {
    selected.value = option
  }

  const next = () => {
    if (selected.value === question?.value?.answer) {
      score.value++
    }

    selected.value = null
    current.value++
  }

  return {
    current,
    question,
    total,
    selected,
    score,
    isLast,
    select,
    next,
  }
}
