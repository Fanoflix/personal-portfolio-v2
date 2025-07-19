export interface MCQOption {
  optionA: string;
  optionB: string;
  optionC: string;
  optionD: string;
}

export interface MCQ extends MCQOption {
  question: string;
  correctOption: "A" | "B" | "C" | "D";
  explanation: string;
}

export interface MCQData {
  mcqs: Record<string, MCQ[]>;
}

export interface MCQState {
  selectedOption: "A" | "B" | "C" | "D" | null;
  showExplanation: boolean;
  isCorrect: boolean | null;
}

export interface CategoryProgress {
  category: string;
  currentQuestion: number;
  totalQuestions: number;
  answered: boolean[];
}
