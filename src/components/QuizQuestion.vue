<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useQuizStore } from '../stores/quizStore'
import { Clock, Lightbulb, X } from 'lucide-vue-next'

const store = useQuizStore()
const selectedAnswer = ref<string | null>(null)
const showHint = ref(false)
const questionStartTime = ref(Date.now())
let timerInterval: number | null = null

const formattedTime = computed(() => {
  const minutes = Math.floor(store.timeRemaining / 60)
  const seconds = store.timeRemaining % 60
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
})

const timeColor = computed(() => {
  if (store.timeRemaining > 600) return 'text-green-600'
  if (store.timeRemaining > 300) return 'text-yellow-600'
  return 'text-red-600'
})

const handleAnswer = () => {
  if (!selectedAnswer.value) return

  const timeSpent = Math.floor((Date.now() - questionStartTime.value) / 1000)
  store.answerQuestion(selectedAnswer.value, timeSpent)

  selectedAnswer.value = null
  showHint.value = false
  questionStartTime.value = Date.now()
}

const handleFinish = () => {
  if (confirm('¿Estás seguro de que quieres finalizar el quiz?')) {
    store.finishQuiz()
  }
}

onMounted(() => {
  timerInterval = window.setInterval(() => {
    store.decrementTime()
  }, 1000)
})

onUnmounted(() => {
  if (timerInterval !== null) {
    clearInterval(timerInterval)
  }
})
</script>

<template>
  <div class="min-h-screen bg-linear-to-br from-indigo-50 to-purple-50 p-4 md:p-8">
    <div class="max-w-4xl mx-auto">
      <!-- Header -->
      <div class="bg-white rounded-2xl shadow-lg p-6 mb-6">
        <div class="flex justify-between items-center mb-4">
          <div class="flex items-center gap-4">
            <span class="text-lg font-semibold text-gray-700 capitalize">
              {{ store.currentSubject }} - Nivel {{ store.currentLevel }}
            </span>
            <span class="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
              Pregunta {{ store.currentQuestionIndex + 1 }} / {{ store.currentQuestions.length }}
            </span>
          </div>
          <div class="flex items-center gap-2">
            <Clock :size="20" :class="timeColor" />
            <span :class="[timeColor, 'text-2xl font-bold']">
              {{ formattedTime }}
            </span>
          </div>
        </div>

        <!-- Progress bar -->
        <div class="w-full bg-gray-200 rounded-full h-3">
          <div
            class="bg-indigo-600 h-3 rounded-full transition-all duration-300"
            :style="{ width: `${store.progress}%` }"
          ></div>
        </div>
      </div>

      <!-- Question -->
      <div v-if="store.currentQuestion" class="bg-white rounded-2xl shadow-lg p-8 mb-6">
        <h2 class="text-2xl font-bold text-gray-800 mb-6">
          {{ store.currentQuestion.question }}
        </h2>

        <!-- Hint button -->
        <button
          @click="showHint = !showHint"
          class="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 mb-4 transition-colors"
        >
          <Lightbulb :size="20" />
          {{ showHint ? 'Ocultar pista' : 'Ver pista' }}
        </button>

        <!-- Hint -->
        <div
          v-if="showHint"
          class="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6 rounded"
        >
          <p class="text-yellow-800">
            💡 {{ store.currentQuestion.hint }}
          </p>
        </div>

        <!-- Options -->
        <div class="space-y-3">
          <label
            v-for="(option, index) in store.currentQuestion.options"
            :key="index"
            class="flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all hover:border-indigo-500 hover:bg-indigo-50"
            :class="{
              'border-indigo-500 bg-indigo-50': selectedAnswer === option,
              'border-gray-200': selectedAnswer !== option
            }"
          >
            <input
              type="radio"
              :value="option"
              v-model="selectedAnswer"
              class="w-5 h-5 text-indigo-600 focus:ring-indigo-500"
            />
            <span class="ml-3 text-gray-800 text-lg">
              {{ option }}
            </span>
          </label>
        </div>

        <!-- Actions -->
        <div class="flex justify-between mt-8">
          <button
            @click="handleFinish"
            class="px-6 py-3 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 transition-colors font-medium flex items-center gap-2"
          >
            <X :size="20" />
            Finalizar Quiz
          </button>

          <button
            @click="handleAnswer"
            :disabled="!selectedAnswer"
            class="px-8 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {{ store.currentQuestionIndex === store.currentQuestions.length - 1 ? 'Finalizar' : 'Siguiente' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
