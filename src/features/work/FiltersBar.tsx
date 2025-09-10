"use client";

import { AnimatePresence, motion } from "framer-motion";
import { filtersBarVariants } from "../framer-animations/variants";
import { WORK_DATA } from "./work-data";
import { Button } from "@/components/Button";

type FiltersBarProps = {
  setFilterState: (year: string) => void;
  activeFilter?: string;
};

export function FiltersBar({ setFilterState, activeFilter }: FiltersBarProps) {
  // Extract all years from the work data
  const years = Object.keys(WORK_DATA).sort((a, b) => Number(b) - Number(a));

  return (
    <div className="flex flex-wrap items-center gap-1">
      <div className="flex flex-wrap items-center gap-1 z-20 bg-background">
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
            className="flex items-center gap-2 text-xs z-0"
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
