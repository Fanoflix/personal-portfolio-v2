import { cn } from "@/src/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { parseCode } from "../utils/parseCode";
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
              "flex flex-col gap-2 px-4 py-3 border-l-2 border-transparent to-50%",
              isCorrect
                ? "bg-gradient-to-r from-green-800/15 to-transparent border-green-800"
                : "bg-gradient-to-r from-orange-700/15 to-transparent border-orange-700",
            )}
          >
            <h4 className="font-black text-[9px] uppercase text-text tracking-wider">
              Explanation
            </h4>
            <p className="text-primary text-xs md:text-sm leading-snug">
              {parseCode(explanation)}
            </p>
          </div>
        </motion.div>
      )}
    </>
    // </AnimatePresence>
  );
}
