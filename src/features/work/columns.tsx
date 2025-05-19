"use client";

import { cn } from "@/src/lib/utils";
import { type ColumnDef } from "@tanstack/react-table";
import { WORK_LABELS } from "./types";
import { WorkWithSubRows } from "./WorkPage";

export const columns: ColumnDef<WorkWithSubRows, string>[] = [
  {
    id: "date",
    accessorFn: (row) => {
      const date = new Date(row.date);
      return date.toISOString();
    },
    sortingFn: "datetime",
    header: ({ column }) => (
      <div
        className="cursor-pointer"
        onClick={() => {
          column.toggleSorting(column.getIsSorted() === "asc", true);
        }}
      >
        Moment
      </div>
    ),
    cell: ({ row }) => {
      const date = new Date(row.original.date);
      const monthName = date.toLocaleString("default", { month: "short" });
      const year = date.getFullYear();
      const childRowClassName = "text-primary/30";

      return (
        <div className="font-medium text-xs md:text-sm">
          <span
            className={cn(
              "text-primary font-semibold",
              !row.getCanExpand() && childRowClassName,
            )}
          >
            {year}
          </span>
          <span className={childRowClassName}>, {monthName}</span>
        </div>
      );
    },
    minSize: 150,
    size: 80,
    maxSize: 80,
  },
  {
    accessorKey: "project.name",
    id: "project",
    header: "Project",
    cell: ({ row }) => (
      <div className="font-medium min-w-0 truncate">
        {row.getValue("project")}
      </div>
    ),
    minSize: 500,
    maxSize: 500,
  },
  {
    id: "category",
    accessorFn: (row) => WORK_LABELS[row.project.label].weight.toString(),
    header: "Category",
    minSize: 200,
    maxSize: 200,
    cell: ({ row }) => {
      const label = WORK_LABELS[row.original.project.label];

      return (
        <p className="flex gap-2 items-center min-w-0 overflow-visible">
          <span
            key={label.name}
            className={cn(
              "flex items-center gap-1 text-sm font-semibold overflow-visible",
              label.className,
            )}
          >
            {label.name}
            <span className="animate-flame-flicker mb-1">
              {label.meta?.icon && (
                <label.meta.icon
                  strokeWidth={1}
                  className={cn("inline w-4 h-4", label.meta.iconClassName)}
                />
              )}
            </span>
          </span>
        </p>
      );
    },
  },
];
