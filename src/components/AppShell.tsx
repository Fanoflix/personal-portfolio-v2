"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";

import { layoutVariants } from "../features/framer-animations/variants";
import { cn } from "../lib/utils";

export default function ll({ children }: PropsWithChildren) {
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "md:w-site w-full px-3 md:px-0",
        "flex flex-col items-center justify-center pb-6",
      )}
    >
      <AnimatePresence mode="wait">
        <motion.section
          className="w-full"
          key={pathname}
          variants={layoutVariants}
          initial="hidden"
          animate="visible"
        >
          {children}
        </motion.section>
      </AnimatePresence>
    </div>
  );
}
