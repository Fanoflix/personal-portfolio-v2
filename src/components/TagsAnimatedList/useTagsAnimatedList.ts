import { useCallback, useMemo } from "react";

import { Tags } from "./TagsAnimatedList";

interface UseTagsAnimatedListProps {
  tags: Tags[];
}

interface UseTagsAnimatedListReturn {
  sortedTags: Tags[];
  getEstimatedWidth: (tagName: string) => number;
  getCumulativeWidthFromRight: (index: number) => number;
  totalWidthOfAllSpecialTags: number;
  totalExpandedWidth: number;
  overlappedWidth: number;
}

export function useTagsAnimatedList({
  tags,
}: UseTagsAnimatedListProps): UseTagsAnimatedListReturn {
  let sortedTags = useMemo(
    () => tags.sort((a, b) => a.name.length - b.name.length),
    [tags],
  );

  const specialTags = sortedTags.filter((tag) => tag.isSpecial);
  const nonSpecialTags = sortedTags.filter((tag) => !tag.isSpecial);
  sortedTags = [...specialTags, ...nonSpecialTags];

  const getEstimatedWidth = useCallback((tagName: string) => {
    const estimatedWidthPerMonoSpaceCharacter = 5.4;
    const xPadding = 12;
    const widthOfPill =
      tagName.length * estimatedWidthPerMonoSpaceCharacter + xPadding;

    return widthOfPill;
  }, []);

  const getCumulativeWidthFromRight = useCallback(
    (index: number) => {
      let totalWidth = 0;
      for (let i = 0; i < index; i++) {
        totalWidth += getEstimatedWidth(sortedTags[i].name);
      }

      return totalWidth;
    },
    [sortedTags, getEstimatedWidth],
  );

  const totalWidthOfAllSpecialTags = useMemo(() => {
    return specialTags.reduce(
      (acc, tag) => acc + getEstimatedWidth(tag.name),
      0,
    );
  }, [specialTags, getEstimatedWidth]);

  const totalExpandedWidth =
    getCumulativeWidthFromRight(sortedTags.length) +
    getEstimatedWidth(sortedTags[sortedTags.length - 1]?.name || "");
  const overlappedWidth = Math.max(100, sortedTags.length * 50); // Minimum width when overlapped

  return {
    sortedTags,
    getEstimatedWidth,
    getCumulativeWidthFromRight,
    totalWidthOfAllSpecialTags,
    totalExpandedWidth,
    overlappedWidth,
  };
}
