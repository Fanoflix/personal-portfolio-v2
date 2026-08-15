import { Accordion } from "@/components/Accordion/Accordion";
import { WORK_EXPERIENCE_DATA } from "@/lib/work-experience.constants";

import WorkAccordionItem from "./WorkAccordionItem";

export default function WorkExperience() {
  return (
    <div className="flex w-full flex-col gap-7">
      <h1 className="flex flex-col leading-[0.8] font-black">
        Experiences.
        <div className="flex flex-wrap">
          <span className="text-primary/25 leading-[0.75]">4+ years.</span>
        </div>
      </h1>

      <p className="text-sm">
        You can expand or collapse each item for more details.
      </p>
      <Accordion
        type="single"
        className="flex flex-col gap-3"
        id={`work-experience-${WORK_EXPERIENCE_DATA[0].companyName}`}
        collapsible
        defaultValue={WORK_EXPERIENCE_DATA[0].companyName}
      >
        {WORK_EXPERIENCE_DATA.map((workItem) => (
          <WorkAccordionItem key={workItem.from} workItem={workItem} />
        ))}
      </Accordion>
    </div>
  );
}
