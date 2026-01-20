<!-- src/App.vue -->
<script setup lang="ts">
import { ref, computed } from 'vue'
import { useQuizStore } from './stores/quizStore'
import SubjectSelection from './components/SubjectSelection.vue'
import LevelSelection from './components/LevelSelection.vue'
import QuizQuestion from './components/QuizQuestion.vue'
import QuizResults from './components/QuizResults.vue'

type ViewState = 'subject' | 'level' | 'quiz' | 'results'

const store = useQuizStore()
const currentView = ref<ViewState>('subject')
const selectedSubject = ref<string | null>(null)

const showSubjectSelection = () => {
  currentView.value = 'subject'
  selectedSubject.value = null
  store.resetQuiz()
}

const handleSelectSubject = (subject: string) => {
  selectedSubject.value = subject
  currentView.value = 'level'
}

const handleSelectLevel = async (level: number) => {
  if (!selectedSubject.value) return

  await store.startQuiz(selectedSubject.value, level)
  currentView.value = 'quiz'
}

const handleBackToSubjects = () => {
  currentView.value = 'subject'
  selectedSubject.value = null
}

const handleRestart = async () => {
  if (!selectedSubject.value || !store.currentLevel) return

  await store.startQuiz(selectedSubject.value, store.currentLevel)
  currentView.value = 'quiz'
}

const showResults = computed(() => !store.isQuizActive && store.userAnswers.length > 0)
</script>

<template>
  <div>
    <SubjectSelection
      v-if="currentView === 'subject'"
      @select-subject="handleSelectSubject"
    />

    <LevelSelection
      v-else-if="currentView === 'level' && selectedSubject"
      :subject="selectedSubject"
      @select-level="handleSelectLevel"
      @back="handleBackToSubjects"
    />

    <QuizQuestion
      v-else-if="currentView === 'quiz' && store.isQuizActive"
    />

    <QuizResults
      v-else-if="showResults"
      @restart="handleRestart"
      @home="showSubjectSelection"
    />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
}
</style>
