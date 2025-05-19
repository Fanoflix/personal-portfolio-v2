"use client";

import { StaggeredContainer } from "../features/framer-animations/components/StaggeredContainer";
import Hero from "../features/hero/Hero";
import WorkExperience from "../features/work-experience/WorkExperience";
import { cn } from "../lib/utils";
import WorkPage from "./work/page";

export default function Home() {
  return (
    <div className={cn("py-16 md:py-24 px-2")}>
      <StaggeredContainer
        containerClassName="flex flex-col gap-32"
        stagger={0.8}
      >
        <Hero />
        <WorkExperience />
        <WorkPage />
      </StaggeredContainer>
    </div>
  );
}
