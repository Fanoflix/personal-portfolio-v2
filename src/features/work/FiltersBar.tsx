"use client";

import { AnimatePresence, motion } from "framer-motion";

import { Button } from "@/components/Button";

import { filtersBarVariants } from "../framer-animations/variants";
import { WORK_DATA } from "./work-data";

type FiltersBarProps = {
  setFilterState: (year: string) => void;
  activeFilter?: string;
};

export function FiltersBar({ setFilterState, activeFilter }: FiltersBarProps) {
  // Extract all years from the work data
  const years = Object.keys(WORK_DATA).sort((a, b) => Number(b) - Number(a));

  return (
    <div className="flex flex-wrap items-center gap-1">
      <div className="bg-background z-20 flex flex-wrap items-center gap-1">
        {years.map((year) => (
          <Button
            key={year}
            onClick={() => setFilterState(year)}
            size="sm"
            variant={activeFilter === year ? "default" : "outline"}
          >
            {year}
          </Button>
        ))}
      </div>

      <AnimatePresence>
        {activeFilter && (
          <motion.div
            variants={filtersBarVariants}
            key={Boolean(activeFilter).toString()}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="z-0 flex items-center gap-2 text-xs"
          >
            <Button
              size="sm"
              variant="destructive"
              onClick={() => setFilterState("")}
            >
              Clear filter
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
