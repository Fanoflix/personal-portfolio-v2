import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/src/components/Accordion/Accordion";
import { cn } from "@/src/lib/utils";
import Image from "next/image";

function formatDate(dateString: string | null): string {
  if (!dateString) return "Present";
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
          "data-[state=open]:bg-gradient-to-br from-transparent via-primary/[8%] via-[0.4%] to-[30%] to-transparent",
          "border-l border-transparent border-b-0 data-[state=open]:border-primary transition-all",
        )}
        value={workItem.companyName}
      >
        <AccordionTrigger className={cn("px-3 h-18 w-full text-xs md:text-sm")}>
          <div className="flex items-center justify-start gap-2 h-max w-full">
            <a
              className="flex items-center justify-center h-full min-w-[60px] md:min-w-[90px]"
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

            <div className="flex items-center h-max gap-2 w-full">
              <p className="flex items-center gap-3 md:gap-6 text-primary">
                <span className="text-muted/60 w-[1px] bg-gradient-to-b from-transparent via-primary to-transparent h-12" />{" "}
                {workItem.jobTitle}
              </p>

              {workItem.current && (
                <div className="min-w-2 min-h-2 bg-green-500 rounded-full" />
              )}

              <p className="text-primary/30">
                {formatDate(workItem.from)} - {formatDate(workItem.to)}
              </p>
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className="py-6 px-6 pl-8 text-text text-[14px]">
          {workItem.content}
        </AccordionContent>
      </AccordionItem>
    </div>
  );
}
