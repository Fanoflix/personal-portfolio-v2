"use client";

import { motion } from "framer-motion";
import { Stepper } from "@/src/components/Stepper/Stepper";
import { MCQStepperContent } from "./components";
import { mcqData } from "./data/mcqs";

export function LearnReactQuery() {
  // Calculate total questions for the stepper
  const totalQuestions = Object.values(mcqData.mcqs).reduce(
    (total, category) => total + (category as any[]).length,
    0,
  );

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">TanStack Query Quiz</h1>
          <p className="text-muted-foreground">
            Test your knowledge of TanStack Query concepts
          </p>
        </div>

        <Stepper totalSteps={totalQuestions}>
          <MCQStepperContent />
        </Stepper>
      </motion.div>
    </div>
  );
}
