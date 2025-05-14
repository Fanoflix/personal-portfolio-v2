"use client";

import { DataTable } from "@/src/components/DataTable/DataTable";
import { SortingState } from "@tanstack/react-table";
import { useMemo, useState } from "react";
import { StaggeredContainer } from "../framer-animations/components/StaggeredContainer";
import { columns } from "./columns";
import { FiltersBar } from "./FiltersBar";
import { Work } from "./types";
import WORK_DATA from "./work-data.json";

type WorkByYear = {
  [year: string]: Work[];
};

export type WorkWithSubRows = Work & {
  subRows?: Work[];
};

export default function WorkPage() {
  const {
    processedData,
    sortingState,
    setSortingState,
    filterState,
    setFilterState,
  } = useWorkData();

  if (!processedData.length) {
    return <p>....</p>;
  }

  return (
    <div className="container mx-auto py-10 pt-24">
      <StaggeredContainer containerClassName="flex flex-col gap-4">
        <h1 className="text-2xl font-semibold">Work</h1>

        <p>This is some of my life&apos;s work, laid bare in a table.</p>

        <FiltersBar
          setFilterState={setFilterState}
          activeFilter={filterState}
        />

        <DataTable
          columns={columns}
          data={processedData}
          sortingState={sortingState}
          setSortingState={setSortingState}
          noBottomBorder
          // TODO: Gather feedback on this.
          // rowClassName={(row) =>
          //   Boolean(row.project.label === "majorContribution")
          //     ? "bg-gradient-to-r from-orange-900/20 via-50% via-orange-900/5 to-transparent"
          //     : ""
          // }
        />
      </StaggeredContainer>
    </div>
  );
}

function useWorkData() {
  const [sortingState, setSortingState] = useState<SortingState>([
    {
      id: "date",
      desc: true,
    },
  ]);

  const [filterState, setFilterState] = useState<string>("");

  // Process the data to create a hierarchical structure with years as parent rows
  const allProcessedData: WorkWithSubRows[] = useMemo(() => {
    // First sort the entries within each year by date (descending)
    const sortedData = Object.entries(WORK_DATA as WorkByYear).map(
      ([year, entries]) => {
        // Sort entries by date descending
        const sortedEntries = [...entries].sort((a, b) => {
          const dateA = new Date(a.date);
          const dateB = new Date(b.date);
          return dateB.getTime() - dateA.getTime();
        });

        return [year, sortedEntries] as [string, Work[]];
      },
    );

    // Sort the years descending (2025, 2024, etc.)
    sortedData.sort((a, b) => Number(b[0]) - Number(a[0]));

    // Process into hierarchical structure
    return sortedData.map((yearData) => {
      const entries = yearData[1];
      // Use the first entry of each year as the parent
      const parentRow: WorkWithSubRows = { ...entries[0] };

      // Add all other entries as subRows (excluding the first one which is the parent)
      if (entries.length > 1) {
        parentRow.subRows = entries.slice(1);
      }

      return parentRow;
    });
  }, []);

  // Apply year filtering if a filterState is set
  const processedData = useMemo(() => {
    if (!filterState) return allProcessedData;

    return allProcessedData.filter((row) => {
      // Check if the year in the date matches the filter
      if (row.date?.includes(filterState)) return true;

      // Also check subrows if present
      if (row.subRows?.some((subRow) => subRow.date?.includes(filterState))) {
        // If any subrows match, filter those subrows and keep the parent
        const filteredSubRows = row.subRows.filter((subRow) =>
          subRow.date?.includes(filterState),
        );

        return { ...row, subRows: filteredSubRows };
      }

      return false;
    });
  }, [allProcessedData, filterState]);

  return {
    processedData,
    sortingState,
    setSortingState,
    filterState,
    setFilterState,
  };
}
