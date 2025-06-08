"use client";

import { cn } from "@/src/lib/utils";
import { type ColumnDef } from "@tanstack/react-table";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { TagsAnimatedList } from "../../components/TagsAnimatedList/TagsAnimatedList";
import { WrapConditionally } from "../../components/WrapConditionally/WrapConditionally";
import { CategoryColumn } from "./CategoryColumn";
import { WORK_LABELS, WorkWithSubRows } from "./types";

export const columns: ColumnDef<WorkWithSubRows, string>[] = [
  {
    id: "date",
    accessorFn: (row) => {
      if (!row.date) return "date";
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
    cell: ({ row }) => {
      const projectLink = row.original.project.link;

      return (
        <WrapConditionally
          condition={!!projectLink}
          wrapper={(wrapperChildren) => (
            <Link
              href={projectLink || ""}
              target="_blank"
              rel="noopener noreferrer"
              className="contents"
            >
              {wrapperChildren}
            </Link>
          )}
        >
          <div className="flex flex-nowrap items-center justify-between pr-10 group">
            <div
              className={cn(
                "flex items-center gap-2 font-medium text-primary text-[12px] md:text-sm pr-1 min-w-0 border-b border-transparent",
                projectLink && "group-hover:border-primary cursor-pointer",
              )}
            >
              <p
                className={
                  "truncate flex-1 min-w-0 text-primary border-transparent"
                }
              >
                {row.getValue("project")}
              </p>
              {projectLink && (
                <ArrowUpRight
                  className="flex-shrink-0"
                  size={17}
                  strokeWidth={3}
                />
              )}
            </div>

            <div className="flex-shrink-0">
              <TagsAnimatedList
                tags={[
                  ...row.original.project.tags,
                  {
                    name:
                      row.original.project.company?.companyName || "Personal",
                    isSpecial: true,
                  },
                ]}
              />
            </div>
          </div>
        </WrapConditionally>
      );
    },
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
      return <CategoryColumn row={row} />;
    },
  },
];
