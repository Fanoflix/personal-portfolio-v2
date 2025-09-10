"use client";

import { Stepper } from "@/components/Stepper/Stepper";

import { StaggeredContainer } from "../../framer-animations/components/StaggeredContainer";
import { MCQStepperContent } from "./components";
import { mcqData } from "./data/mcqs";

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
      <h3 className="font-black text-primary">
        <p className="text-start text-primary/25 leading-[0.95]">
          <span className="text-primary">React Query. </span> How well do you
          know Query?
        </p>
      </h3>

      <Stepper totalSteps={totalQuestions}>
        <MCQStepperContent />
      </Stepper>
    </StaggeredContainer>
  );
}
