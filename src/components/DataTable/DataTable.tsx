"use client";
import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  Row,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/src/components/DataTable/table";
import { dataTableRowVariants } from "@/src/features/framer-animations/variants";
import { cn } from "@/src/lib/utils";
import { Dispatch, SetStateAction, useMemo } from "react";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  isFirstColumnSticky?: boolean;
  sortingState?: SortingState;
  setSortingState?: Dispatch<SetStateAction<SortingState>>;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  sortingState,
  setSortingState,
  isFirstColumnSticky,
}: DataTableProps<TData, TValue>) {
  const isSortingEnabled = Boolean(setSortingState) && Boolean(sortingState);

  const table = useReactTable({
    data,
    columns,
    defaultColumn: undefined,
    getCoreRowModel: getCoreRowModel(),
    ...(isSortingEnabled && {
      onSortingChange: setSortingState,
      getSortedRowModel: getSortedRowModel(),
    }),
    state: {
      ...(isSortingEnabled && {
        sorting: sortingState,
      }),
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    isMultiSortEvent: (_e) => true, // bypassess the requirement of pressing a modifier key to trigger a multi sort. This makes sure that multi sort gets triggered on regular click.
    enableMultiSort: true,
    maxMultiSortColCount: 2, // max 2 columns can be multi sorted at the same time
    enableMultiRemove: false, // disable the ability to remove multi-sorts
    enableSortingRemoval: false, // disable the ability to remove sorting on columns (always none -> asc -> desc -> asc)
  });

  return (
    <div className="rounded-md border border-border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow
              key={headerGroup.id}
              className="border-border bg-muted/40"
            >
              {headerGroup.headers.map((header) => (
                <TableHead
                  key={header.id}
                  className="font-semibold text-muted-foreground/70"
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
                        header.getContext()
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
                  isFirstColumnSticky={isFirstColumnSticky}
                />
              ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={columns.length}
                className={cn("h-24 text-center text-xs text-muted-foreground")}
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
  isFirstColumnSticky,
}: {
  row: Row<TData>;
  isFirstColumnSticky?: boolean;
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
      className={cn("border-border")}
    >
      {row.getVisibleCells().map((cell, cellIndex) => (
        <MotionTableCell
          key={cell.id}
          style={{
            minWidth: cell.column.columnDef.minSize,
            maxWidth: cell.column.columnDef.maxSize,
            width: cell.column.columnDef.size,
          }}
          className={cn(
            "p-3 align-middle",
            !cellIndex && isFirstColumnSticky && "border border-r"
          )}
          variants={dataTableRowVariants}
          initial={"hidden"}
          animate={inView ? "visible" : "hidden"}
        >
          {flexRender(cell.column.columnDef.cell, cell.getContext())}
        </MotionTableCell>
      ))}
    </TableRow>
  );
}
