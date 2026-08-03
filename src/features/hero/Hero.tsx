import InlineImageWithTooltip from "@/components/InlineImageWithTooltip/InlineImageWithTooltip";
import InlineLink from "@/components/InlineLink/InlineLink";

import { StaggeredContainer } from "../framer-animations/components/StaggeredContainer";

export default function Hero() {
  return (
    <StaggeredContainer containerClassName="flex flex-col gap-7 w-full text-pretty">
      <h1 className="text-primary flex flex-col items-start leading-[0.8] font-black">
        Ammar.
        {/* No z-index here on purpose: the h1's cut-out shadow relies on this
            block sitting *behind* the line above it, and a utility class would
            beat the base-layer rule that puts it there. */}
        <div className="flex flex-wrap">
          <span className="text-primary/25 leading-[0.85]">Engineer.</span>
          <span className="text-primary/25 leading-[0.85]">Frontend.</span>
          <span className="text-primary/15 leading-[0.85]">Product.</span>
          <span className="text-primary/10 leading-[0.85]">
            Communicator.
          </span>{" "}
          <span className="text-primary/10 leading-[0.85]">Designer.</span>
        </div>
      </h1>

      <p>
        Engineer. Full stack — focused on the Frontend. Working at{" "}
        <InlineLink href="https://www.metal.so/">Metal (YC W23)</InlineLink>.
      </p>

      <p>
        I am currently operating as a{" "}
        <b className="text-primary font-medium text-nowrap">Product Engineer</b>
        , which includes doing anything and everything possible
        (FE/BE/Product-thinking/Design) to flesh out the best work possible.
      </p>

      <p>
        I play
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
        />{" "}
        and am into{" "}
        <InlineLink href="https://www.instagram.com/fanoflix.art/">
          sketching
        </InlineLink>{" "}
        as well. I mentor and give advice on{" "}
        <InlineLink href="https://topmate.io/ammarnasir/">Topmate</InlineLink>{" "}
        for free. Leave a message, let&apos;s talk.
      </p>
    </StaggeredContainer>
  );
}
