import useToggle from "@/src/hooks/useToggle";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import { iconHeightWidth } from "../constants";

export default function ToggleTheme() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isRotating, toggleRotation] = useToggle(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    toggleRotation();
    setTimeout(() => {
      setTheme(theme === "light" ? "dark" : "light");
    }, 250);
  };

  if (!mounted) return null;

  const iconWrapperStyle = {
    transition: "transform 360ms ease-in",
    transform: isRotating ? "rotateZ(360deg)" : "rotateZ(0deg)",
  };

  return (
    <button
      className="flex hover:bg-transparent opacity-60 hover:opacity-100 invert dark:invert-0"
      onClick={toggleTheme}
    >
      <div style={iconWrapperStyle}>
        {theme === "light" ? (
          <Image
            src="/icons/moon.svg"
            alt="Dark mode"
            width={iconHeightWidth}
            height={iconHeightWidth}
          />
        ) : (
          <Image
            src="/icons/sun.svg"
            alt="Light mode"
            width={iconHeightWidth}
            height={iconHeightWidth}
          />
        )}
      </div>
    </button>
  );
}
