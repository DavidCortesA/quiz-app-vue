<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
// IMPORTS
import { useRoute, useRouter } from 'vue-router'
import { ref } from 'vue'
// COMPOSABLES
import { useQuiz } from '@/composables/useQuiz'
import { useTimer } from '@/composables/useTimer'

// COMPONENTS
import QuizQuestion from '@/components/quiz/QuizQuestion.vue'
import QuizOptions from '@/components/quiz/QuizOptions.vue'
import QuizNavigation from '@/components/quiz/QuizNavigation.vue'
import QuizTime from '@/components/quiz/QuizTime.vue'
import BaseButton from '@/components/ui/BaseButton.vue'

// DATA
import html from '@/data/html.json'
import css from '@/data/css.json'
import javascript from '@/data/javascript.json'
import accesibilidad from '@/data/accessibility.json'

const route = useRoute()

const asignature = route.params.asignature as string
const level = route.params.level as 'basic' | 'medium' | 'hard'

const showHint = ref(false)

const levelMap = {
  basic: 'level_1',
  medium: 'level_2',
  hard: 'level_3',
} as const

const dataMap: Record<string, any> = {
  HTML: html,
  CSS: css,
  JavaScript: javascript,
  Accesibilidad: accesibilidad,
}

const questions =
  dataMap[asignature].questions[levelMap[level]];


const quiz = useQuiz(questions)
const timer = useTimer(60)

const handleHint = () => {
  showHint.value = !showHint.value
}

const handleNextButton = () => {
  showHint.value = false;
  quiz.next();
}

const handleInicio = () => {
  useRouter().back();
}

timer.start()
</script>

<template>
  <section
    class="min-h-screen p-6 bg-linear-to-tl from-[#0F2027] via-[#203A43] to-[#2C5364] flex flex-col items-start justify-between gap-5"
  >
    <QuizNavigation
      :current="quiz.current.value"
      :total="quiz.total"
    />
    <div class="flex flex-row flex-nowrap items-center justify-between w-full">
      <QuizTime :time="timer.time.value" />
      <div class="text-white font-mono">{{ quiz.current.value + 1 }} / {{ quiz.total }}</div>
    </div>

    <div class="flex flex-row flex-wrap w-full mb-5">
      <QuizQuestion :question="quiz.question?.value?.question || ''" />

      <QuizOptions
        :options="quiz.question?.value?.options || []"
        :selected="quiz?.selected.value ?? ''"
        @select="quiz.select"
      />
    </div>

    <BaseButton @click="handleHint" class="w-full mt-5 text-neutral-500" variant="primary" v-if="!showHint.valueOf()">
      💡 Mostart Pista
    </BaseButton>


    <!-- HINT -->
    <BaseButton
      @click="handleHint"
      variant="ghost"
      v-else-if="quiz.question.value?.hint && showHint.valueOf()"
      class="mt-5 text-sm italic text-neutral-300 w-full text-center rounded-2xl border p-6"
    >
      💡 {{ quiz.question?.value.hint }}
    </BaseButton>

    <div class="flex justify-end mt-6 w-full gap-5">
      <BaseButton
        variant="ghost"
        @click="handleInicio"
        class="w-1/2"
      >
        Ir a Inicio
      </BaseButton>
      <BaseButton
        :disabled="quiz.selected === null"
        variant="primary"
        class="w-1/2"
        @click="handleNextButton"
      >
        {{ quiz.isLast.value ? 'Finalizar' : 'Siguiente' }}
      </BaseButton>
    </div>
  </section>
</template>
