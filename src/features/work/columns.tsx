"use client";

import { type ColumnDef } from "@tanstack/react-table";

import { cn } from "@/lib/utils";

import { CategoryColumn } from "./CategoryColumn";
import { ProjectCell } from "./ProjectCell";
import { WORK_LABELS, WorkWithSubRows } from "./types";

export const columns: ColumnDef<WorkWithSubRows, string>[] = [
  {
    id: "date",
    accessorFn: (row) => {
      if (!row.date) {
        return "date";
      }
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
        <div className="text-xs font-medium md:text-sm">
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
    minSize: 95,
    size: 95,
    maxSize: 100,
  },
  {
    accessorKey: "project.name",
    id: "project",
    header: "Project",
    cell: ({ row }) => <ProjectCell work={row.original} />,
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
      return <CategoryColumn row={row} />;
    },
  },
];
