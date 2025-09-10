"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

import { useStepper } from "@/components/Stepper/StepperContext";

import { MCQProvider, useMCQ } from "../hooks/useMCQ";
import { MCQ } from "../types";
import MCQExplanation from "./MCQExplanation";
import { MCQQuestion } from "./MCQQuestion";
import ProgressIndicator from "./ProgressIndicator";
import { StepperControls } from "./StepperControls";

interface MCQContentProps {
  allMCQs: Array<{ mcq: MCQ; category: string; index: number }>;
  totalQuestions: number;
}

function MCQContentInner({
  currentMCQ,
  questionNumber,
  totalQuestions,
  isLastQuestion,
}: {
  currentMCQ: { mcq: MCQ; category: string; index: number };
  questionNumber: number;
  totalQuestions: number;
  isLastQuestion: boolean;
}) {
  const { resetQuestion } = useMCQ();

  useEffect(() => {
    resetQuestion();
  }, [questionNumber, resetQuestion]);

  return (
    <div className="flex flex-col gap-6 max-w-xs md:max-w-[500px]">
      <MCQQuestion
        mcq={currentMCQ.mcq}
        questionNumber={questionNumber}
        totalQuestions={totalQuestions}
      />

      <StepperControls isLastQuestion={isLastQuestion} />
      <MCQExplanation explanation={currentMCQ.mcq.explanation} />
    </div>
  );
}

export function MCQContent({ allMCQs, totalQuestions }: MCQContentProps) {
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

  const questionNumber = currentStep + 1;

  return (
    <div className="flex flex-col">
      <ProgressIndicator
        questionNumber={questionNumber}
        totalQuestions={totalQuestions}
      />
      <AnimatePresence mode="wait">
        <motion.div
          key={`${currentMCQ.category}-${currentMCQ.index}-${currentStep}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15, ease: "easeIn" }}
        >
          <MCQProvider>
            <MCQContentInner
              currentMCQ={currentMCQ}
              questionNumber={questionNumber}
              totalQuestions={totalQuestions}
              isLastQuestion={isLastQuestion}
            />
          </MCQProvider>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
