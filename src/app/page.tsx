"use client";

import InlineImageWithTooltip from "../components/InlineImageWithTooltip/InlineImageWithTooltip";
import InlineLink from "../components/InlineLink/InlineLink";
import MyLogo from "../components/MyLogo/MyLogo";
import { StaggeredContainer } from "../features/framer-animations/components/StaggeredContainer";
import Hero from "../features/hero/Hero";
import { cn } from "../lib/utils";
import WorkPage from "./work/page";

export default function Home() {
  return (
    <div className={cn("py-12 md:py-24 px-2")}>
      <StaggeredContainer>
        <Hero />
      </StaggeredContainer>
    </div>
  );
}
