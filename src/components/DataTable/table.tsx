import { cn } from "@/src/lib/utils";
import { useTheme } from "next-themes";
import * as React from "react";
import { useEffect, useRef, useState } from "react";

const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => {
  const { theme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const tableContainerRef = useRef<HTMLDivElement>(null);
  const [showFiller, setShowFiller] = useState(true);
  const [fillerHeight, setFillerHeight] = useState(0);

  // Check if we need to show the filler div
  useEffect(() => {
    const updateFiller = () => {
      if (!containerRef.current || !tableContainerRef.current) return;

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
      {showFiller && theme === "dark" ? (
        <div
          style={{
            height: `${fillerHeight}px`,
            backgroundImage: `repeating-linear-gradient(
            45deg,
            rgb(25, 25, 25) 20px,
            transparent 21px,
            transparent 27px,
            rgb(25, 25, 25) 28px
          )`,
          }}
        />
      ) : (
        <div
          style={{
            height: `${fillerHeight}px`,
            backgroundImage: `repeating-linear-gradient(
            45deg,
            rgb(220, 220, 220) 20px,
            transparent 21px,
            transparent 27px,
            rgb(220, 220, 220) 28px
          )`,
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
      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
      className
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
      "transition-colors hover:bg-muted/10 data-[state=selected]:bg-muted",
      className
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
      "h-9 px-2 text-left align-middle font-medium text-muted-foreground/70 [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      className
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
      "p-1 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      className
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
    className={cn("mt-4 text-sm text-muted-foreground", className)}
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
