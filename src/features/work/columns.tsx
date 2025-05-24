"use client";

import { cn } from "@/src/lib/utils";
import { type ColumnDef } from "@tanstack/react-table";
import { WORK_LABELS } from "./types";
import { WorkWithSubRows } from "./WorkPage";
import { useTheme } from "next-themes";
import { TagsAnimatedList } from "../../components/TagsAnimatedList/TagsAnimatedList";

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
      <div className="flex flex-nowrap items-center justify-between pr-10">
        <p className="font-medium text-primary text-[12px] md:text-sm truncate flex-1">
          {row.getValue("project")}
        </p>

        <div className="flex-shrink-0">
          <TagsAnimatedList
            tags={[
              {
                name: "Metal",
                tooltip: "During tenure at Metal",
                isSpecial: true,
              },
              { name: "TypeScript", tooltip: "Written in TypeScript" },
              { name: "Next.js", tooltip: "Built with Next.js" },
              { name: "Tailwind", tooltip: "Styled with Tailwind" },
            ]}
          />
        </div>
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
      const { theme } = useTheme();
      const label = WORK_LABELS[row.original.project.label];

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
                  fill={theme === "dark" ? "none" : "currentColor"}
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
