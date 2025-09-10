import Link from "next/link";
import { PropsWithChildren } from "react";

import TooltipWrapper from "@/components/Tooltip/TooltipWrapper";
import { cn } from "@/lib/utils";

export default function NavIconButton({
  onClick,
  href,
  className,
  tooltipContent,
  children,
}: PropsWithChildren & {
  href: string;
  tooltipContent: string;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <TooltipWrapper tooltipContent={tooltipContent}>
      <div
        className={cn(
          "opacity-60 invert hover:bg-transparent hover:opacity-100 dark:invert-0",
          className,
        )}
      >
        <Link
          href={href}
          target={href !== "#" ? "_blank" : undefined}
          rel={href !== "#" ? "noopener noreferrer" : undefined}
          onClick={onClick}
        >
          {children}
        </Link>
      </div>
    </TooltipWrapper>
  );
}
