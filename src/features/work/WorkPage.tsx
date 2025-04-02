"use client";

import { DataTable } from "@/src/components/DataTable/DataTable";
import { SortingState } from "@tanstack/react-table";
import { useState } from "react";
import { StaggeredContainer } from "../framer-animations/components/StaggeredContainer";
import { columns } from "./columns";
import { Work } from "./types";
import WORK_DATA from "./work-data.json";

type WorkByYear = {
  [year: string]: Work[];
};

export type WorkWithSubRows = Work & {
  subRows?: Work[];
};

export default function Page() {
  const [sortingState, setSortingState] = useState<SortingState>([
    {
      desc: true,
      id: "date",
    },
    {
      desc: true,
      id: "category",
    },
  ]);

  // Process the data to create a hierarchical structure with years as parent rows
  const processedData: WorkWithSubRows[] = Object.entries(
    WORK_DATA as WorkByYear
  ).map((yearData) => {
    const entries = yearData[1];
    // Use the first entry of each year as the parent
    const parentRow: WorkWithSubRows = { ...entries[0] };

    // Add all other entries as subRows (excluding the first one which is the parent)
    if (entries.length > 1) {
      parentRow.subRows = entries.slice(1);
    }

    return parentRow;
  });

  if (!processedData.length) {
    return <p>....</p>;
  }

  return (
    <div className="container mx-auto py-10">
      <StaggeredContainer containerClassName="flex flex-col gap-4">
        <h1 className="text-2xl font-semibold">Work</h1>

        <p>This is some of my life&apos;s work, laid bare in a table.</p>

        <DataTable
          columns={columns}
          data={processedData}
          sortingState={sortingState}
          setSortingState={setSortingState}
          noBottomBorder
          // rowClassName={(row) =>
          //   Boolean(row.project.label === "highImpact") ? "bg-purple-200/5" : ""
          // }
        />
      </StaggeredContainer>
    </div>
  );
}
