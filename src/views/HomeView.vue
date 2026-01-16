<script setup lang="ts">
  import { ref } from 'vue'
  import { useRouter } from 'vue-router';
  import CardItem from '@/components/home/CardItem.vue';

  const router = useRouter();
  const asignature = ref<string | null>(null)
  const level = ref<string | null>(null)

  const initialMenu = [
    { id: 1, name: 'HTML', description: '3 Niveles' },
    { id: 2, name: 'CSS', description: '3 Niveles' },
    { id: 3, name: 'JavaScript', description: '3 Niveles' },
    { id: 4, name: 'Accesibilidad', description: '3 Niveles' },
  ]

  const secondaryMenu = [
    { id: 1, name: 'Nivel 1', value: 'basic', description: '20 Preguntas' },
    { id: 2, name: 'Nivel 2', value: 'medium', description: '20 Preguntas' },
    { id: 3, name: 'Nivel 3', value: 'hard', description: '20 Preguntas' },
  ]

  const handleAsignature = (name: string) => {
    asignature.value = name;
  }

  const deleteAsignature = () => {
    asignature.value = null
    level.value = null
  }

  const handleLevel = (levelValue: string) => {
    level.value = levelValue;
  }

  const starQuiz = () => {
    if (!asignature.value || !level.value) return

    router.push({
      name: 'quiz',
      params: {
        asignature: asignature.value,
        level: level.value
      }
    })
  }
</script>

<template>
  <section class="w-full h-screen flex flex-col justify-center items-center bg-linear-to-tl from-[#0F2027] from-10% via-[#203A43] via-30% to-[#2C5364] to-90%">
    <header class="container flex flex-col justify-center">
      <h1 class="text-2xl font-bold text-white text-center">Quiz FrontEnd</h1>
      <p class="text-center text-neutral-300 text-lg mt-3 font-semibold italic">Pon a prueba tus conocimientos de HTML, CSS, JavaScript y Accesibilidad</p>
    </header>
    <div class="flex gap-4 mt-8 mb-8 h-80 items-center" v-if="!asignature">
      <CardItem
        v-for="item in initialMenu"
        :key="item.id"
        :name="item.name"
        :description="item.description"
        :active="asignature === item.name"
        @select="handleAsignature"
      />
    </div>
    <div class="flex gap-4 mt-7 h-80 items-center" v-else>
      <CardItem
        v-for="item in secondaryMenu"
        :key="item.id"
        :name="item.name"
        :description="item.description"
        :active="level === item.value"
        @select="() => handleLevel(item.value)"
      />
    </div>
    <div class="flex gap-5 flex-row flex-wrap mt-5">
      <button v-if="asignature" class="px-6 py-3 rounded-xl bg-orange-400 border border-neutral-200 text-white font-semibold disabled:opacity-50 hover:accent-amber" :disabled="!asignature" @click="deleteAsignature">
        Cambiar Asignatura
      </button>
      <button v-if="level && asignature" class="px-6 py-3 rounded-xl border border-neutral-200 text-white font-semibold disabled:opacity-50 hover:accent-amber" :disabled="!asignature || !level" @click="starQuiz">
        Comenzar Quiz
      </button>
    </div>
  </section>
</template>
