"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/src/components/Button/button";
import { MCQ } from "../types";
import { useMCQ } from "../hooks/useMCQ";
import { parseCode } from "../utils/parseCode";

interface MCQQuestionProps {
  mcq: MCQ;
  questionNumber: number;
  totalQuestions: number;
}

export function MCQQuestion({
  mcq,
  questionNumber,
  totalQuestions,
}: MCQQuestionProps) {
  const {
    selectedOption,
    showExplanation,
    selectOption,
    getOptionVariant,
    isAnswered,
  } = useMCQ();

  const options = [
    { key: "A" as const, text: mcq.optionA },
    { key: "B" as const, text: mcq.optionB },
    { key: "C" as const, text: mcq.optionC },
    { key: "D" as const, text: mcq.optionD },
  ];

  function handleOptionSelect(option: "A" | "B" | "C" | "D") {
    if (!isAnswered) {
      selectOption(option, mcq.correctOption);
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-3xl mx-auto p-6 bg-card rounded-lg border shadow-sm"
    >
      {/* Progress indicator */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-muted-foreground">
            Question {questionNumber} of {totalQuestions}
          </span>
        </div>
        <div className="w-full bg-secondary rounded-full h-2">
          <div
            className="bg-primary h-2 rounded-full transition-all duration-300"
            style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="mb-8"
      >
        <h2 className="text-xl font-semibold leading-relaxed text-foreground">
          {parseCode(mcq.question)}
        </h2>
      </motion.div>

      {/* Options */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="space-y-3 mb-6"
      >
        {options.map((option, index) => (
          <motion.div
            key={option.key}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
          >
            <Button
              variant={getOptionVariant(option.key)}
              size="lg"
              className="w-full justify-start text-left h-auto py-4 px-6"
              onClick={() => handleOptionSelect(option.key)}
              disabled={isAnswered}
            >
              <span className="font-semibold mr-3 flex-shrink-0">
                {option.key}.
              </span>
              <span className="text-wrap">{parseCode(option.text)}</span>
            </Button>
          </motion.div>
        ))}
      </motion.div>

      {/* Explanation */}
      <AnimatePresence>
        {showExplanation && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="border-t pt-6"
          >
            <div className="bg-muted/50 rounded-lg p-4">
              <h3 className="font-semibold mb-2 text-foreground">
                Explanation
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {parseCode(mcq.explanation)}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
