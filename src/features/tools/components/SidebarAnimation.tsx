"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

interface SidebarAnimationProps {
  isVisible: boolean;
  children: ReactNode;
}

export function SidebarAnimation({
  isVisible,
  children,
}: SidebarAnimationProps) {
  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          initial={{
            left: "0px",
            scaleX: 1,
          }}
          animate={{
            left: "0px",
            scaleX: 1,
          }}
          exit={{
            left: "-100px",
            scaleX: 0,
          }}
          transition={{
            duration: 0.25,
            ease: "easeOut",
          }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
