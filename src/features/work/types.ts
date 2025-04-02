import { FlameIcon, LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export type Work = {
  id: string;
  project: WorkProject;
  date: string;
};

export type WorkProject = {
  id: string;
  name: string;
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
    name: "High Impact",
    className: "p-1 h-7 text-orange-500 dark:text-orange-400",
    weight: 4,
    meta: {
      icon: FlameIcon,
      iconClassName: "iconGlow-orange text-orange-500 dark:text-orange-200",
    },
  },
  minorContribution: {
    name: "Minor Contribution",
    className: "p-1 h-7 text-blue-400",
    weight: 2,
    meta: {},
  },
  sideProject: {
    name: "Side Project",
    className: "p-1 h-7 text-green-400",
    weight: 1,
  },
};
