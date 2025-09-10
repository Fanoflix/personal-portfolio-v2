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
        className="scrollbar-hide flex w-full gap-2 overflow-x-auto"
      >
        {categories.map((category) => (
          <Button
            key={category}
            className={cn(
              "h-max shrink-0 rounded-md border-0 px-1 py-0.5 text-sm font-medium transition-colors duration-300",
              category === currentCategory
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:bg-accent hover:text-primary bg-transparent",
            )}
            onClick={() => onSelect(category)}
          >
            {category}
          </Button>
        ))}
      </nav>

      {/* Fade out effect at start to indicate scrollable content to the left */}
      {showStartFade && (
        <div className="from-background pointer-events-none absolute top-0 bottom-0 left-0 w-16 bg-linear-to-r to-transparent transition-opacity duration-300" />
      )}

      {/* Fade out effect at end to indicate scrollable content to the right */}
      {showEndFade && (
        <div className="from-background pointer-events-none absolute top-0 right-0 bottom-0 w-16 bg-linear-to-l to-transparent transition-opacity duration-300" />
      )}
    </div>
  );
}
