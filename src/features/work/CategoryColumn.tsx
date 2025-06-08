import { cn } from "@/src/lib/utils";
import { Row } from "@tanstack/react-table";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
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
    <p className="flex gap-2 items-center min-w-0 overflow-visible">
      <span
        key={label.name}
        className={cn(
          "flex items-center gap-1 text-xs md:text-sm font-medium overflow-visible",
          label.className,
        )}
      >
        {label.name}
        <span className="mb-1">
          {label.meta?.icon && (
            <label.meta.icon
              strokeWidth={1}
              fill={mounted && theme === "dark" ? "none" : "currentColor"}
              className={cn("inline w-4 h-4", label.meta.iconClassName)}
            />
          )}
        </span>
      </span>
    </p>
  );
};
