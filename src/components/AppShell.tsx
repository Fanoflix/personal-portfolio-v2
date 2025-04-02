"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";
import { layoutVariants } from "../features/framer-animations/variants";
import SiteNavbar from "./SiteNavBar";
import TopNavbar from "./TopNavbar";

export default function AppShell({ children }: PropsWithChildren) {
  const pathname = usePathname();

  return (
    <div className="p-6 flex flex-col items-center">
      <TopNavbar />
      <SiteNavbar />
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
