import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import { iconHeightWidth } from "../constants";

export default function ToggleTheme() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isRotating, setIsRotating] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setIsRotating(true);
    setTheme(theme === "light" ? "dark" : "light");
    setTimeout(() => setIsRotating(false), 250); // Reset after animation
  };

  if (!mounted) return null;

  const containerStyle = {
    cursor: "pointer",
  };

  const iconWrapperStyle = {
    transition: "transform 500ms ease",
    transform: isRotating ? "rotateZ(360deg)" : "rotateZ(-360deg)",
  };

  return (
    <div onClick={toggleTheme} style={containerStyle}>
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
    </div>
  );
}
