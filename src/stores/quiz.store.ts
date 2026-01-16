import type { QuizQuestion } from "@/types/quiz";
import { defineStore } from "pinia";

export const useQuizStore = defineStore('quiz', {
  state: () => ({
    questions: [] as QuizQuestion[],
    currentIndex: 0,
    score: 0,
    answers: [] as string[],
  }),

  getters: {
    currentQuestion: (state) => state.questions[state.currentIndex],
    progress: (state) =>
    (state.currentIndex / state.questions.length) * 100,
  },

  actions: {
    answerQuestion(option: string) {
      const correct = this.currentQuestion?.answer === option;
      if (correct) this.score++;
      this.answers.push(option);
      this.currentIndex++;
    },

    resetQuiz() {
      this.currentIndex = 0;
      this.score = 0;
      this.answers = [];
    },
  },
});
