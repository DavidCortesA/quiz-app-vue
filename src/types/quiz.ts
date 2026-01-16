export type QuizLevel = 'easy' | 'medium' | 'hard';

export interface QuizQuestion {
  id: number,
  question: string,
  options: string[],
  answer: string,
  hint: string,
  level: QuizLevel,
}
