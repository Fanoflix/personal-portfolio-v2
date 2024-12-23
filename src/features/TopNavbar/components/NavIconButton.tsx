import TooltipWrapper from "@/src/components/Tooltip/TooltipWrapper";
import { cn } from "@/src/lib/utils";
import Link from "next/link";
import { PropsWithChildren } from "react";

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
          "hover:bg-transparent opacity-60 hover:opacity-100 invert dark:invert-0",
          className
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
