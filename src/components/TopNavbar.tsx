"use client";
import Image from "next/image";
import NavIconButton from "../features/TopNavbar/components/NavIconButton";
import ToggleTheme from "../features/TopNavbar/components/ToggleTheme";
import { iconHeightWidth } from "../features/TopNavbar/constants";
import MyLogo from "./MyLogo/MyLogo";
import Link from "next/link";
import { cn } from "../lib/utils";
export default function Navbar() {
  return (
    <nav className="border-border border-b w-full flex justify-center h-max md:h-12">
      <section
        className={cn(
          "w-full md:w-[75%] lg:w-1/2 flex flex-col md:flex-row items-center text-center justify-between",
          "py-4 md:py-3",
          "gap-3",
        )}
      >
        <div className="flex items-center justify-center gap-2 text-[14px] text-nowrap">
          <div>
            <MyLogo />
          </div>
          <Link
            prefetch
            className="flex gap-1.5 text-sm text-text hover:text-primary text-nowrap w-max"
            href="/"
          >
            <span className="text-primary font-medium">Muhammad Ammar</span>
            <span>Software Engineer</span>
          </Link>
        </div>

        <div className="flex items-center justify-center gap-2 ust- md:gap-4">
          <Link
            prefetch
            className="text-sm text-text hover:text-primary"
            href="/work"
          >
            Work
          </Link>
          <NavIconButton
            href="https://github.com/fanoflix"
            tooltipContent="Github"
          >
            <Image
              src="/icons/github.svg"
              alt="Github"
              className="text-sm"
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
        </div>
      </section>
    </nav>
  );
}
