import { Row } from "@tanstack/react-table";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

import { WORK_LABELS, WorkWithSubRows } from "./types";

export const CategoryColumn = ({ row }: { row: Row<WorkWithSubRows> }) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const label = WORK_LABELS[row.original.project.label];

  useEffect(() => {
    // We need this to prevent hydration errors when using useTheme.
    setMounted(true);
  }, []);

  return (
    <p className="flex min-w-0 items-center gap-2 overflow-visible">
      <span
        key={label.name}
        className={cn(
          "flex items-center gap-1 overflow-visible text-xs font-medium",
          "contrast-75",
          label.className,
        )}
      >
        {label.name}
        <span className="mb-1">
          {label.meta?.icon && (
            <label.meta.icon
              strokeWidth={1.6}
              strokeLinecap="round"
              strokeLinejoin="miter"
              fill={mounted && theme === "dark" ? "none" : "currentColor"}
              className={cn("inline h-4 w-4", label.meta.iconClassName)}
            />
          )}
        </span>
      </span>
    </p>
  );
};
