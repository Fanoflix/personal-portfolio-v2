"use client";

import ExtrasFooter from "@/features/extras/ExtrasFooter";
import { StaggeredContainer } from "@/features/framer-animations/components/StaggeredContainer";
import Hero from "@/features/hero/Hero";
import WorkPage from "@/features/work/WorkPage";
import WorkExperience from "@/features/work-experience/WorkExperience";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className={cn("px-2 pt-16 md:pt-24")} id="home">
      <StaggeredContainer
        containerClassName="flex flex-col gap-32"
        stagger={0.8}
      >
        <Hero />
        <WorkExperience />
        <WorkPage />
      </StaggeredContainer>

      {/* Outside the stagger: at 0.8s a step it would arrive long after
          everything above it, and this is meant to already be there when you
          reach the bottom rather than to make an entrance. */}
      <ExtrasFooter />
    </div>
  );
}
