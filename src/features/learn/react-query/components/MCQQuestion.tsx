"use client";

import { motion } from "framer-motion";

import { cn, parseCode } from "@/lib/utils";

import { useMCQ } from "../hooks/useMCQ";
import { MCQ } from "../types";

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
  const textColor = "text-foreground";
  if (isSelected) {
    if (isCorrect) {
      border = "border-green-800/40";
      bg = "bg-linear-to-r from-green-800/20 to-transparent to-50%";
    } else {
      border = "border-orange-500/25";
      bg = "bg-linear-to-r from-orange-700/20 to-transparent to-50%";
    }
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex w-full gap-3 rounded-md border p-3 ${border} ${bg} ${textColor} group text-start text-xs transition-colors duration-150 focus:outline-hidden md:text-sm`}
    >
      <span
        className={cn(
          "text-primary shrink-0 leading-tight font-bold group-hover:drop-shadow-[0_0_7px_rgba(255,255,255,1)]",
          isSelected &&
            isCorrect &&
            "drop-shadow-[0_0_7px_rgba(100,255,100,1)]",
        )}
      >
        {optionKey}
      </span>
      <span
        className={cn(
          "group-hover:text-primary leading-tight text-wrap",
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
      className="mx-auto flex w-full flex-col gap-4 rounded-lg pt-0 shadow-xs"
    >
      {/* Question */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        <h3 className="text-foreground text-base leading-relaxed md:text-lg">
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
