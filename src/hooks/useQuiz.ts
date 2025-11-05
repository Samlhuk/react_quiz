import { useState, useEffect, useCallback, useRef } from "react";
import type { Question } from "../data/questions";

interface UseQuizProps {
  quizQuestions: Question[];
  timePerQuestion?: number;
}

export const useQuiz = ({
  quizQuestions,
  timePerQuestion = 30,
}: UseQuizProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [timeLeft, setTimeLeft] = useState(timePerQuestion);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const isAnsweredRef = useRef(isAnswered);
  const quizCompletedRef = useRef(quizCompleted);

  useEffect(() => {
    isAnsweredRef.current = isAnswered;
    quizCompletedRef.current = quizCompleted;
  }, [isAnswered, quizCompleted]);

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const totalQuestions = quizQuestions.length;

  const handleAnswer = useCallback(
    (answerIndex: number | null) => {
      if (isAnsweredRef.current) return;

      setIsAnswered(true);
      setSelectedAnswer(answerIndex);

      if (
        answerIndex !== null &&
        quizQuestions[currentQuestionIndex]?.correctAnswer === answerIndex
      ) {
        setScore((prev) => prev + 1);
      }
    },
    [quizQuestions, currentQuestionIndex]
  );

  // Timer effect - only restart when question changes
  useEffect(() => {
    setTimeLeft(timePerQuestion);

    const timer = setInterval(() => {
      if (isAnsweredRef.current || quizCompletedRef.current) {
        return;
      }

      setTimeLeft((prev) => {
        if (prev <= 1) {
          setIsAnswered(true);
          setSelectedAnswer(null);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentQuestionIndex, timePerQuestion]);

  const handleNext = () => {
    if (currentQuestionIndex + 1 < totalQuestions) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
      setTimeLeft(timePerQuestion);
    } else {
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setIsAnswered(false);
    setTimeLeft(timePerQuestion);
    setQuizCompleted(false);
  };

  return {
    currentQuestion,
    currentQuestionIndex,
    selectedAnswer,
    score,
    isAnswered,
    timeLeft,
    quizCompleted,
    totalQuestions,
    handleAnswer,
    handleNext,
    resetQuiz,
  };
};
