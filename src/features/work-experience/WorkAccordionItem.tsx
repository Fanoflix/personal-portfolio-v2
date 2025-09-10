import Image from "next/image";
import { JSX } from "react";

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/Accordion/Accordion";
import { cn } from "@/lib/utils";

function formatDate(dateString: string | null): string {
  if (!dateString) {
    return "Present";
  }
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

export type WorkItem = {
  logoUrl: string;
  logoWidth: number;
  logoHeight: number;
  companyName: string;
  companyUrl: string;
  content: JSX.Element | string;
  from: string;
  to: string | null;
  current?: boolean;
  jobTitle: string;
};

export type WorkAccordionItemProps = {
  workItem: WorkItem;
};

export default function WorkAccordionItem({
  workItem,
}: WorkAccordionItemProps) {
  return (
    <div>
      <AccordionItem
        className={cn(
          "via-primary/8 from-transparent via-[0.4%] to-transparent to-30% data-[state=open]:bg-linear-to-br",
          "data-[state=open]:border-primary border-b-0 border-l border-transparent transition-all",
        )}
        value={workItem.companyName}
      >
        <AccordionTrigger className={cn("h-18 w-full px-3 text-xs md:text-sm")}>
          <div className="flex h-max w-full items-center justify-start gap-2">
            <a
              className="flex h-full min-w-[60px] items-center justify-center md:min-w-[90px]"
              target="_blank"
              href={workItem.companyUrl}
            >
              <Image
                src={workItem.logoUrl}
                alt={workItem.companyName}
                width={workItem.logoWidth}
                height={workItem.logoHeight}
                className="dark:invert"
              />
            </a>

            <div className="flex h-max w-full items-center gap-2">
              <p className="text-primary flex items-center gap-3 md:gap-6">
                <span className="text-muted/60 via-primary h-12 w-px bg-linear-to-b from-transparent to-transparent" />{" "}
                {workItem.jobTitle}
              </p>

              {workItem.current && (
                <div className="min-h-2 min-w-2 rounded-full bg-green-500" />
              )}

              <p className="text-primary/30">
                {formatDate(workItem.from)} - {formatDate(workItem.to)}
              </p>
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className="text-text px-6 py-6 pl-8 text-[14px]">
          {workItem.content}
        </AccordionContent>
      </AccordionItem>
    </div>
  );
}
