"use client";

import { cn } from "@/lib/utils";
import { motion, Variants } from "framer-motion";
import { useTagsAnimatedList } from "./useTagsAnimatedList";

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
    totalWidthOfAllSpecialTags,
    overlappedWidth,
  } = useTagsAnimatedList({ tags });

  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      whileTap="hover"
      animate="rest"
      variants={TagsContainerMotion}
      className={cn(
        "relative w-full",
        "flex flex-nowrap justify-end items-center h-8",
      )}
      onClick={(e) => {
        e.stopPropagation();
      }}
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
            totalWidthOfAllSpecialTags,
          }}
        >
          <div
            className={cn(
              "flex items-center justify-center px-1.5 pl-5 h-[20px] cursor-default",
              index === sortedTags.length - 1 && "pl-1.5",
              "rounded-[6px]",
              "border border-primary/15",
              "bg-background hover:bg-border",
              "font-mono font-black tracking-tight text-[10px] text-primary/70 hover:text-primary truncate min-w-0",
              tag.isSpecial &&
                "bg-primary/5 hover:bg-primary text-primary hover:text-primary-foreground font-normal",
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
    totalWidthOfAllSpecialTags,
    expandedWidth,
  }: {
    overlappedWidth: number;
    totalWidthOfAllSpecialTags: number;
    expandedWidth: number;
  }) => ({
    width: expandedWidth / 2.1, // Magic number to make it look good
    transition: {
      duration: 0.3,
      ease: "circOut",
    },
  }),
  hover: ({
    overlappedWidth,
    expandedWidth,
    totalWidthOfAllSpecialTags,
  }: {
    overlappedWidth: number;
    expandedWidth: number;
    totalWidthOfAllSpecialTags: number;
  }) => ({
    width: expandedWidth / 1.2,
    transition: {
      duration: 0.3,
      ease: "circOut",
    },
  }),
};

const SingleTagMotion: Variants = {
  rest: ({
    index,
    cumulativeWidth,
    totalWidthOfAllSpecialTags,
  }: {
    index: number;
    cumulativeWidth: number;
    totalWidthOfAllSpecialTags: number;
  }) => ({
    translateX: index == 0 ? 0 : -totalWidthOfAllSpecialTags + (index - 1) * -6,
    transition: {
      duration: 0.3,
      ease: "circOut",
    },
  }),
  hover: ({
    index,
    cumulativeWidth,
    totalWidthOfAllSpecialTags,
  }: {
    index: number;
    cumulativeWidth: number;
    totalWidthOfAllSpecialTags: number;
  }) => ({
    translateX: -cumulativeWidth,
    transition: {
      duration: 0.3,
      ease: "circOut",
    },
  }),
};
