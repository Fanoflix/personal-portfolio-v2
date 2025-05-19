import { Accordion } from "@/src/components/Accordion/Accordion";
import React from "react";
import WorkAccordionItem, { WorkItem } from "./WorkAccordionItem";

export const WORK_EXPERIENCE_DATA: WorkItem[] = [
  {
    logoUrl: "/logos/metal_logo_long.svg",
    logoWidth: 50,
    logoHeight: 50,
    companyName: "Metal",
    companyUrl: "https://metal.com",
    jobTitle: "Mid-Senior Software Engineer (Early Hire)",
    content: (
      <div className="flex flex-col gap-2">
        <p>
          Metal helps founders improve their fundraising odds by using data to
          identify suitable investors and provide real-time guidance.
        </p>
        <span>Created X</span>
        <span>Created X</span>
        <span>Created X</span>
      </div>
    ),
    from: "September 18, 2023",
    to: null,
    current: true,
  },
  {
    logoUrl: "/logos/10p_logo.png",
    logoWidth: 62,
    logoHeight: 62,
    companyName: "10Pearls",
    companyUrl: "https://10pearls.com",
    jobTitle: "Software Engineer",
    content:
      "10Pearls is a software development company that builds custom software solutions for businesses.",
    from: "June 6, 2022",
    to: "September 12, 2023",
  },
];

export default function WorkExperience() {
  return (
    <div className="flex flex-col w-full md:w-3/4">
      <h1 className="text-4xl font-black text-primary/10">Experiences.</h1>
      <Accordion
        type="single"
        className="flex flex-col gap-3"
        id={`work-experience-${WORK_EXPERIENCE_DATA[0].companyName}`}
        collapsible
        defaultValue={WORK_EXPERIENCE_DATA[0].companyName}
      >
        {WORK_EXPERIENCE_DATA.map((workItem) => (
          <WorkAccordionItem key={workItem.from} workItem={workItem} />
        ))}
      </Accordion>
    </div>
  );
}
