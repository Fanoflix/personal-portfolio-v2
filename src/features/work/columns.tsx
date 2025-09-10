"use client";

import { type ColumnDef } from "@tanstack/react-table";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/utils";

import { TagsAnimatedList } from "../../components/TagsAnimatedList/TagsAnimatedList";
import { WrapConditionally } from "../../components/WrapConditionally/WrapConditionally";
import { CategoryColumn } from "./CategoryColumn";
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
          <div className="group flex flex-nowrap items-center justify-between pr-10">
            <div
              className={cn(
                "text-primary flex min-w-0 items-center gap-2 border-b border-transparent pr-1 text-[12px] font-medium md:text-sm",
                projectLink && "group-hover:border-primary cursor-pointer",
              )}
            >
              <p className="text-primary min-w-0 flex-1 truncate border-transparent">
                {row.getValue("project")}
              </p>
              {projectLink && (
                <ArrowUpRight className="shrink-0" size={17} strokeWidth={3} />
              )}
            </div>

            <div className="shrink-0">
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
