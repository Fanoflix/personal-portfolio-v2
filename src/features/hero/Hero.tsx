import InlineImageWithTooltip from "@/src/components/InlineImageWithTooltip/InlineImageWithTooltip";
import InlineLink from "@/src/components/InlineLink/InlineLink";
import { StaggeredContainer } from "../framer-animations/components/StaggeredContainer";

export default function Hero() {
  return (
    <StaggeredContainer
      stagger={0.1}
      containerClassName="flex flex-col gap-7 w-full md:w-3/4 text-pretty"
    >
      <h1 className="flex flex-wrap items-end leading-[0.9] font-black text-primary drop-shadow-md">
        Ammar
        <span className="text-primary/15 leading-[0.9]">.</span>
        <span className="text-primary/15 leading-[0.9]">Engineer.</span>
        <span className="text-primary/10 leading-[0.9]">Communicator.</span>
        <span className="text-primary/5 leading-[0.9]">Product.</span>
        <span className="text-primary/5 leading-[0.9]">Designer.</span>
      </h1>

      <p>
        26y. Software Engineer. Full stack — focused on the Frontend. Working at{" "}
        <InlineLink href="https://www.metal.so/">Metal (YC W23)</InlineLink>.
      </p>

      <p>
        Passionate about Product engineering; a blend of design, engineering,
        and business. Currently working with a high-performing team possessing a
        hyper-bias for action. I aim to lead any organization I work for to
        greater heights.
      </p>

      <p>
        Using AI smartly and efficiently is one of my core beliefs within
        engineering.
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
        />
        . I am into{" "}
        <InlineLink href="https://www.instagram.com/fanoflix.art/">
          sketching
        </InlineLink>{" "}
        as well.
      </p>

      <p>
        I mentor and give advice at{" "}
        <InlineLink href="https://topmate.io/ammarnasir/">Topmate</InlineLink>{" "}
        for free. Leave a message, let&apos;s talk.
      </p>
    </StaggeredContainer>
  );
}
