<script setup lang="ts">
import { BookOpen, Code, Palette, Globe } from 'lucide-vue-next'

const emit = defineEmits<{
  selectSubject: [subject: string]
}>()

const subjects = [
  {
    id: 'html',
    name: 'HTML',
    icon: Code,
    color: 'bg-orange-500',
    description: 'Estructura y contenido web'
  },
  {
    id: 'css',
    name: 'CSS',
    icon: Palette,
    color: 'bg-blue-500',
    description: 'Estilos y diseño visual'
  },
  {
    id: 'js',
    name: 'JavaScript',
    icon: BookOpen,
    color: 'bg-yellow-500',
    description: 'Interactividad y lógica'
  },
  {
    id: 'accesibilidad',
    name: 'Accesibilidad Web',
    icon: Globe,
    color: 'bg-green-500',
    description: 'Inclusión y usabilidad'
  }
]
</script>

<template>
  <div class="min-h-screen bg-linear-to-br from-indigo-50 to-purple-50 p-8">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-12">
        <h1 class="text-5xl font-bold text-gray-800 mb-4">
          Quiz de Programación
        </h1>
        <p class="text-xl text-gray-600">
          Selecciona una asignatura para comenzar
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-6">
        <div
          v-for="subject in subjects"
          :key="subject.id"
          @click="emit('selectSubject', subject.id)"
          class="bg-white rounded-2xl shadow-lg p-8 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border-2 border-transparent hover:border-indigo-500"
        >
          <div class="flex items-start gap-4">
            <div :class="[subject.color, 'p-4 rounded-xl text-white']">
              <component :is="subject.icon" :size="32" />
            </div>
            <div class="flex-1">
              <h2 class="text-2xl font-bold text-gray-800 mb-2">
                {{ subject.name }}
              </h2>
              <p class="text-gray-600 mb-4">
                {{ subject.description }}
              </p>
              <div class="flex gap-2">
                <span class="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
                  3 Niveles
                </span>
                <span class="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
                  20 Preguntas c/u
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
