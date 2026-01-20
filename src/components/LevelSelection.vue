<script setup lang="ts">
import { ArrowLeft, Trophy, Star } from 'lucide-vue-next'

interface Props {
  subject: string
}

defineProps<Props>()

const emit = defineEmits<{
  selectLevel: [level: number]
  back: []
}>()

const levels = [
  {
    level: 1,
    name: 'Nivel Básico',
    difficulty: 'Principiante',
    color: 'bg-green-500',
    icon: Star,
    description: 'Fundamentos y conceptos básicos'
  },
  {
    level: 2,
    name: 'Nivel Intermedio',
    difficulty: 'Intermedio',
    color: 'bg-yellow-500',
    icon: Trophy,
    description: 'Conceptos avanzados y mejores prácticas'
  },
  {
    level: 3,
    name: 'Nivel Avanzado',
    difficulty: 'Avanzado',
    color: 'bg-red-500',
    icon: Trophy,
    description: 'Dominio completo y casos complejos'
  }
]
</script>

<template>
  <div class="min-h-screen bg-linear-to-br from-indigo-50 to-purple-50 p-8">
    <div class="max-w-4xl mx-auto">
      <button
        @click="emit('back')"
        class="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 mb-8 transition-colors"
      >
        <ArrowLeft :size="20" />
        Volver a asignaturas
      </button>

      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-800 mb-2 capitalize">
          {{ subject }}
        </h1>
        <p class="text-xl text-gray-600">
          Selecciona tu nivel
        </p>
      </div>

      <div class="space-y-6">
        <div
          v-for="level in levels"
          :key="level.level"
          @click="emit('selectLevel', level.level)"
          class="bg-white rounded-2xl shadow-lg p-8 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border-2 border-transparent hover:border-indigo-500"
        >
          <div class="flex items-center gap-6">
            <div :class="[level.color, 'p-6 rounded-xl text-white']">
              <component :is="level.icon" :size="40" />
            </div>
            <div class="flex-1">
              <div class="flex items-center gap-3 mb-2">
                <h2 class="text-2xl font-bold text-gray-800">
                  {{ level.name }}
                </h2>
                <span class="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
                  {{ level.difficulty }}
                </span>
              </div>
              <p class="text-gray-600 mb-3">
                {{ level.description }}
              </p>
              <div class="flex gap-2">
                <span class="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
                  20 Preguntas
                </span>
                <span class="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
                  30 minutos
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
