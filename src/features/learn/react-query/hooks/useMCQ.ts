"use client";

import { useState, useCallback } from "react";
import { MCQState } from "../types";

export function useMCQ() {
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

  return {
    ...state,
    selectOption,
    resetQuestion,
    getOptionVariant,
    isAnswered: state.selectedOption !== null,
  };
}
