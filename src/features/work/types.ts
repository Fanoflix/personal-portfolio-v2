import { Flame, LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export type Work = {
  id: string;
  project: WorkProject;
  date: string;
};

export type WorkProject = {
  id: string;
  name: string;
  company?: {
    companyName: string;
  };
  link?: string;
  label: WorkLabels;
};

export type WorkLabels =
  | "majorContribution"
  | "minorContribution"
  | "sideProject";

export type WorkLabel = {
  name: string;
  weight: number;
  className?: string;
  meta?: {
    iconClassName?: string;
    icon?: ForwardRefExoticComponent<
      Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
    >;
  };
};

export const WORK_LABELS: Record<WorkLabels, WorkLabel> = {
  majorContribution: {
    name: "Major Contribution",
    className: "text-amber-500",
    weight: 4,
    meta: {
      icon: Flame,
      iconClassName: "dark:iconGlow-orange text-amber-500",
    },
  },
  minorContribution: {
    name: "Minor Contribution",
    className: "text-blue-500",
    weight: 2,
    meta: {},
  },
  sideProject: {
    name: "Side Project",
    className: "text-green-500",
    weight: 1,
  },
};

export const WORK_COMPANY_TOOLTIP_TEXT: Record<string, string> = {
  Metal:
    "While working at Metal, I was the second Frontend-focused hire. I operated as a 'product engineer', contributing to design, UX, Frontend, Backend and Product side of things.",
};
