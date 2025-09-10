import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/Button";
import { cn } from "@/lib/utils";

interface CategoryNavProps {
  categories: string[];
  currentCategory: string;
  onSelect: (category: string) => void;
}

export function CategoryNav({
  categories,
  currentCategory,
  onSelect,
}: CategoryNavProps) {
  const scrollRef = useRef<HTMLElement>(null);
  const [showStartFade, setShowStartFade] = useState(false);
  const [showEndFade, setShowEndFade] = useState(false);

  // TODO: Extract the logic below into a reusable hook.

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) {
      return;
    }

    const checkScrollPosition = () => {
      const { scrollLeft, scrollWidth, clientWidth } = scrollElement;

      // Check if we're at the start
      const isAtStart = scrollLeft <= 1; // Small tolerance for rounding
      setShowStartFade(!isAtStart);

      // Check if we're at the end
      const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 1;
      setShowEndFade(!isAtEnd);
    };

    // Check initially
    checkScrollPosition();

    // Add scroll listener
    scrollElement.addEventListener("scroll", checkScrollPosition);

    // Check on resize too
    window.addEventListener("resize", checkScrollPosition);

    return () => {
      scrollElement.removeEventListener("scroll", checkScrollPosition);
      window.removeEventListener("resize", checkScrollPosition);
    };
  }, [categories]);

  return (
    <div className="relative w-full max-w-xs md:max-w-[500px]">
      <nav
        ref={scrollRef}
        className="flex gap-2 overflow-x-auto w-full scrollbar-hide"
      >
        {categories.map((category) => (
          <Button
            key={category}
            className={cn(
              "h-max py-0.5 px-1 rounded-md text-sm font-medium transition-colors duration-300 border-0 flex-shrink-0",
              category === currentCategory
                ? "bg-primary text-primary-foreground"
                : "bg-transparent text-muted-foreground hover:bg-accent hover:text-primary",
            )}
            onClick={() => onSelect(category)}
          >
            {category}
          </Button>
        ))}
      </nav>

      {/* Fade out effect at start to indicate scrollable content to the left */}
      {showStartFade && (
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent pointer-events-none transition-opacity duration-300" />
      )}

      {/* Fade out effect at end to indicate scrollable content to the right */}
      {showEndFade && (
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent pointer-events-none transition-opacity duration-300" />
      )}
    </div>
  );
}
