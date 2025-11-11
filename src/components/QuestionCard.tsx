import React from "react";

interface QuestionCardProps {
  question: string;
  options: string[];
  selectedAnswer: number | null;
  correctAnswer: number;
  isAnswered: boolean;
  onAnswer: (index: number) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  options,
  selectedAnswer,
  correctAnswer,
  isAnswered,
  onAnswer,
}) => {
  const getOptionStyles = (index: number) => {
    const baseStyles =
      "w-full p-4 rounded-lg text-left transition-all duration-200 border-2";

    if (!isAnswered) {
      return `${baseStyles} border-gray-300 hover:border-blue-500 hover:bg-blue-50 cursor-pointer`;
    }

    if (index === correctAnswer) {
      return `${baseStyles} border-green-500 bg-green-50 text-green-900`;
    }

    if (index === selectedAnswer && index !== correctAnswer) {
      return `${baseStyles} border-red-500 bg-red-50 text-red-900`;
    }

    return `${baseStyles} border-gray-300 bg-gray-50 opacity-60`;
  };

  const getOptionIcon = (index: number) => {
    if (!isAnswered) return null;

    if (index === correctAnswer) {
      return <span className="text-green-600 font-bold">✓</span>;
    }

    if (index === selectedAnswer && index !== correctAnswer) {
      return <span className="text-red-600 font-bold">✗</span>;
    }

    return null;
  };

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">{question}</h2>
      <div className="space-y-3">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => !isAnswered && onAnswer(index)}
            disabled={isAnswered}
            className={getOptionStyles(index)}
          >
            <div className="flex items-center justify-between">
              <span className="flex-1">{option}</span>
              {getOptionIcon(index)}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
