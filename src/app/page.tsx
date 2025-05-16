"use client";

import { StaggeredContainer } from "../features/framer-animations/components/StaggeredContainer";
import Hero from "../features/hero/Hero";
import WorkExperience from "../features/work-experience/WorkExperience";
import { cn } from "../lib/utils";

export default function Home() {
  return (
    <div className={cn("py-12 md:py-24 px-2")}>
      <StaggeredContainer stagger={0.8}>
        <Hero />
        <WorkExperience />
      </StaggeredContainer>
    </div>
  );
}
