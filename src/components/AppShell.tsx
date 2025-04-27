"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";
import { layoutVariants } from "../features/framer-animations/variants";
import TopNavbar from "./TopNavbar";

export default function AppShell({ children }: PropsWithChildren) {
  const pathname = usePathname();

  return (
    <div className="px-6 pb-6 flex flex-col items-center">
      <TopNavbar />
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
