import InlineImageWithTooltip from "@/src/components/InlineImageWithTooltip/InlineImageWithTooltip";
import InlineLink from "@/src/components/InlineLink/InlineLink";
import { StaggeredContainer } from "../framer-animations/components/StaggeredContainer";

export default function Hero() {
  return (
    <StaggeredContainer containerClassName="flex flex-col gap-7 w-full md:w-4/6 text-pretty">
      <h1 className="flex flex-col items-start leading-[0.6] font-black text-primary">
        Ammar.
        <div className="flex flex-wrap">
          <span className="text-primary/15 leading-[0.9]">Engineer.</span>
          <span className="text-primary/10 leading-[0.9]">Product.</span>
          <span className="text-primary/5 leading-[0.9]">Communicator.</span>
          <span className="text-primary/5 leading-[0.9]">Designer.</span>
        </div>
      </h1>

      <p>
        26y. Software Engineer. Full stack — focused on the Frontend. Working at{" "}
        <InlineLink href="https://www.metal.so/">Metal (YC W23)</InlineLink>.
      </p>

      <p>
        I build products, bringing together design, engineering, and the
        business side of things; (
        <b className="text-primary font-medium text-nowrap">
          Product engineering
        </b>
        ). I'm currently working with a great team at{" "}
        <a className="text-primary font-medium" href="#work-experience-Metal">
          Metal
        </a>
        . I always aim to help the places I work reach their full potential, and
        I strongly believe in using AI smartly in engineering to do that.
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
