"use client";
import { useTheme } from "next-themes";
import * as React from "react";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const tableContainerRef = useRef<HTMLDivElement>(null);
  const [showFiller, setShowFiller] = useState(true);
  const [fillerHeight, setFillerHeight] = useState(0);
  const [, setMounted] = useState(false);
  const fillerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Check if we need to show the filler div
  useEffect(() => {
    const updateFiller = () => {
      if (!containerRef.current || !tableContainerRef.current) {
        return;
      }

      const containerHeight = 800; // Minimum container height
      const tableHeight = tableContainerRef.current.offsetHeight;

      if (tableHeight >= containerHeight) {
        setShowFiller(false);
      } else {
        setShowFiller(true);
        setFillerHeight(containerHeight - tableHeight);
      }
    };

    // Run initially and add resize listener
    updateFiller();
    window.addEventListener("resize", updateFiller);

    // Create a MutationObserver to watch for changes in the table content
    const observer = new MutationObserver(updateFiller);
    if (tableContainerRef.current) {
      observer.observe(tableContainerRef.current, {
        childList: true,
        subtree: true,
        attributes: true,
      });
    }

    return () => {
      window.removeEventListener("resize", updateFiller);
      observer.disconnect();
    };
  }, []);

  const lineColor = theme === "dark" ? "rgb(25, 25, 25)" : "rgb(200, 200, 200)";

  // Force correct style application using useEffect
  useEffect(() => {
    if (fillerRef.current && showFiller) {
      const correctStyle = `repeating-linear-gradient(
        45deg,
        ${lineColor} 20px,
        transparent 21px,
        transparent 31px,
        ${lineColor} 32px
      )`;

      fillerRef.current.style.backgroundImage = correctStyle;
    }
  }, [lineColor, showFiller]);

  return (
    <div
      ref={containerRef}
      className="relative w-full"
      style={{ minHeight: "800px" }}
    >
      <div ref={tableContainerRef} className="overflow-auto">
        <table
          ref={ref}
          className={cn("w-full caption-bottom text-sm", className)}
          {...props}
        />
      </div>
      {showFiller && (
        <div
          ref={fillerRef}
          style={{
            height: `${fillerHeight}px`,
          }}
        />
      )}
    </div>
  );
});
Table.displayName = "Table";

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead ref={ref} className={cn("[&_tr]:border-b", className)} {...props} />
));
TableHeader.displayName = "TableHeader";

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn("[&_tr:last-child]:border-0", className)}
    {...props}
  />
));
TableBody.displayName = "TableBody";

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(
      "bg-muted/50 border-t font-medium last:[&>tr]:border-b-0",
      className,
    )}
    {...props}
  />
));
TableFooter.displayName = "TableFooter";

const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      "border-b",
      "hover:bg-muted/10 data-[state=selected]:bg-muted transition-colors",
      className,
    )}
    {...props}
  />
));
TableRow.displayName = "TableRow";

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      "text-muted-foreground/70 h-9 px-3 text-left align-middle font-medium [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      className,
    )}
    {...props}
  />
));
TableHead.displayName = "TableHead";

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn(
      "px-3 py-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      className,
    )}
    {...props}
  />
));
TableCell.displayName = "TableCell";

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn("text-muted-foreground mt-4 text-sm", className)}
    {...props}
  />
));
TableCaption.displayName = "TableCaption";

export {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
};
