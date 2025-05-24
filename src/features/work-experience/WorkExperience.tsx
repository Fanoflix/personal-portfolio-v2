import { Accordion } from "@/src/components/Accordion/Accordion";
import React from "react";
import WorkAccordionItem, { WorkItem } from "./WorkAccordionItem";
import InlineLink from "@/src/components/InlineLink/InlineLink";
import { StaggeredContainer } from "../framer-animations/components/StaggeredContainer";

export const WORK_EXPERIENCE_DATA: WorkItem[] = [
  {
    logoUrl: "/logos/metal_logo_long.svg",
    logoWidth: 50,
    logoHeight: 50,
    companyName: "Metal",
    companyUrl: "https://metal.com",
    jobTitle: "Mid-Senior Software Engineer (Early Hire)",
    content: (
      <StaggeredContainer
        containerClassName="flex flex-col gap-8"
        delayChildren={0.07}
      >
        <p>
          <InlineLink href="https://metal.so">Metal</InlineLink> provides
          founders with precise data to identify best-fit investors and
          accelerate their fundraising journey. It's pretty cool, check it out
          at <InlineLink href="https://metal.so">metal.so</InlineLink>.
        </p>

        <div className="flex flex-col gap-1.5">
          <span className="text-primary/10 text-xl leading-[1] font-black">
            Highlights
          </span>
          <p className="flex flex-col gap-2">
            <span>
              As the second Frontend-focused hire at Metal, I operate as a
              <i>"product engineer"</i>, contributing to design, UX, Frontend,
              Backend and Product side of things.
            </span>

            <span>
              Built multi-step Auth + Onboarding flow from scratch with UX and
              performance in mind. Created core features across the application,
              such as search & CRM to name a few. Set standards throughout the
              team. Focused on providing a game-like user experience. Mentored
              engineers, conducted code reviews, and held high-quality
              interviews.
            </span>
          </p>
        </div>

        <div className="flex flex-col gap-1.5">
          <span className="text-primary/10 text-xl leading-[1] font-black">
            Stack
          </span>
          <span className="text-primary">
            NextJS, ReactJs, Typescript, Tailwind, React-Query, Zustand, NestJS,
            Postgres, Redis
          </span>
        </div>
      </StaggeredContainer>
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
    content: (
      <StaggeredContainer
        containerClassName="flex flex-col gap-8"
        delayChildren={0.07}
      >
        <p>
          <InlineLink href="https://10pearls.com/">10Pearls</InlineLink> is a US
          based software development company that builds custom software
          solutions for businesses.
        </p>

        <div className="flex flex-col gap-1.5">
          <span className="text-primary/10 text-xl leading-[1] font-black">
            Highlights
          </span>
          <p className="flex flex-col gap-2">
            <span>
              Worked on{" "}
              <InlineLink href="https://zeacon.com/">Zeacon</InlineLink>, a
              browser based streaming service startup from the US, as an
              Associate Frontend Engineer. I started dealing with the client
              directly within the first 2 months and then got promoted to
              Software Engineer within 5 months.
            </span>

            <span>
              Created a sizeable analytics dashboard (similar to Youtube's
              analytics) using NewRelic and FingerprintJS. Led the Frontend
              development of this feature alongside the data side of things.
              Rewrote a complex Drag-and-Drop-on-canvas feature in library-style
              code to allow existing and future engineers to just use the code
              like an interface to extend and modify the functionality.
            </span>
          </p>
        </div>

        <div className="flex flex-col gap-1.5">
          <span className="text-primary/10 text-xl leading-[1] font-black">
            Stack
          </span>
          <span className="text-primary">
            NextJS, ReactJs, Typescript, MaterialUI, Redux, NewRelic,
            FingerprintJS
          </span>
        </div>
      </StaggeredContainer>
    ),
    from: "June 6, 2022",
    to: "September 12, 2023",
  },
];

export default function WorkExperience() {
  return (
    <div className="flex flex-col gap-7 w-full md:w-3/4">
      <h1 className="flex flex-col font-black leading-[0.65]">
        Experiences.
        <div className="flex flex-wrap">
          <span className="text-primary/15 leading-[0.95]">3 years.</span>
        </div>
      </h1>

      <p className="text-sm">
        You can expand or collapse each item for more details.
      </p>
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
