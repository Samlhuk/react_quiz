import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import {
  calculatePercentage,
  getScoreMessage,
  saveBestScore,
} from "../utils/helpers";

const Result: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, totalQuestions } = location.state || {
    score: 0,
    totalQuestions: 0,
  };

  const percentage = calculatePercentage(score, totalQuestions);
  const message = getScoreMessage(percentage);

  useEffect(() => {
    if (totalQuestions === 0) {
      navigate("/");
      return;
    }
    saveBestScore(score);
  }, [score, totalQuestions, navigate]);

  const handleRestart = () => {
    navigate("/");
  };

  const getScoreColor = () => {
    if (percentage >= 80) return "text-green-600";
    if (percentage >= 60) return "text-blue-600";
    if (percentage >= 40) return "text-yellow-600";
    return "text-red-600";
  };

  const getBackgroundGradient = () => {
    if (percentage >= 80) return "from-green-50 to-green-100";
    if (percentage >= 60) return "from-blue-50 to-blue-100";
    if (percentage >= 40) return "from-yellow-50 to-yellow-100";
    return "from-red-50 to-red-100";
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Quiz Complete! 🎉
          </h1>
          <p className="text-gray-600">{message}</p>
        </div>

        {/* Score Display */}
        <div
          className={`bg-gradient-to-br ${getBackgroundGradient()} rounded-2xl p-8 mb-6`}
        >
          <div className="text-center">
            <p className="text-lg text-gray-700 font-medium mb-2">Your Score</p>
            <p className={`text-6xl font-bold ${getScoreColor()} mb-2`}>
              {score}/{totalQuestions}
            </p>
            <p className={`text-3xl font-semibold ${getScoreColor()}`}>
              {percentage}%
            </p>
          </div>
        </div>

        {/* Stats Breakdown */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-green-50 rounded-lg p-4 text-center">
            <p className="text-sm text-green-700 font-medium mb-1">Correct</p>
            <p className="text-2xl font-bold text-green-600">{score}</p>
          </div>
          <div className="bg-red-50 rounded-lg p-4 text-center">
            <p className="text-sm text-red-700 font-medium mb-1">Incorrect</p>
            <p className="text-2xl font-bold text-red-600">
              {totalQuestions - score}
            </p>
          </div>
        </div>

        {/* Performance Message */}
        <div className="bg-gray-50 rounded-lg p-4 mb-6 text-center">
          <p className="text-sm text-gray-600">
            {percentage === 100 &&
              "Absolutely perfect! You're a quiz master! 🏆"}
            {percentage >= 80 &&
              percentage < 100 &&
              "Outstanding performance! Keep it up! 🌟"}
            {percentage >= 60 &&
              percentage < 80 &&
              "Good job! You're on the right track! 👍"}
            {percentage >= 40 &&
              percentage < 60 &&
              "Not bad! A bit more practice will help! 📚"}
            {percentage < 40 && "Keep practicing! You'll improve with time! 💪"}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button onClick={handleRestart} variant="primary">
            Take Another Quiz 🚀
          </Button>
          <Button onClick={() => navigate("/")} variant="secondary">
            Back to Home
          </Button>
        </div>

        <div className="mt-6 text-center text-xs text-gray-400">
          <p>Your best score is saved automatically</p>
        </div>
      </div>
    </div>
  );
};

export default Result;
