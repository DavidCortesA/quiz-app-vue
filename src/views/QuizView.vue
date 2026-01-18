<script setup lang="ts">
import { useRoute } from 'vue-router'

import { useQuiz } from '@/composables/useQuiz'
import { useTimer } from '@/composables/useTimer'

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

const levelMap = {
  basic: 'level_1',
  medium: 'level_2',
  hard: 'level_3',
} as const

const dataMap: Record<string, any> = {
  HTML: html,
  CSS: css,
  JAVASCRIPT: javascript,
  ACCESIBILIDAD: accesibilidad,
}

const questions =
  dataMap[asignature].questions[levelMap[level]];


const quiz = useQuiz(questions)
const timer = useTimer(60)
console.log(quiz.question)

timer.start()
</script>

<template>
  <section
    class="min-h-screen p-6 bg-gradient-to-tl from-[#0F2027] via-[#203A43] to-[#2C5364]"
  >
    <QuizNavigation
      :current="quiz.current.value"
      :total="quiz.total"
    />

    <QuizTime :time="timer.time.value" />

    <QuizQuestion :question="quiz?.question?.value?.question" />

    <QuizOptions
      :options="quiz.question?.value?.options"
      :selected="quiz.selected"
      @select="quiz.select"
    />

    <!-- HINT -->
    <p
      v-if="quiz.question.value?.hint"
      class="mt-4 text-sm italic text-neutral-300"
    >
      💡 {{ quiz.question?.value.hint }}
    </p>

    <div class="flex justify-end mt-6">
      <BaseButton
        :disabled="quiz.selected === null"
        @click="quiz.next"
      >
        {{ quiz.isLast ? 'Finalizar' : 'Siguiente' }}
      </BaseButton>
    </div>
  </section>
</template>
