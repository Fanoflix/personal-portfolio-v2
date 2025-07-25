"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";
import { MCQState } from "../types";

interface MCQContextType {
  selectedOption: "A" | "B" | "C" | "D" | null;
  showExplanation: boolean;
  isCorrect: boolean | null;
  isAnswered: boolean;
  selectOption: (
    option: "A" | "B" | "C" | "D",
    correctOption: "A" | "B" | "C" | "D",
  ) => void;
  resetQuestion: () => void;
  getOptionVariant: (option: "A" | "B" | "C" | "D") => string;
}

const MCQContext = createContext<MCQContextType | undefined>(undefined);

interface MCQProviderProps {
  children: ReactNode;
}

export function MCQProvider({ children }: MCQProviderProps) {
  const [state, setState] = useState<MCQState>({
    selectedOption: null,
    showExplanation: false,
    isCorrect: null,
  });

  const selectOption = useCallback(
    (option: "A" | "B" | "C" | "D", correctOption: "A" | "B" | "C" | "D") => {
      const isCorrect = option === correctOption;
      setState({
        selectedOption: option,
        showExplanation: true,
        isCorrect,
      });
    },
    [],
  );

  const resetQuestion = useCallback(() => {
    setState({
      selectedOption: null,
      showExplanation: false,
      isCorrect: null,
    });
  }, []);

  const getOptionVariant = useCallback(
    (option: "A" | "B" | "C" | "D") => {
      if (!state.selectedOption || !state.showExplanation) {
        return "outline";
      }

      if (state.selectedOption === option) {
        return state.isCorrect ? "default" : "destructive";
      }

      return "outline";
    },
    [state.selectedOption, state.showExplanation, state.isCorrect],
  );

  const value: MCQContextType = {
    ...state,
    selectOption,
    resetQuestion,
    getOptionVariant,
    isAnswered: state.selectedOption !== null,
  };

  return <MCQContext.Provider value={value}>{children}</MCQContext.Provider>;
}

export function useMCQ() {
  const context = useContext(MCQContext);
  if (context === undefined) {
    throw new Error("useMCQ must be used within a MCQProvider");
  }
  return context;
}
