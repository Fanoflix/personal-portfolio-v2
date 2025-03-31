"use client";

import { TableHeader } from "@/src/components/DataTable/table";
import { cn } from "@/src/lib/utils";
import type { ColumnDef } from "@tanstack/react-table";
import { Work, WORK_LABELS } from "./types";

export const columns: ColumnDef<Work, string>[] = [
  {
    accessorKey: "year",
    header: ({ column }) => (
      <TableHeader
        onClick={() => {
          column.toggleSorting(column.getIsSorted() === "asc", true);
        }}
      >
        Year
      </TableHeader>
    ),
    cell: ({ row }) => <p className="font-medium">{row.getValue("year")}</p>,
    minSize: 120,
    maxSize: 200,
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
    minSize: 600,
    maxSize: 900,
  },
  {
    id: "category",
    accessorFn: (row) => WORK_LABELS[row.project.label].weight.toString(),
    header: ({ column }) => (
      <TableHeader
        onClick={() => {
          column.toggleSorting(column.getIsSorted() === "asc", true);
        }}
      >
        Category
      </TableHeader>
    ),
    minSize: 200,
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
