import type { Question } from "../data/questions";

export const shuffleArray = <T>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

export const filterQuestions = (
  questions: Question[],
  category: string,
  difficulty: string,
  numberOfQuestions: number
): Question[] => {
  let filtered = questions;

  if (category !== "all") {
    filtered = filtered.filter((q) => q.category === category);
  }

  if (difficulty !== "all") {
    filtered = filtered.filter((q) => q.difficulty === difficulty);
  }

  const shuffled = shuffleArray(filtered);
  return shuffled.slice(0, Math.min(numberOfQuestions, shuffled.length));
};

export const calculatePercentage = (score: number, total: number): number => {
  if (total === 0) return 0;
  return Math.round((score / total) * 100);
};

export const getScoreMessage = (percentage: number): string => {
  if (percentage === 100) return "Perfect! 🎉";
  if (percentage >= 80) return "Excellent! 🌟";
  if (percentage >= 60) return "Good job! 👍";
  if (percentage >= 40) return "Not bad! 📚";
  return "Keep practicing! 💪";
};

export const formatTime = (seconds: number): string => {
  return `${seconds}s`;
};

// LocalStorage helpers
export const STORAGE_KEY = "quiz-app-best-score";

export const getBestScore = (): number => {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? parseInt(stored, 10) : 0;
};

export const saveBestScore = (score: number): void => {
  const currentBest = getBestScore();
  if (score > currentBest) {
    localStorage.setItem(STORAGE_KEY, score.toString());
  }
};
