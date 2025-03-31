"use client";

import { DataTable } from "@/src/components/DataTable/DataTable";
import { SortingState } from "@tanstack/react-table";
import { useState } from "react";
import { columns } from "./columns";
import { Work } from "./types";

const MOCK_DATA: Work[] = [
  {
    id: "work-1",
    project: {
      id: "work-project-abc",
      name: "23asdasdasdasdasdasdasdas das dasd asd asdasd a scv sdv sdv sdv sdv sdv4",
      label: "sideProject",
    },
    year: 2023,
  },
  {
    id: "work-2",
    project: {
      id: "work-project-abc",
      name: "caasd asd asd asd asczxc bvfgdg ",
      label: "highImpact",
    },
    year: 2022,
  },
  {
    id: "work-3",
    project: {
      id: "work-project-abc",
      name: "abvdfhg dfhdf hfdh hf bv",
      label: "sideProject",
    },
    year: 2024,
  },
  {
    id: "work-4",
    project: {
      id: "work-project-abc",
      name: "asd ",
      label: "sideProject",
    },
    year: 2023,
  },
  {
    id: "work-5",
    project: {
      id: "work-project-abc",
      name: "234",
      label: "minorContribution",
    },
    year: 2022,
  },
  {
    id: "work-6",
    project: {
      id: "work-project-abc",
      name: "TRest",
      label: "highImpact",
    },
    year: 2024,
  },
  {
    id: "work-7",
    project: {
      id: "work-project-abc",
      name: "TRest",
      label: "highImpact",
    },
    year: 2024,
  },
  {
    id: "work-8",
    project: {
      id: "work-project-abc",
      name: "asd ",
      label: "majorContribution",
    },
    year: 2021,
  },
  {
    id: "work-9",
    project: {
      id: "work-project-abc",
      name: "TRest",
      label: "sideProject",
    },
    year: 2024,
  },
  {
    id: "work-10",
    project: {
      id: "work-project-abc",
      name: "234",
      label: "sideProject",
    },
    year: 2023,
  },
  {
    id: "work-11",
    project: {
      id: "work-project-abc",
      name: "TRest",
      label: "highImpact",
    },
    year: 2022,
  },
  {
    id: "work-12",
    project: {
      id: "work-project-abc",
      name: "234",
      label: "highImpact",
    },
    year: 2024,
  },
  {
    id: "work-13",
    project: {
      id: "work-project-abc",
      name: "asd",
      label: "minorContribution",
    },
    year: 2022,
  },
  {
    id: "work-14",
    project: {
      id: "work-project-abc",
      name: "ca",
      label: "sideProject",
    },
    year: 2023,
  },
  {
    id: "work-15",
    project: {
      id: "work-project-abc",
      name: "asd",
      label: "sideProject",
    },
    year: 2024,
  },
  {
    id: "work-16",
    project: {
      id: "work-project-abc",
      name: "TRest",
      label: "minorContribution",
    },
    year: 2024,
  },
  {
    id: "work-17",
    project: {
      id: "work-project-abc",
      name: "asd",
      label: "sideProject",
    },
    year: 2024,
  },
  {
    id: "work-18",
    project: {
      id: "work-project-abc",
      name: "asd",
      label: "sideProject",
    },
    year: 2024,
  },
  {
    id: "work-19",
    project: {
      id: "work-project-abc",
      name: "234",
      label: "minorContribution",
    },
    year: 2023,
  },
  {
    id: "work-20",
    project: {
      id: "work-project-abc",
      name: "asd ",
      label: "majorContribution",
    },
    year: 2021,
  },
  {
    id: "work-21",
    project: {
      id: "work-project-abc",
      name: "TRest",
      label: "sideProject",
    },
    year: 2023,
  },
  {
    id: "work-22",
    project: {
      id: "work-project-abc",
      name: "TRest",
      label: "minorContribution",
    },
    year: 2022,
  },
  {
    id: "work-23",
    project: {
      id: "work-project-abc",
      name: "asd",
      label: "highImpact",
    },
    year: 2021,
  },
  {
    id: "work-24",
    project: {
      id: "work-project-abc",
      name: "asd",
      label: "highImpact",
    },
    year: 2024,
  },
  {
    id: "work-25",
    project: {
      id: "work-project-abc",
      name: "abvbv",
      label: "sideProject",
    },
    year: 2021,
  },
];

export default function Page() {
  const [sortingState, setSortingState] = useState<SortingState>([
    {
      desc: true,
      id: "year",
    },
    {
      desc: true,
      id: "label",
    },
  ]);
  console.log(sortingState);

  if (!MOCK_DATA || !MOCK_DATA.length) {
    return <p>....</p>;
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-semibold mb-6">Payments</h1>
      <DataTable
        columns={columns}
        data={MOCK_DATA}
        sortingState={sortingState}
        setSortingState={setSortingState}
        isFirstColumnSticky
      />
    </div>
  );
}
