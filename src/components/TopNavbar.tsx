"use client";
import Image from "next/image";
import NavIconButton from "../features/TopNavbar/components/NavIconButton";
import ToggleTheme from "../features/TopNavbar/components/ToggleTheme";
import { iconHeightWidth } from "../features/TopNavbar/constants";
import MyLogo from "./MyLogo/MyLogo";
import Link from "next/link";
import { cn } from "../lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import {
  layoutVariants,
  NavBarVariants,
} from "../features/framer-animations/variants";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="w-full flex justify-center h-max md:h-12 sticky top-0 backdrop-blur-lg z-50">
      <AnimatePresence mode="wait">
        <motion.section
          className={cn(
            "w-full flex flex-col sm:flex-row items-center text-center justify-between",
            "py-4 md:py-3 px-2",
            "gap-3",
            "border-border border-b",
          )}
          key={pathname}
          variants={NavBarVariants}
          initial="hidden"
          animate="visible"
          exit="out"
        >
          <div className="flex items-center justify-center gap-2 text-[14px] text-nowrap">
            <MyLogo />
            <Link
              prefetch
              className="flex gap-1.5 text-text hover:text-primary text-nowrap w-max"
              href="/"
            >
              <span className="text-primary font-medium">Muhammad Ammar</span>
              <span>Software Engineer</span>
            </Link>
          </div>

          <div className="flex items-center justify-center gap-6 md:gap-4">
            <Link
              prefetch
              className="text-[14px] text-text hover:text-primary"
              href="/"
            >
              Home
            </Link>
            <Link
              prefetch
              className="text-[14px] text-text hover:text-primary"
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

            <ToggleTheme />
          </div>
        </motion.section>
      </AnimatePresence>
    </nav>
  );
}
