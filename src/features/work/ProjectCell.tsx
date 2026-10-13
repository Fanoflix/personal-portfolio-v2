"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { type MouseEvent, useState } from "react";

import { TagsAnimatedList } from "@/components/TagsAnimatedList/TagsAnimatedList";
import { WrapConditionally } from "@/components/WrapConditionally/WrapConditionally";
import { cn } from "@/lib/utils";

import type { WorkWithSubRows } from "./types";

const NAME_TEXT_CLASS =
  "text-primary min-w-0 flex-1 border-transparent text-[12px] font-medium md:text-sm";

export function ProjectCell({ work }: { work: WorkWithSubRows }) {
  const { revealHeight, openReveal, closeReveal } = useNameReveal();
  const projectLink = work.project.link;

  return (
    <WrapConditionally
      condition={!!projectLink}
      wrapper={(wrapperChildren) => (
        <Link
          href={projectLink || ""}
          target="_blank"
          rel="noopener noreferrer"
          className="contents"
        >
          {wrapperChildren}
        </Link>
      )}
    >
      <div className="group relative flex flex-nowrap items-center justify-between pr-2">
        <div
          className={cn(
            "text-primary flex min-w-0 items-center gap-2 border-b border-transparent pr-1 text-[12px] font-medium md:text-sm",
            projectLink && "group-hover:border-primary cursor-pointer",
          )}
          onMouseEnter={openReveal}
          onMouseLeave={closeReveal}
        >
          <p className={cn(NAME_TEXT_CLASS, "truncate")}>{work.project.name}</p>
          {projectLink && (
            <ArrowUpRight className="shrink-0" size={17} strokeWidth={3} />
          )}

          {revealHeight !== null && (
            <motion.div
              initial={{ height: revealHeight }}
              animate={{ height: "auto" }}
              transition={{ duration: 0.1, ease: "circOut" }}
              className="bg-background ring-primary/15 absolute -inset-x-3 -top-2 z-20 overflow-hidden rounded-md ring-1 ring-inset"
            >
              <div className="flex items-start gap-2 px-3 py-2 pr-5">
                <p
                  className={cn(
                    NAME_TEXT_CLASS,
                    "border-b py-[calc((2rem-1lh-1px)/2)] break-words whitespace-normal",
                  )}
                >
                  {work.project.name}
                </p>
                {projectLink && (
                  <span className="flex h-8 shrink-0 items-center pb-px">
                    <ArrowUpRight size={17} strokeWidth={3} />
                  </span>
                )}
              </div>
            </motion.div>
          )}
        </div>

        <div className="shrink-0">
          <TagsAnimatedList
            tags={[
              ...work.project.tags,
              {
                name: work.project.company?.companyName || "Personal",
                isSpecial: true,
              },
            ]}
          />
        </div>
      </div>
    </WrapConditionally>
  );
}

function useNameReveal() {
  const [revealHeight, setRevealHeight] = useState<number | null>(null);

  const openReveal = (event: MouseEvent<HTMLElement>) => {
    const cell = event.currentTarget.closest("td");
    setRevealHeight(cell?.offsetHeight ?? null);
  };

  const closeReveal = () => setRevealHeight(null);

  return { revealHeight, openReveal, closeReveal };
}
