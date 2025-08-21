"use client";

import { motion } from "framer-motion";
import { MCQ } from "../types";
import { useMCQ } from "../hooks/useMCQ";
import { cn, parseCode } from "@/src/lib/utils";

interface MCQOptionProps {
  optionKey: "A" | "B" | "C" | "D";
  text: string;
  isSelected: boolean;
  isCorrect: boolean | null;
  isAnswered: boolean;
  onClick: () => void;
}

function MCQOption({
  optionKey,
  text,
  isSelected,
  isCorrect,
  onClick,
}: MCQOptionProps) {
  let border = "border-transparent";
  let bg = "";
  let textColor = "text-foreground";
  if (isSelected) {
    if (isCorrect) {
      border = "border-green-800/40";
      bg = "bg-gradient-to-r from-green-800/20 to-transparent to-50%";
    } else {
      border = "border-orange-500/25";
      bg = "bg-gradient-to-r from-orange-700/20 to-transparent to-50%";
    }
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full flex gap-3 p-3 rounded-md border ${border} ${bg} ${textColor} transition-colors duration-150 text-xs md:text-sm focus:outline-none group text-start`}
    >
      <span
        className={cn(
          "font-bold text-primary group-hover:drop-shadow-[0_0_7px_rgba(255,255,255,1)] flex-shrink-0 leading-tight",
          isSelected &&
            isCorrect &&
            "drop-shadow-[0_0_7px_rgba(100,255,100,1)]",
        )}
      >
        {optionKey}
      </span>
      <span
        className={cn(
          "text-wrap group-hover:text-primary leading-tight",
          isSelected && "text-primary",
        )}
      >
        {parseCode(text)}
      </span>
    </button>
  );
}

interface MCQQuestionProps {
  mcq: MCQ;
  questionNumber: number;
  totalQuestions: number;
}

export function MCQQuestion({ mcq }: MCQQuestionProps) {
  const { selectedOption, selectOption, isAnswered, isCorrect } = useMCQ();

  const options = [
    { key: "A" as const, text: mcq.optionA },
    { key: "B" as const, text: mcq.optionB },
    { key: "C" as const, text: mcq.optionC },
    { key: "D" as const, text: mcq.optionD },
  ];

  function handleOptionSelect(option: "A" | "B" | "C" | "D") {
    selectOption(option, mcq.correctOption);
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.1 }}
      className="flex flex-col gap-4 w-full mx-auto pt-0 rounded-lg shadow-sm"
    >
      {/* Question */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        <h3 className="text-base md:text-lg leading-relaxed text-foreground">
          {parseCode(mcq.question)}
        </h3>
      </motion.div>

      {/* Options */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="flex flex-col gap-1"
      >
        {options.map((option, index) => (
          <motion.div
            key={option.key}
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 + index * 0.15 }}
            className="w-full"
          >
            <MCQOption
              optionKey={option.key}
              text={option.text}
              isSelected={selectedOption === option.key}
              isCorrect={isCorrect}
              isAnswered={isAnswered}
              onClick={() => handleOptionSelect(option.key)}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
