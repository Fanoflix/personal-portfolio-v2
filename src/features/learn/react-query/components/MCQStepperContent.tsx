"use client";

import { useMCQStepper } from "../hooks";
import { CategoryNav, MCQContent } from "./index";

export function MCQStepperContent() {
  const {
    allMCQs,
    categories,
    currentCategory,
    totalQuestions,
    handleCategorySelect,
  } = useMCQStepper();

  function handleNext() {
    // Move to next question
    // This will be handled by the stepper context
  }

  function handlePrevious() {
    // Move to previous question
    // This will be handled by the stepper context
  }

  return (
    <>
      <CategoryNav
        categories={categories}
        currentCategory={currentCategory}
        onSelect={handleCategorySelect}
      />

      <MCQContent
        allMCQs={allMCQs}
        totalQuestions={totalQuestions}
        onNext={handleNext}
        onPrevious={handlePrevious}
      />
    </>
  );
}
