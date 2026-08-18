import InlineLink from "@/components/InlineLink/InlineLink";
import { StaggeredContainer } from "@/features/framer-animations/components/StaggeredContainer";
import { WorkItem } from "@/features/work-experience/WorkAccordionItem";

export const WORK_EXPERIENCE_DATA: WorkItem[] = [
  {
    logoUrl: "/logos/metal_logo_long.svg",
    logoWidth: 50,
    logoHeight: 50,
    companyName: "Metal",
    companyUrl: "https://metal.com",
    jobTitle: "Software Engineer (Early Hire)",
    from: "September 18, 2023",
    to: null,
    current: true,
    content: (
      <StaggeredContainer
        containerClassName="flex flex-col gap-8"
        delayChildren={0.07}
      >
        <p>
          <InlineLink href="https://metal.so">Metal</InlineLink> grants
          superpowers to Founders for Fundraising. It is pretty cool, check it
          out at <InlineLink href="https://metal.so">metal.so</InlineLink>.
        </p>

        <div className="flex flex-col gap-1.5">
          <span className="text-primary/15 text-xl leading-none font-black">
            Highlights
          </span>
          <p className="flex flex-col gap-2">
            <span>
              An early hire at Metal. I operate as a{" "}
              <span className="text-primary">Product Engineer</span>,
              contributing to design, UX, Frontend, Backend and Product side of
              things.
            </span>

            <span>
              I put myself wherever the system needs me. I remove blockers,
              improve the fluidity of our systems, and spend my free time fixing
              things — sharpening DevX and UX as I go.
            </span>
          </p>
        </div>

        <div className="flex flex-col gap-1.5">
          <span className="text-primary/15 text-xl leading-none font-black">
            Stack
          </span>
          <span>
            NextJS, ReactJs, Typescript, Tailwind, React-Query, Zustand, NestJS,
            Postgres, Redis
          </span>
        </div>
      </StaggeredContainer>
    ),
  },
  {
    logoUrl: "/logos/10p_logo.png",
    logoWidth: 62,
    logoHeight: 62,
    companyName: "10Pearls",
    companyUrl: "https://10pearls.com",
    jobTitle: "Software Engineer",
    content: (
      <StaggeredContainer
        containerClassName="flex flex-col gap-8"
        delayChildren={0.07}
      >
        <p>
          <InlineLink href="https://10pearls.com/">10Pearls</InlineLink> is a US
          based software development company that builds custom software
          solutions for businesses.
        </p>

        <div className="flex flex-col gap-1.5">
          <span className="text-primary/15 text-xl leading-none font-black">
            Highlights
          </span>
          <p className="flex flex-col gap-2">
            <span>
              Worked on{" "}
              <InlineLink href="https://zeacon.com/">Zeacon</InlineLink>, a
              browser based streaming service startup from the US, as an
              Associate Frontend Engineer. I started dealing with the client
              directly within the first 2 months and then got promoted to
              Software Engineer within 5 months.
            </span>

            <span>
              Created a sizeable analytics dashboard (similar to Youtube&apos;s
              analytics) using NewRelic and FingerprintJS. Led the Frontend
              development of this feature alongside the data side of things.
              Rewrote a complex Drag-and-Drop-on-canvas feature in library-style
              code to allow existing and future engineers to just use the code
              like an interface to extend and modify the functionality.
            </span>
          </p>
        </div>

        <div className="flex flex-col gap-1.5">
          <span className="text-primary/15 text-xl leading-none font-black">
            Stack
          </span>
          <span>
            NextJS, ReactJs, Typescript, MaterialUI, Redux, NewRelic,
            FingerprintJS
          </span>
        </div>
      </StaggeredContainer>
    ),
    from: "June 6, 2022",
    to: "September 12, 2023",
  },
];
