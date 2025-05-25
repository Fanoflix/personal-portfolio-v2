"use client";

import TooltipWrapper from "@/src/components/Tooltip/TooltipWrapper";
import { cn } from "@/src/lib/utils";
import { motion, Variants } from "framer-motion";
import { useTagsAnimatedList } from "./useTagsAnimatedList";
import { useEffect } from "react";

export interface Tags {
  name: string;
  isSpecial?: boolean;
}

interface TagsAnimatedListProps {
  tags: Tags[];
}

export function TagsAnimatedList({ tags }: TagsAnimatedListProps) {
  const {
    sortedTags,
    getCumulativeWidthFromRight,
    totalExpandedWidth,
    overlappedWidth,
  } = useTagsAnimatedList({ tags });

  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      variants={TagsContainerMotion}
      className={cn(
        "relative w-full",
        "flex flex-nowrap justify-end items-center h-8",
      )}
      custom={{ overlappedWidth, expandedWidth: totalExpandedWidth }}
    >
      {sortedTags.map((tag, index) => (
        <motion.div
          key={`${tag.name}-${index}`}
          id={`tag-${index}`}
          variants={SingleTagMotion}
          className="absolute h-max"
          custom={{
            index,
            cumulativeWidth: getCumulativeWidthFromRight(index),
          }}
        >
          <div
            className={cn(
              "flex items-center justify-center px-1.5 h-[21px] cursor-pointer",
              "rounded-sm",
              !index && "rounded-r-lg",
              index === sortedTags.length - 1 && "rounded-l-lg",
              "border border-primary/15",
              "bg-background hover:bg-border",
              "font-mono font-black tracking-tight text-[10px] text-text hover:text-primary truncate min-w-0",
              tag.isSpecial &&
                "bg-primary hover:bg-primary/80 text-primary-foreground hover:text-primary-foreground border-black",
            )}
          >
            {tag.name}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

const TagsContainerMotion: Variants = {
  rest: ({
    overlappedWidth,
    expandedWidth,
  }: {
    overlappedWidth: number;
    expandedWidth: number;
  }) => ({
    width: expandedWidth / 2.1, // Magic number to make it look good
    transition: {
      duration: 0.2,
      ease: "backInOut",
    },
  }),
  hover: ({
    overlappedWidth,
    expandedWidth,
  }: {
    overlappedWidth: number;
    expandedWidth: number;
  }) => ({
    width: expandedWidth / 1.2,
    transition: {
      duration: 0.2,
      ease: "backInOut",
    },
  }),
};

const SingleTagMotion: Variants = {
  rest: ({
    index,
    cumulativeWidth,
  }: {
    index: number;
    cumulativeWidth: number;
  }) => ({
    translateX: index * -20,
    transition: {
      duration: 0.2,
      ease: "backInOut",
    },
  }),
  hover: ({
    index,
    cumulativeWidth,
  }: {
    index: number;
    cumulativeWidth: number;
  }) => ({
    translateX: -cumulativeWidth,
    transition: {
      duration: 0.2,
      ease: "backInOut",
    },
  }),
};
