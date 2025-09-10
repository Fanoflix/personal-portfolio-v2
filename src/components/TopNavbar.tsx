"use client";
import { AnimatePresence, motion } from "framer-motion";
import { FlaskConical } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { NavBarVariants } from "../features/framer-animations/variants";
import NavIconButton from "../features/TopNavbar/components/NavIconButton";
import ToggleTheme from "../features/TopNavbar/components/ToggleTheme";
import { iconHeightWidth } from "../features/TopNavbar/constants";
import { cn } from "../lib/utils";
import MyLogo from "./MyLogo/MyLogo";
import { TextShimmer } from "./TextShimmer/TextShimmer";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="w-full flex justify-center h-max md:h-12 sticky top-0 backdrop-blur-lg z-50">
      <div className="w-full md:w-site border-border border-b">
        <AnimatePresence mode="wait">
          <motion.section
            className={cn(
              "w-full flex flex-col sm:flex-row items-center text-center justify-between",
              "py-4 md:py-3 px-2",
              "gap-3",
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
                className="flex gap-1.5 text-text hover:text-primary text-nowrap w-max font-semibold"
                href="/"
              >
                <span className="text-primary">Muhammad Ammar</span>
                <span className="text-primary/30">Software Engineer</span>
              </Link>
            </div>

            <div className="flex items-center justify-center gap-6 md:gap-4">
              <Link
                prefetch
                className="text-[14px] text-text hover:text-primary flex items-center gap-0.5"
                href="/#home"
              >
                Home
              </Link>

              <Link
                prefetch
                className="text-[14px] text-text hover:text-primary"
                href="/#work"
              >
                Work
              </Link>

              <Link
                prefetch
                className="text-[14px] text-text flex items-center gap-0.5"
                href="/learn/react-query"
              >
                <FlaskConical
                  strokeWidth={2}
                  className="w-3.5 h-3.5 animate-pulse text-primary"
                />
                <TextShimmer
                  className="hover:text-primary"
                  duration={1}
                  spread={2.7}
                >
                  Quiz
                </TextShimmer>
              </Link>

              {/* TODO AMMAR enable this when the feature gets completed */}
              {/* <Link
                prefetch
                className="text-[14px] text-text hover:text-primary flex items-center gap-0.5"
                href="/tools"
              >
                <Wrench strokeWidth={2} className="w-3.5 h-3.5 text-primary" />
                Tools
              </Link> */}

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
      </div>
    </nav>
  );
}
