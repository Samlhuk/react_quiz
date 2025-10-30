import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { categories, difficulties } from "../data/questions";
import { getBestScore } from "../utils/helpers";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("all");
  const [difficulty, setDifficulty] = useState("all");
  const [numberOfQuestions, setNumberOfQuestions] = useState(10);

  const bestScore = getBestScore();

  const handleStart = () => {
    navigate("/quiz", {
      state: { category, difficulty, numberOfQuestions },
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            🎯 Quiz Master
          </h1>
          <p className="text-gray-600">Test your knowledge and have fun!</p>
        </div>

        {bestScore > 0 && (
          <div className="bg-gradient-to-r from-yellow-100 to-yellow-200 rounded-lg p-4 mb-6 text-center">
            <p className="text-sm text-yellow-800 font-medium">Best Score</p>
            <p className="text-3xl font-bold text-yellow-900">{bestScore}</p>
          </div>
        )}

        <div className="space-y-4 mb-6">
          {/* Category Selection */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
            >
              {categories.map((cat) => (
                <option key={cat.value} value={cat.value}>
                  {cat.label}
                </option>
              ))}
            </select>
          </div>

          {/* Difficulty Selection */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Difficulty
            </label>
            <select
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
            >
              {difficulties.map((diff) => (
                <option key={diff.value} value={diff.value}>
                  {diff.label}
                </option>
              ))}
            </select>
          </div>

          {/* Number of Questions */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Number of Questions: {numberOfQuestions}
            </label>
            <input
              type="range"
              min="5"
              max="20"
              step="5"
              value={numberOfQuestions}
              onChange={(e) => setNumberOfQuestions(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>5</span>
              <span>10</span>
              <span>15</span>
              <span>20</span>
            </div>
          </div>
        </div>

        <Button onClick={handleStart} variant="primary">
          Start Quiz 🚀
        </Button>

        <div className="mt-6 text-center text-sm text-gray-500">
          <p>Built with React, Vite & Tailwind CSS</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
