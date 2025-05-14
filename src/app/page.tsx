"use client";

import InlineImageWithTooltip from "../components/InlineImageWithTooltip/InlineImageWithTooltip";
import InlineLink from "../components/InlineLink/InlineLink";
import MyLogo from "../components/MyLogo/MyLogo";
import { StaggeredContainer } from "../features/framer-animations/components/StaggeredContainer";
import { cn } from "../lib/utils";

export default function Home() {
  return (
    <div className={cn("py-12 md:py-24 px-2")}>
      <StaggeredContainer containerClassName="flex flex-col gap-5 w-full md:w-2/3 text-pretty">
        <p>
          I am Ammar. 25y. Software Engineer, focused on the Frontend. Working
          at a{" "}
          <InlineLink href="https://www.ycombinator.com/">
            YC Tech Startup W23
          </InlineLink>
          .
        </p>

        <p>
          Currently in stealth mode. Passionate about writing efficient,
          readable, and well-structured code. Currently working with a
          high-performing team with a hyper-bias for action. I aim to lead any
          organization I work for to greater heights. I play
          <InlineImageWithTooltip
            alt="Diablo"
            src="/icons/diablo4.png"
            tooltipContent="Diablo 4"
          />{" "}
          and{" "}
          <InlineImageWithTooltip
            alt="World of Warcraft"
            src="/icons/wow100x100.png"
            tooltipContent="World of Warcraft"
          />
          .
        </p>

        <p>
          Also, I am into{" "}
          <InlineLink href="https://www.instagram.com/fanoflix.art/">
            sketching
          </InlineLink>
          . Leave a message, let&apos;s talk.
        </p>
      </StaggeredContainer>
    </div>
  );
}
