"use client";
import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  getExpandedRowModel,
  getSortedRowModel,
  Row,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useMemo } from "react";
import { useInView } from "react-intersection-observer";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/DataTable/table";
import { dataTableRowVariants } from "@/features/framer-animations/variants";
import { cn } from "@/lib/utils";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  sortingState?: SortingState;
  setSortingState?: Dispatch<SetStateAction<SortingState>>;
  noBottomBorder?: boolean;
  rowClassName?: string | ((row: TData) => string);
}

export function DataTable<TData extends { subRows?: TData[] }, TValue>({
  columns,
  data,
  sortingState,
  setSortingState,
  noBottomBorder,
  rowClassName,
}: DataTableProps<TData, TValue>) {
  const isSortingEnabled = Boolean(setSortingState) && Boolean(sortingState);

  const table = useReactTable({
    data,
    columns,
    defaultColumn: undefined,
    getCoreRowModel: getCoreRowModel(),
    // Row expansion options
    getExpandedRowModel: getExpandedRowModel(),
    getSubRows: (row) => row.subRows,
    // Sorting options
    ...(isSortingEnabled && {
      onSortingChange: setSortingState,
      getSortedRowModel: getSortedRowModel(),
    }),
    state: {
      ...(isSortingEnabled && {
        sorting: sortingState,
      }),
      expanded: true,
    },

    isMultiSortEvent: (_e) => true, // bypasses the requirement of pressing a modifier key to trigger a multi sort. This makes sure that multi sort gets triggered on regular click.
    enableMultiSort: true,
    maxMultiSortColCount: 2, // max 2 columns can be multi sorted at the same time
    enableMultiRemove: false, // disable the ability to remove multi-sorts
    enableSortingRemoval: false, // disable the ability to remove sorting on columns (always none -> asc -> desc -> asc)
  });

  return (
    <div className="border-border rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow
              key={headerGroup.id}
              className="border-border bg-muted/20"
            >
              {headerGroup.headers.map((header) => (
                <TableHead
                  key={header.id}
                  style={{
                    minWidth: header.column.columnDef.minSize,
                    maxWidth: header.column.columnDef.maxSize,
                    width: header.column.columnDef.size,
                  }}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table
              .getRowModel()
              .rows.map((row) => (
                <AnimatedTableRow
                  key={row.id}
                  row={row}
                  noBottomBorder={noBottomBorder}
                  rowClassName={rowClassName}
                />
              ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={columns.length}
                className={cn("text-muted-foreground h-24 text-center text-xs")}
              >
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

function AnimatedTableRow<TData>({
  row,
  noBottomBorder,
  rowClassName,
}: {
  row: Row<TData>;
  noBottomBorder?: boolean;
  rowClassName?: string | ((row: TData) => string);
}) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0,
    delay: 100,
  });

  const MotionTableCell = useMemo(() => motion.create(TableCell), []);

  return (
    <TableRow
      ref={ref}
      data-state={row.getIsSelected() && "selected"}
      className={cn(
        "border-border",
        noBottomBorder && "border-b-0",
        row.getCanExpand() && "border-border/50 border-t",
        typeof rowClassName === "function"
          ? rowClassName(row.original)
          : rowClassName,
      )}
    >
      {row.getVisibleCells().map((cell) => (
        <MotionTableCell
          key={cell.id}
          style={{
            minWidth: cell.column.columnDef.minSize,
            maxWidth: cell.column.columnDef.maxSize,
            width: cell.column.columnDef.size,
          }}
          variants={dataTableRowVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {flexRender(cell.column.columnDef.cell, cell.getContext())}
        </MotionTableCell>
      ))}
    </TableRow>
  );
}
