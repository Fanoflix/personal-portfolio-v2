"use client";
import Image from "next/image";
import NavIconButton from "../features/TopNavbar/components/NavIconButton";
import ToggleTheme from "../features/TopNavbar/components/ToggleTheme";
import { iconHeightWidth } from "../features/TopNavbar/constants";
export default function Navbar() {
  return (
    <nav className="h-12 flex items-center justify-end gap-6 pr-7">
      <NavIconButton href="https://github.com/fanoflix" tooltipContent="Github">
        <Image
          src="/icons/github.svg"
          alt="Github"
          width={iconHeightWidth}
          height={iconHeightWidth}
        />
      </NavIconButton>

      <NavIconButton
        href="https://www.linkedin.com/in/ammar-nasir/"
        tooltipContent="LinkedIn"
      >
        <Image
          src="/icons/linkedin.svg"
          alt="LinkedIn"
          width={iconHeightWidth}
          height={iconHeightWidth}
        />
      </NavIconButton>

      <NavIconButton
        href="https://stackoverflow.com/users/16470281/fanoflix"
        tooltipContent="StackOverflow"
      >
        <Image
          src="/icons/stackoverflow.svg"
          alt="Stackoverflow"
          width={iconHeightWidth}
          height={iconHeightWidth}
        />
      </NavIconButton>

      <NavIconButton href="#" tooltipContent="Theme">
        <ToggleTheme />
      </NavIconButton>
    </nav>
  );
}
