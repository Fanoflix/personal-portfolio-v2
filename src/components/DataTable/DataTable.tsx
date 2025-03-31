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
    defaultColumn: {
      minSize: 60,
      maxSize: 800,
    },
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

  /**
   * Instead of calling `column.getSize()` on every render for every header
   * and especially every data cell (very expensive),
   * we will calculate all column sizes at once at the root table level in a useMemo
   * and pass the column sizes down as CSS variables to the <table> element.
   */
  const columnSizeVars = useMemo(() => {
    const headers = table.getFlatHeaders();
    const colSizes: { [key: string]: number } = {};
    for (let i = 0; i < headers.length; i++) {
      const header = headers[i]!;
      colSizes[`--header-${header.id}-size`] = header.getSize();
      colSizes[`--col-${header.column.id}-size`] = header.column.getSize();
    }
    return colSizes;
  }, [table.getState().columnSizingInfo, table.getState().columnSizing]);

  return (
    <div className="rounded-md border border-border">
      <Table
        style={{
          ...columnSizeVars,
        }}
      >
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow
              key={headerGroup.id}
              className="border-border bg-muted/40"
            >
              {headerGroup.headers.map((header) => {
                console.log(header.getContext());

                return (
                  <TableHead
                    key={header.id}
                    className="font-semibold text-muted-foreground/70"
                    style={{
                      // ...columnSizeVars,
                      width: `calc(var(--header-${header?.id}-size) * 1px)`,
                    }}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
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
    threshold: 0.2,
  });

  return (
    <TableRow
      ref={ref}
      data-state={row.getIsSelected() && "selected"}
      className="border-border"
    >
      {row.getVisibleCells().map((cell, cellIndex) => (
        <motion.td
          key={cell.id}
          className={cn(
            "p-3 align-middle",
            !cellIndex && isFirstColumnSticky && "border border-r"
          )}
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
        >
          {flexRender(cell.column.columnDef.cell, cell.getContext())}
        </motion.td>
      ))}
    </TableRow>
  );
}
