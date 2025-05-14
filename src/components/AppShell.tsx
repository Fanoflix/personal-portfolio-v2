"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";
import { layoutVariants } from "../features/framer-animations/variants";
import TopNavbar from "./TopNavbar";
import { cn } from "../lib/utils";
import { AuroraBackground } from "./AuroraBackground/AuroraBackground";

export default function ll({ children }: PropsWithChildren) {
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "w-full md:w-site",
        "px-1 pb-6 flex flex-col items-center justify-center",
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
