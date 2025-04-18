"use client";
import { useEffect, useState } from "react";
import InlineImageWithTooltip from "../components/InlineImageWithTooltip/InlineImageWithTooltip";
import InlineLink from "../components/InlineLink/InlineLink";
import MyLogo from "../components/MyLogo/MyLogo";
import { StaggeredContainer } from "../features/framer-animations/components/StaggeredContainer";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="flex flex-col gap-24 items-center justify-center">
      <div className="flex flex-col gap-12 sm:w-[32rem] px-4 sm:px-0">
        <div className="flex items-center gap-12">
          <div>{isMounted && <MyLogo />}</div>
          <h2>Muhammad Ammar</h2>
        </div>

        <StaggeredContainer containerClassName="flex flex-col gap-5">
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
              src={"/icons/diablo4.png"}
              tooltipContent="Diablo 4"
            />{" "}
            and{" "}
            <InlineImageWithTooltip
              alt="World of Warcraft"
              src={"/icons/wow100x100.png"}
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
    </div>
  );
}
