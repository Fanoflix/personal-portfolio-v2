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

  return (
    <div className="flex flex-col gap-10">
      <CategoryNav
        categories={categories}
        currentCategory={currentCategory}
        onSelect={handleCategorySelect}
      />

      <MCQContent allMCQs={allMCQs} totalQuestions={totalQuestions} />
    </div>
  );
}
