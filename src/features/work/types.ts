import { Tags } from "@/src/components/TagsAnimatedList/TagsAnimatedList";
import { Flame, LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export type WorkByYear = {
  [year: string]: Work[];
};

export type WorkWithSubRows = Work & {
  subRows?: Work[];
};

export type Work = {
  project: WorkProject;
  date: string;
};

export type WorkProject = {
  name: string;
  company?: {
    companyName: string;
  };
  tags: Tags[];
  link?: string;
  label: WorkLabels;
};

export type WorkLabels =
  | "majorContribution"
  | "minorContribution"
  | "sideProject"
  | "normal";

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
  normal: {
    name: "Regular",
    className: "text-primary/70",
    weight: 0,
  },
};
