"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useStepper } from "@/src/components/Stepper/StepperContext";
import { MCQQuestion } from "./MCQQuestion";
import { StepperControls } from "./StepperControls";
import { MCQ } from "../types";

interface MCQContentProps {
  allMCQs: Array<{ mcq: MCQ; category: string; index: number }>;
  totalQuestions: number;
  onNext?: () => void;
  onPrevious?: () => void;
}

export function MCQContent({
  allMCQs,
  totalQuestions,
  onNext,
  onPrevious,
}: MCQContentProps) {
  const { currentStep } = useStepper();

  const currentMCQ = allMCQs[currentStep];
  const isLastQuestion = currentStep === totalQuestions - 1;

  if (!currentMCQ) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">No questions available.</p>
      </div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={`${currentMCQ.category}-${currentMCQ.index}-${currentStep}`}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
      >
        <MCQQuestion
          mcq={currentMCQ.mcq}
          questionNumber={currentStep + 1}
          totalQuestions={totalQuestions}
        />

        <StepperControls isLastQuestion={isLastQuestion} />
      </motion.div>
    </AnimatePresence>
  );
}
