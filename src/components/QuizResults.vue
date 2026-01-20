<script setup lang="ts">
import { computed } from 'vue'
import { useQuizStore } from '../stores/quizStore'
import { Trophy, CheckCircle, XCircle, Home, RotateCcw } from 'lucide-vue-next'

const store = useQuizStore()

const emit = defineEmits<{
  restart: []
  home: []
}>()

const totalQuestions = computed(() => store.userAnswers.length)
const correctAnswers = computed(() => store.correctAnswers)
const incorrectAnswers = computed(() => totalQuestions.value - correctAnswers.value)

const performanceMessage = computed(() => {
  const score = store.score
  if (score >= 90) return { message: '¡Excelente trabajo!', color: 'text-green-600', emoji: '🌟' }
  if (score >= 70) return { message: '¡Muy bien!', color: 'text-blue-600', emoji: '👏' }
  if (score >= 50) return { message: 'Buen intento', color: 'text-yellow-600', emoji: '💪' }
  return { message: 'Sigue practicando', color: 'text-red-600', emoji: '📚' }
})

const totalTimeSpent = computed(() => {
  const total = store.userAnswers.reduce((acc, answer) => acc + answer.timeSpent, 0)
  const minutes = Math.floor(total / 60)
  const seconds = total % 60
  return `${minutes}m ${seconds}s`
})
</script>

<template>
  <div class="min-h-screen bg-linear-to-br from-indigo-50 to-purple-50 p-8">
    <div class="max-w-4xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-8">
        <div class="inline-flex items-center justify-center w-20 h-20 bg-indigo-600 rounded-full mb-4">
          <Trophy :size="40" class="text-white" />
        </div>
        <h1 :class="[performanceMessage.color, 'text-4xl font-bold mb-2']">
          {{ performanceMessage.message }} {{ performanceMessage.emoji }}
        </h1>
        <p class="text-xl text-gray-600 capitalize">
          {{ store.currentSubject }} - Nivel {{ store.currentLevel }}
        </p>
      </div>

      <!-- Score Card -->
      <div class="bg-white rounded-2xl shadow-lg p-8 mb-6">
        <div class="text-center mb-6">
          <div class="text-7xl font-bold text-indigo-600 mb-2">
            {{ store.score }}%
          </div>
          <p class="text-gray-600 text-lg">
            Puntuación final
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-green-50 rounded-xl p-6 text-center border-2 border-green-200">
            <CheckCircle :size="32" class="text-green-600 mx-auto mb-2" />
            <div class="text-3xl font-bold text-green-600 mb-1">
              {{ correctAnswers }}
            </div>
            <div class="text-gray-600">Correctas</div>
          </div>

          <div class="bg-red-50 rounded-xl p-6 text-center border-2 border-red-200">
            <XCircle :size="32" class="text-red-600 mx-auto mb-2" />
            <div class="text-3xl font-bold text-red-600 mb-1">
              {{ incorrectAnswers }}
            </div>
            <div class="text-gray-600">Incorrectas</div>
          </div>

          <div class="bg-blue-50 rounded-xl p-6 text-center border-2 border-blue-200">
            <div class="text-3xl font-bold text-blue-600 mb-1">
              {{ totalTimeSpent }}
            </div>
            <div class="text-gray-600">Tiempo total</div>
          </div>
        </div>
      </div>

      <!-- Detailed Results -->
      <div class="bg-white rounded-2xl shadow-lg p-8 mb-6">
        <h2 class="text-2xl font-bold text-gray-800 mb-6">
          Detalles de respuestas
        </h2>

        <div class="space-y-4 max-h-96 overflow-y-auto pr-2">
          <div
            v-for="(answer, index) in store.userAnswers"
            :key="index"
            class="flex items-center justify-between p-4 rounded-xl"
            :class="{
              'bg-green-50 border-2 border-green-200': answer.isCorrect,
              'bg-red-50 border-2 border-red-200': !answer.isCorrect
            }"
          >
            <div class="flex items-center gap-3">
              <component
                :is="answer.isCorrect ? CheckCircle : XCircle"
                :size="24"
                :class="answer.isCorrect ? 'text-green-600' : 'text-red-600'"
              />
              <div>
                <div class="font-medium text-gray-800">
                  Pregunta {{ index + 1 }}
                </div>
                <div class="text-sm text-gray-600">
                  {{ store.currentQuestions[answer.questionIndex]?.question.substring(0, 60) }}...
                </div>
              </div>
            </div>
            <div class="text-sm text-gray-600">
              {{ answer.timeSpent }}s
            </div>
          </div>
        </div>
      </div>

      <!-- Actions -->
      <div class="flex gap-4">
        <button
          @click="emit('home')"
          class="flex-1 px-6 py-4 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 transition-colors font-medium flex items-center justify-center gap-2"
        >
          <Home :size="20" />
          Volver al inicio
        </button>

        <button
          @click="emit('restart')"
          class="flex-1 px-6 py-4 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors font-medium flex items-center justify-center gap-2"
        >
          <RotateCcw :size="20" />
          Intentar de nuevo
        </button>
      </div>
    </div>
  </div>
</template>
