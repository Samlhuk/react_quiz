export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  category: string;
  difficulty: string;
}

export const questions: Question[] = [
  // Web Development - Easy
  {
    id: 1,
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Tech Modern Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
    ],
    correctAnswer: 0,
    category: "web",
    difficulty: "easy",
  },
  {
    id: 2,
    question: "What does CSS stand for?",
    options: [
      "Computer Style Sheets",
      "Cascading Style Sheets",
      "Creative Style Sheets",
      "Colorful Style Sheets",
    ],
    correctAnswer: 1,
    category: "web",
    difficulty: "easy",
  },
  {
    id: 3,
    question: "What does DOM stand for?",
    options: [
      "Document Object Model",
      "Data Object Model",
      "Dynamic Output Model",
      "Digital Object Method",
    ],
    correctAnswer: 0,
    category: "web",
    difficulty: "easy",
  },
  {
    id: 4,
    question: "Which HTML tag is used to define an internal style sheet?",
    options: ["<css>", "<script>", "<style>", "<link>"],
    correctAnswer: 2,
    category: "web",
    difficulty: "easy",
  },
  {
    id: 5,
    question: "Which property is used to change the background color in CSS?",
    options: ["color", "bgcolor", "background-color", "bg-color"],
    correctAnswer: 2,
    category: "web",
    difficulty: "easy",
  },

  // Web Development - Medium
  {
    id: 6,
    question: "What is the correct way to write a JavaScript array?",
    options: [
      "var colors = 'red', 'green', 'blue'",
      "var colors = ['red', 'green', 'blue']",
      "var colors = (1:'red', 2:'green', 3:'blue')",
      "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')",
    ],
    correctAnswer: 1,
    category: "web",
    difficulty: "medium",
  },
  {
    id: 7,
    question:
      "Which method is used to add an element at the end of an array in JavaScript?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    correctAnswer: 0,
    category: "web",
    difficulty: "medium",
  },
  {
    id: 8,
    question: "What does the 'this' keyword refer to in JavaScript?",
    options: [
      "The current function",
      "The global object",
      "The object that owns the code",
      "The previous object",
    ],
    correctAnswer: 2,
    category: "web",
    difficulty: "medium",
  },
  {
    id: 9,
    question: "Which CSS property controls the text size?",
    options: ["font-style", "text-size", "font-size", "text-style"],
    correctAnswer: 2,
    category: "web",
    difficulty: "medium",
  },
  {
    id: 10,
    question: "What is the purpose of the 'useState' hook in React?",
    options: [
      "To fetch data from an API",
      "To manage component state",
      "To handle side effects",
      "To create refs",
    ],
    correctAnswer: 1,
    category: "web",
    difficulty: "medium",
  },

  // Web Development - Hard
  {
    id: 11,
    question: "What is closure in JavaScript?",
    options: [
      "A way to close the browser",
      "A function that has access to variables in its outer scope",
      "A method to end a loop",
      "A type of loop",
    ],
    correctAnswer: 1,
    category: "web",
    difficulty: "hard",
  },
  {
    id: 12,
    question: "What is the purpose of the 'useEffect' hook in React?",
    options: [
      "To manage state",
      "To handle side effects and lifecycle methods",
      "To create components",
      "To style components",
    ],
    correctAnswer: 1,
    category: "web",
    difficulty: "hard",
  },
  {
    id: 13,
    question: "What is event delegation in JavaScript?",
    options: [
      "Creating multiple event listeners",
      "Removing event listeners",
      "Using a single event listener to manage events for multiple elements",
      "Preventing default behavior",
    ],
    correctAnswer: 2,
    category: "web",
    difficulty: "hard",
  },
  {
    id: 14,
    question: "What is the difference between '==' and '===' in JavaScript?",
    options: [
      "No difference",
      "== checks value only, === checks value and type",
      "== is faster than ===",
      "=== is deprecated",
    ],
    correctAnswer: 1,
    category: "web",
    difficulty: "hard",
  },
  {
    id: 15,
    question: "What is the Virtual DOM in React?",
    options: [
      "A programming concept where a virtual representation of the UI is kept in memory",
      "A physical server",
      "A database",
      "A CSS framework",
    ],
    correctAnswer: 0,
    category: "web",
    difficulty: "hard",
  },

  // Programming - Easy
  {
    id: 16,
    question: "What does API stand for?",
    options: [
      "Application Programming Interface",
      "Advanced Programming Interface",
      "Application Process Integration",
      "Advanced Process Interface",
    ],
    correctAnswer: 0,
    category: "programming",
    difficulty: "easy",
  },
  {
    id: 17,
    question: "What is a variable in programming?",
    options: [
      "A fixed value",
      "A container for storing data",
      "A type of loop",
      "A function",
    ],
    correctAnswer: 1,
    category: "programming",
    difficulty: "easy",
  },
  {
    id: 18,
    question: "What does 'loop' mean in programming?",
    options: [
      "A single execution",
      "Repeating a set of instructions",
      "Ending a program",
      "Creating a function",
    ],
    correctAnswer: 1,
    category: "programming",
    difficulty: "easy",
  },
  {
    id: 19,
    question: "What is a function in programming?",
    options: [
      "A type of variable",
      "A reusable block of code",
      "A database",
      "A loop",
    ],
    correctAnswer: 1,
    category: "programming",
    difficulty: "easy",
  },
  {
    id: 20,
    question: "What does IDE stand for?",
    options: [
      "Integrated Development Environment",
      "Internet Development Environment",
      "Interactive Design Environment",
      "Internal Development Engine",
    ],
    correctAnswer: 0,
    category: "programming",
    difficulty: "easy",
  },

  // Programming - Medium
  {
    id: 21,
    question: "What is recursion in programming?",
    options: [
      "A loop that never ends",
      "A function that calls itself",
      "A way to delete code",
      "A type of variable",
    ],
    correctAnswer: 1,
    category: "programming",
    difficulty: "medium",
  },
  {
    id: 22,
    question: "What is the time complexity of binary search?",
    options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
    correctAnswer: 1,
    category: "programming",
    difficulty: "medium",
  },
  {
    id: 23,
    question: "What is polymorphism in OOP?",
    options: [
      "Having multiple forms",
      "Creating objects",
      "Deleting variables",
      "Writing comments",
    ],
    correctAnswer: 0,
    category: "programming",
    difficulty: "medium",
  },
  {
    id: 24,
    question: "What is the purpose of version control systems like Git?",
    options: [
      "To compile code",
      "To track changes in code over time",
      "To run programs",
      "To create databases",
    ],
    correctAnswer: 1,
    category: "programming",
    difficulty: "medium",
  },
  {
    id: 25,
    question: "What is the difference between stack and queue?",
    options: [
      "No difference",
      "Stack is LIFO, Queue is FIFO",
      "Stack is FIFO, Queue is LIFO",
      "Both are the same",
    ],
    correctAnswer: 1,
    category: "programming",
    difficulty: "medium",
  },

  // Programming - Hard
  {
    id: 26,
    question: "What is the difference between deep copy and shallow copy?",
    options: [
      "No difference",
      "Deep copy copies nested objects, shallow copy doesn't",
      "Shallow copy is faster",
      "Deep copy only works with arrays",
    ],
    correctAnswer: 1,
    category: "programming",
    difficulty: "hard",
  },
  {
    id: 27,
    question: "What is memoization?",
    options: [
      "A memory leak",
      "An optimization technique to cache function results",
      "A type of loop",
      "A design pattern",
    ],
    correctAnswer: 1,
    category: "programming",
    difficulty: "hard",
  },
  {
    id: 28,
    question: "What is the purpose of a hash table?",
    options: [
      "To sort data",
      "To store and retrieve data in O(1) time",
      "To delete data",
      "To print data",
    ],
    correctAnswer: 1,
    category: "programming",
    difficulty: "hard",
  },
  {
    id: 29,
    question:
      "What is the difference between synchronous and asynchronous programming?",
    options: [
      "No difference",
      "Synchronous blocks execution, asynchronous doesn't",
      "Asynchronous is always faster",
      "Synchronous is deprecated",
    ],
    correctAnswer: 1,
    category: "programming",
    difficulty: "hard",
  },
  {
    id: 30,
    question: "What is a design pattern?",
    options: [
      "A UI template",
      "A reusable solution to common software design problems",
      "A type of algorithm",
      "A debugging tool",
    ],
    correctAnswer: 1,
    category: "programming",
    difficulty: "hard",
  },
];

export const categories = [
  { value: "all", label: "All Categories" },
  { value: "web", label: "Web Development" },
  { value: "programming", label: "Programming" },
];

export const difficulties = [
  { value: "all", label: "All Difficulties" },
  { value: "easy", label: "Easy" },
  { value: "medium", label: "Medium" },
  { value: "hard", label: "Hard" },
];
