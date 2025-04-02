"use client";

import { cn } from "@/src/lib/utils";
import { type ColumnDef } from "@tanstack/react-table";
import { WORK_LABELS } from "./types";
import { WorkWithSubRows } from "./WorkPage";

export const columns: ColumnDef<WorkWithSubRows, string>[] = [
  {
    id: "date",
    accessorFn: (row) => new Date(row.date).getFullYear().toString(),
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
      const childRowClassName = "text-secondary";

      return (
        <div className="font-medium text-xs md:text-sm">
          <span
            className={cn(
              "text-primary",
              !row.getCanExpand() && childRowClassName
            )}
          >
            {year}
          </span>
          <span className={childRowClassName}>, {monthName}</span>
        </div>
      );
    },
    minSize: 100,
    size: 60,
    maxSize: 60,
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
    minSize: 150,
    maxSize: 150,
    cell: ({ row }) => {
      const label = WORK_LABELS[row.original.project.label];

      return (
        <p className="flex min-w-0 truncate">
          <span
            key={label.name}
            className={cn("p-1 text-xs rounded-[4px]", label.className)}
          >
            {label.name}
          </span>
        </p>
      );
    },
  },
];
