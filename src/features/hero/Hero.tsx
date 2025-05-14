import InlineImageWithTooltip from "@/src/components/InlineImageWithTooltip/InlineImageWithTooltip";
import InlineLink from "@/src/components/InlineLink/InlineLink";
import { StaggeredContainer } from "../framer-animations/components/StaggeredContainer";

export default function Hero() {
  return (
    <StaggeredContainer
      stagger={0.1}
      containerClassName="flex flex-col gap-5 w-full md:w-2/3 text-pretty"
    >
      <h1>
        Ammar{" "}
        <span className="text-muted text3xl inline-block font-black">;</span>
      </h1>

      <p>
        26y. Software Engineer. Full stack — focused on the Frontend. Working at{" "}
        <InlineLink href="https://www.metal.so/">Metal (YC W23)</InlineLink>.
        Currently in stealth.
      </p>

      <p>
        Passionate about writing efficient, readable, and well-structured code.
        Currently working with a high-performing team possessing a hyper-bias
        for action. I aim to lead any organization I work for to greater
        heights.
      </p>

      <p>
        Using AI smartly is one of the core values in my engineering routine.
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
        .
      </p>

      <p>
        Also, I am into{" "}
        <InlineLink href="https://www.instagram.com/fanoflix.art/">
          sketching
        </InlineLink>
        .
      </p>

      <p>Leave a message, let&apos;s talk.</p>
    </StaggeredContainer>
  );
}
