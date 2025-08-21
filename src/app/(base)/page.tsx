"use client";

import { StaggeredContainer } from "@/src/features/framer-animations/components/StaggeredContainer";
import Hero from "@/src/features/hero/Hero";
import WorkExperience from "@/src/features/work-experience/WorkExperience";
import WorkPage from "@/src/features/work/WorkPage";
import { cn } from "@/src/lib/utils";

export default function Home() {
  return (
    <div className={cn("py-16 md:py-24 px-2")} id="home">
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
