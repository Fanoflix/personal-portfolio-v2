"use client";

import { useState, useMemo } from "react";
import { useStepper } from "@/src/components/Stepper/StepperContext";
import { mcqData } from "../data/mcqs";
import { MCQ } from "../types";

export function useMCQStepper() {
  const [currentCategory, setCurrentCategory] = useState("Overview");
  const { goToStep } = useStepper();

  // Flatten all MCQs into a single array for stepper
  const allMCQs = useMemo(() => {
    const flattened: Array<{ mcq: MCQ; category: string; index: number }> = [];
    Object.entries(mcqData.mcqs).forEach(([category, mcqs]) => {
      mcqs.forEach((mcq, index) => {
        flattened.push({ mcq, category, index });
      });
    });
    return flattened;
  }, []);

  const categories = Object.keys(mcqData.mcqs);
  const totalQuestions = allMCQs.length;

  function handleCategorySelect(category: string) {
    setCurrentCategory(category);
    // Find the first question of the selected category
    const categoryStartIndex = allMCQs.findIndex(
      (item) => item.category === category,
    );
    if (categoryStartIndex !== -1) {
      goToStep(categoryStartIndex);
    }
  }

  return {
    allMCQs,
    categories,
    currentCategory,
    totalQuestions,
    handleCategorySelect,
  };
}
