import { motion } from "framer-motion";
import React from "react";

import { cn, parseCode } from "@/lib/utils";

import { useMCQ } from "../hooks";

interface MCQExplanationProps {
  explanation: string;
}

export default function MCQExplanation({ explanation }: MCQExplanationProps) {
  const { showExplanation, isCorrect } = useMCQ();

  return (
    // <AnimatePresence>
    <>
      {showExplanation && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "100%" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.1 }}
        >
          <div
            className={cn(
              "flex flex-col gap-2 border-l-2 border-transparent to-50% px-4 py-3",
              isCorrect
                ? "border-green-800 bg-linear-to-r from-green-800/15 to-transparent"
                : "border-orange-700 bg-linear-to-r from-orange-700/15 to-transparent",
            )}
          >
            <h4 className="text-text text-[9px] font-black tracking-wider uppercase">
              Explanation
            </h4>
            <p className="text-primary text-xs leading-snug md:text-sm">
              {parseCode(explanation)}
            </p>
          </div>
        </motion.div>
      )}
    </>
    // </AnimatePresence>
  );
}
