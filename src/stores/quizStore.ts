// src/stores/quizStore.ts
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export interface Question {
  question: string
  options: string[]
  answer: string
  hint: string
}

export interface QuizData {
  questions: {
    [key: string]: Question[]
  }
}

export interface UserAnswer {
  questionIndex: number
  selectedAnswer: string
  isCorrect: boolean
  timeSpent: number
}

export const useQuizStore = defineStore('quiz', () => {
  // State
  const subjects = ref<string[]>(['html', 'css', 'js', 'accesibilidad'])
  const currentSubject = ref<string | null>(null)
  const currentLevel = ref<number | null>(null)
  const currentQuestions = ref<Question[]>([])
  const currentQuestionIndex = ref(0)
  const userAnswers = ref<UserAnswer[]>([])
  const timeRemaining = ref(0)
  const isQuizActive = ref(false)
  const quizData = ref<{ [key: string]: QuizData }>({})

  // Computed
  const currentQuestion = computed(() => {
    if (currentQuestions.value.length === 0) return null
    return currentQuestions.value[currentQuestionIndex.value] || null
  })

  const progress = computed(() => {
    if (currentQuestions.value.length === 0) return 0
    return ((currentQuestionIndex.value + 1) / currentQuestions.value.length) * 100
  })

  const score = computed(() => {
    const correct = userAnswers.value.filter(a => a.isCorrect).length
    const total = userAnswers.value.length
    return total > 0 ? Math.round((correct / total) * 100) : 0
  })

  const correctAnswers = computed(() => {
    return userAnswers.value.filter(a => a.isCorrect).length
  })

  // Actions
  const loadQuizData = async (subject: string) => {
    try {
      const response = await fetch(`/data/${subject}.json`)
      const data = await response.json()
      quizData.value[subject] = data
    } catch (error) {
      console.error(`Error loading ${subject} quiz:`, error)
    }
  }

  const startQuiz = async (subject: string, level: number) => {
    currentSubject.value = subject
    currentLevel.value = level
    currentQuestionIndex.value = 0
    userAnswers.value = []

    if (!quizData.value[subject]) {
      await loadQuizData(subject)
    }

    const levelKey = `level_${level}`
    currentQuestions.value = quizData.value[subject]?.questions[levelKey] || []

    // 30 minutos para 20 preguntas
    timeRemaining.value = 30 * 60
    isQuizActive.value = true
  }

  const answerQuestion = (answer: string, timeSpent: number) => {
    if (!currentQuestion.value) return

    const isCorrect = answer === currentQuestion.value.answer
    userAnswers.value.push({
      questionIndex: currentQuestionIndex.value,
      selectedAnswer: answer,
      isCorrect,
      timeSpent
    })

    if (currentQuestionIndex.value < currentQuestions.value.length - 1) {
      currentQuestionIndex.value++
    } else {
      finishQuiz()
    }
  }

  const finishQuiz = () => {
    isQuizActive.value = false
  }

  const resetQuiz = () => {
    currentSubject.value = null
    currentLevel.value = null
    currentQuestions.value = []
    currentQuestionIndex.value = 0
    userAnswers.value = []
    timeRemaining.value = 0
    isQuizActive.value = false
  }

  const decrementTime = () => {
    if (timeRemaining.value > 0) {
      timeRemaining.value--
    } else if (isQuizActive.value) {
      finishQuiz()
    }
  }

  const getSubjectProgress = (subject: string) => {
    // Aquí podrías implementar lógica para calcular progreso guardado
    // Por ahora retorna valores simulados
    return {
      subject,
      level1: 0,
      level2: 0,
      level3: 0,
      overall: 0
    }
  }

  return {
    // State
    subjects,
    currentSubject,
    currentLevel,
    currentQuestions,
    currentQuestionIndex,
    userAnswers,
    timeRemaining,
    isQuizActive,

    // Computed
    currentQuestion,
    progress,
    score,
    correctAnswers,

    // Actions
    startQuiz,
    answerQuestion,
    finishQuiz,
    resetQuiz,
    decrementTime,
    getSubjectProgress
  }
})
