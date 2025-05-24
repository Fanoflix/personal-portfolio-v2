"use client";

import TooltipWrapper from "@/src/components/Tooltip/TooltipWrapper";
import { cn } from "@/src/lib/utils";
import { motion, Variants } from "framer-motion";
import { useCallback, useMemo } from "react";

export interface Tags {
  name: string;
  tooltip: string;
  isSpecial?: boolean;
}

interface TagsAnimatedListProps {
  tags: Tags[];
}

export function TagsAnimatedList({ tags }: TagsAnimatedListProps) {
  const sortedTags = useMemo(
    () => tags.sort((a, b) => a.name.length - b.name.length),
    [tags],
  );

  // Calculate estimated widths for positioning
  const getEstimatedWidth = useCallback((tagName: string) => {
    // Rough estimation: 8px per character + padding
    return tagName.length * 8;
  }, []);

  const getCumulativeWidthFromRight = useCallback(
    (index: number) => {
      let totalWidth = 0;
      // Sum width of all elements to the right (indices 0 to index-1)
      for (let i = 0; i < index; i++) {
        totalWidth += getEstimatedWidth(sortedTags[i].name) - index + 2;
      }

      return totalWidth;
    },
    [sortedTags, getEstimatedWidth],
  );

  const totalExpandedWidth =
    getCumulativeWidthFromRight(sortedTags.length) +
    getEstimatedWidth(sortedTags[sortedTags.length - 1]?.name || "");
  const overlappedWidth = Math.max(100, sortedTags.length * 40); // Minimum width when overlapped

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
              "flex items-center justify-center px-2 h-6 rounded-full cursor-pointer",
              index != tags.length - 1 && "pl-3",
              "border border-primary/15",
              "bg-background hover:bg-border",
              "font-bold tracking-tight text-[9px] text-text hover:text-primary uppercase truncate min-w-0",
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
    width: expandedWidth / 2.2, // Magic number to make it look good
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
    width: expandedWidth / 1.3, // Magic number to make it look good
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
    translateX: index * -20, // Overlap by 3px per item
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
    translateX: -cumulativeWidth, // Position side by side using cumulative width
    transition: {
      duration: 0.2,
      ease: "backInOut",
    },
  }),
};
