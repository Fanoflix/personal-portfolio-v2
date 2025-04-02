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
  | "highImpact"
  | "majorContribution"
  | "minorContribution"
  | "sideProject";

export type WorkLabel = {
  name: string;
  className: string;
  weight: number;
};

export const WORK_LABELS: Record<WorkLabels, WorkLabel> = {
  highImpact: {
    name: "High Impact",
    className: "border border-orange-500/20 text-orange-400 bg-orange-500/5",
    weight: 4,
  },
  majorContribution: {
    name: "Major Contribution",
    className: "border border-purple-800/20 text-purple-400 bg-purple-800/5",
    weight: 3,
  },
  minorContribution: {
    name: "Minor Contribution",
    className: "border border-blue-600/20 text-blue-400 bg-blue-600/5",
    weight: 2,
  },
  sideProject: {
    name: "Side Project",
    className: "border border-green-600/20 text-green-400 bg-green-600/5",
    weight: 1,
  },
};
