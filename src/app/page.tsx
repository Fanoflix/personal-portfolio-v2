"use client";

import { StaggeredContainer } from "@/features/framer-animations/components/StaggeredContainer";
import Hero from "@/features/hero/Hero";
import WorkPage from "@/features/work/WorkPage";
import WorkExperience from "@/features/work-experience/WorkExperience";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className={cn("px-2 py-16 md:py-24")} id="home">
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
