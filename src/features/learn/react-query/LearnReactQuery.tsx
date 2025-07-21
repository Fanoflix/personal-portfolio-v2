"use client";

import { motion } from "framer-motion";
import { Stepper } from "@/src/components/Stepper/Stepper";
import { MCQStepperContent } from "./components";
import { mcqData } from "./data/mcqs";
import { StaggeredContainer } from "../../framer-animations/components/StaggeredContainer";

export function LearnReactQuery() {
  // Calculate total questions for the stepper
  const totalQuestions = Object.values(mcqData.mcqs).reduce(
    (total, category) => total + (category as any[]).length,
    0,
  );

  return (
    <StaggeredContainer
      stagger={0.35}
      containerClassName="flex flex-col items-center justify-center gap-10 pt-12"
    >
      <div className="text-center">
        <h3 className="flex gap-2 items-center leading-[0.65] font-black text-primary">
          React Query.
          <p className="text-primary/25 leading-[0.95]">
            How well do you know Query?
          </p>
        </h3>
      </div>

      <Stepper totalSteps={totalQuestions}>
        <MCQStepperContent />
      </Stepper>
    </StaggeredContainer>
  );
}
