import React, { useEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { questions } from "../data/questions";
import { filterQuestions } from "../utils/helpers";
import { useQuiz } from "../hooks/useQuiz";
import QuestionCard from "../components/QuestionCard";
import Timer from "../components/Timer";
import ProgressBar from "../components/ProgressBar";
import Button from "../components/Button";

const Quiz: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { category, difficulty, numberOfQuestions } = location.state || {
    category: "all",
    difficulty: "all",
    numberOfQuestions: 10,
  };

  const quizQuestions = useMemo(
    () => filterQuestions(questions, category, difficulty, numberOfQuestions),
    [category, difficulty, numberOfQuestions]
  );

  const {
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
  } = useQuiz({ quizQuestions, timePerQuestion: 30 });

  useEffect(() => {
    if (quizQuestions.length === 0) {
      navigate("/");
    }
  }, [quizQuestions, navigate]);

  useEffect(() => {
    if (quizCompleted) {
      navigate("/result", {
        state: { score, totalQuestions },
      });
    }
  }, [quizCompleted, navigate, score, totalQuestions]);

  if (!currentQuestion) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-gray-600">No questions available</p>
          <Button onClick={() => navigate("/")} className="mt-4">
            Go Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-2xl">
        {/* Progress Bar */}
        <ProgressBar current={currentQuestionIndex} total={totalQuestions} />

        {/* Timer */}
        <div className="mb-6">
          <Timer timeLeft={timeLeft} totalTime={30} />
        </div>

        {/* Score Display */}
        <div className="flex justify-between items-center mb-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
          <div className="text-center">
            <p className="text-sm text-gray-600">Current Score</p>
            <p className="text-2xl font-bold text-blue-600">{score}</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600">Remaining</p>
            <p className="text-2xl font-bold text-gray-700">
              {totalQuestions - currentQuestionIndex - 1}
            </p>
          </div>
        </div>

        {/* Question Card */}
        <QuestionCard
          question={currentQuestion.question}
          options={currentQuestion.options}
          selectedAnswer={selectedAnswer}
          correctAnswer={currentQuestion.correctAnswer}
          isAnswered={isAnswered}
          onAnswer={handleAnswer}
        />

        {/* Next Button */}
        <div className="mt-6">
          <Button onClick={handleNext} disabled={!isAnswered} variant="primary">
            {currentQuestionIndex + 1 === totalQuestions
              ? "Finish Quiz"
              : "Next Question →"}
          </Button>
        </div>

        {/* Exit Button */}
        <div className="mt-4">
          <Button onClick={() => navigate("/")} variant="secondary">
            Exit Quiz
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
