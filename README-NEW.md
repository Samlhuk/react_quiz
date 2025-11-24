# 🎯 Quiz Master App

A modern, responsive quiz application built with **React**, **Vite**, and **Tailwind CSS**. Features dynamic questions, score tracking, timer functionality, and client-side routing.

> **Portfolio Highlight**: "Built a responsive quiz SPA using React, Vite, and Tailwind CSS with dynamic questions, score tracking, and client-side routing."

![Quiz App](https://img.shields.io/badge/React-19.2.0-blue) ![Vite](https://img.shields.io/badge/Vite-5.4.11-purple) ![Tailwind](https://img.shields.io/badge/Tailwind-4.1.18-cyan)

## ✨ Features

### Core Functionality

- **🏠 Home Screen**

  - Category selection (Web Development, Programming, All)
  - Difficulty levels (Easy, Medium, Hard)
  - Custom number of questions (5-20)
  - Best score display from localStorage

- **📝 Quiz Screen**

  - Question counter with progress bar
  - 30-second timer per question
  - Color-coded time remaining indicator
  - Multiple-choice answer options
  - Answer validation with visual feedback
  - Real-time score tracking

- **✅ Answer Logic**

  - Highlight selected answer
  - Show correct answer after selection
  - Lock answers once submitted
  - Automatic progression on timeout

- **🎊 Results Screen**

  - Final score and percentage
  - Performance-based message
  - Correct/Incorrect breakdown
  - Automatic best score saving
  - Restart or home navigation

- **💾 Data Persistence**
  - Best score saved to localStorage
  - Persists across sessions

## 🛠️ Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Utility-first styling
- **React Router** - Client-side routing
- **LocalStorage API** - Data persistence

## 📁 Project Structure

```
quiz-app/
├── src/
│   ├── components/
│   │   ├── Button.tsx           # Reusable button component
│   │   ├── QuestionCard.tsx     # Question display with options
│   │   ├── Timer.tsx            # Countdown timer with progress
│   │   └── ProgressBar.tsx      # Quiz progress indicator
│   │
│   ├── pages/
│   │   ├── Home.tsx             # Landing page with settings
│   │   ├── Quiz.tsx             # Main quiz interface
│   │   └── Result.tsx           # Results and stats
│   │
│   ├── data/
│   │   └── questions.ts         # Question bank (30 questions)
│   │
│   ├── hooks/
│   │   └── useQuiz.ts           # Custom hook for quiz logic
│   │
│   ├── utils/
│   │   └── helpers.ts           # Utility functions
│   │
│   ├── App.tsx                  # Router configuration
│   ├── main.tsx                 # App entry point
│   └── index.css                # Global styles
│
├── public/
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. **Clone or navigate to the project**

   ```bash
   cd quiz-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
npm run preview
```

## 📊 Question Data Model

```typescript
interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // Index of correct option
  category: string; // "web" | "programming"
  difficulty: string; // "easy" | "medium" | "hard"
}
```

## 🎨 Design Highlights

- **Mobile-first responsive design**
- **Gradient backgrounds** with soft color transitions
- **Shadow effects** for depth and focus
- **Color-coded feedback**:
  - 🟢 Green → Correct answer
  - 🔴 Red → Incorrect answer
  - 🔵 Blue → Primary actions
  - 🟡 Yellow → Timer warnings
- **Smooth animations** on hover and state changes

## 🔧 Key Components

### `useQuiz` Hook

Manages quiz state including:

- Current question index
- Selected answers
- Score calculation
- Timer countdown
- Quiz completion

### QuestionCard Component

- Displays question and options
- Handles answer selection
- Visual feedback for correct/incorrect
- Disabled state after answer

### Timer Component

- 30-second countdown per question
- Color-coded progress bar
- Auto-submit on timeout

### ProgressBar Component

- Shows question progress (e.g., "Question 3 of 10")
- Animated fill based on completion percentage

## 💡 Learning Outcomes

This project demonstrates:

- ✅ React Hooks (`useState`, `useEffect`, custom hooks)
- ✅ Component composition and reusability
- ✅ State management patterns
- ✅ Client-side routing with React Router
- ✅ TypeScript for type safety
- ✅ Tailwind CSS utility classes
- ✅ LocalStorage API integration
- ✅ Timer and countdown logic
- ✅ Conditional rendering and styling
- ✅ Form handling and validation
- ✅ Project structure best practices

## 🚀 Future Enhancements

- [ ] Fetch questions from external API (e.g., Open Trivia DB)
- [ ] User authentication and profiles
- [ ] Leaderboard with global rankings
- [ ] Dark mode toggle
- [ ] Sound effects and animations
- [ ] Question categories expansion
- [ ] Multiplayer mode
- [ ] Save quiz progress mid-session
- [ ] Share results on social media

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

Built as a portfolio project to demonstrate modern React development skills.

---

**⭐ If you found this helpful, consider starring the repository!**
