"use client";

import { motion, Variants } from "framer-motion";

import { cn } from "@/lib/utils";

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
        "flex h-8 flex-nowrap items-center justify-end",
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
              "flex h-[20px] cursor-default items-center justify-center px-1.5 pl-5",
              index === sortedTags.length - 1 && "pl-1.5",
              "rounded-[6px]",
              "border-primary/15 border",
              "bg-background hover:bg-border",
              "text-primary/70 hover:text-primary min-w-0 truncate font-mono text-[10px] font-black tracking-tight",
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
