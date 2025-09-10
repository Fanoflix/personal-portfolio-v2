import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { iconHeightWidth } from "../constants";

// Animation configuration
const ANIMATION_DURATION = 500; // ms
const HALF_ANIMATION_DURATION = ANIMATION_DURATION / 2;

export default function ToggleTheme() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [displayedTheme, setDisplayedTheme] = useState<string | undefined>();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    // Only update displayedTheme if we're not animating
    if (mounted && theme && !isAnimating) {
      setDisplayedTheme(theme);
    }
  }, [mounted, theme, isAnimating]);

  const toggleTheme = () => {
    if (isAnimating) {
      return;
    } // Prevent multiple clicks during animation

    setIsAnimating(true);
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    // Change the displayed icon at halfway point
    setTimeout(() => {
      setDisplayedTheme(newTheme);
    }, HALF_ANIMATION_DURATION);

    // Reset animation after completion
    setTimeout(() => {
      setIsAnimating(false);
    }, ANIMATION_DURATION);
  };

  if (!mounted) {
    return <div className="h-4 min-w-4" />;
  }

  const currentDisplayedTheme = displayedTheme || theme || "dark";

  const animationStyle = isAnimating
    ? {
        animation: `theme-toggle ${ANIMATION_DURATION}ms linear`,
      }
    : {};

  return (
    <button
      className="flex opacity-60 invert hover:bg-transparent hover:opacity-100 dark:invert-0"
      onClick={toggleTheme}
      disabled={isAnimating}
    >
      <div style={animationStyle} className="relative min-h-4 min-w-4">
        <Image
          src="/icons/moon.svg"
          alt="Dark mode"
          width={iconHeightWidth}
          height={iconHeightWidth}
          className="absolute inset-0"
          style={{
            visibility:
              currentDisplayedTheme === "light" ? "visible" : "hidden",
          }}
        />
        <Image
          src="/icons/sun.svg"
          alt="Light mode"
          width={iconHeightWidth}
          height={iconHeightWidth}
          className="absolute inset-0"
          style={{
            visibility: currentDisplayedTheme === "dark" ? "visible" : "hidden",
          }}
        />
      </div>
      <style jsx>{`
        @keyframes theme-toggle {
          0% {
            transform: rotateZ(0deg) scale(1);
            filter: blur(0px);
          }
          50% {
            transform: rotateZ(180deg) scale(0.8);
            filter: blur(3px);
          }
          100% {
            transform: rotateZ(360deg) scale(1);
            filter: blur(0px);
          }
        }
      `}</style>
    </button>
  );
}
