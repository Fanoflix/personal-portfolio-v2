import { cn } from "@/lib/utils";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./Tooltip";

export default function TooltipWrapper({
  children,
  delayDuration = 0,
  tooltipContent,
  side = "bottom",
  sideOffset = 25,
  contentClassName,
  disableHoverableContent = false,
}: {
  children: React.ReactNode;
  delayDuration?: number;
  tooltipContent: React.ReactNode;
  side?: "top" | "bottom" | "left" | "right";
  sideOffset?: number;
  contentClassName?: string;
  disableHoverableContent?: boolean;
}) {
  return (
    <TooltipProvider
      delayDuration={delayDuration}
      disableHoverableContent={disableHoverableContent}
    >
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent
          className={cn(
            // Shape (Padding, width, height etc)
            "py-2",
            // Background color and text color
            "bg-destructive-foreground dark:bg-popover text-popover-foreground",
            // Border-color
            "border-secondary-foreground",
            // Border sides and shadow for each side
            "dark:data-[side=top]:shadow-tooltip-b data-[side=top]:border-b",
            "dark:data-[side=bottom]:shadow-tooltip-t data-[side=bottom]:border-t",
            "dark:data-[side=right]:shadow-tooltip-r data-[side=right]:border-l",
            "dark:data-[side=left]:shadow-tooltip-l data-[side=left]:border-r",
            // Slide and zoom animations
            "data-[side=bottom]:slide-in-from-bottom-65",
            // Text classes
            "text-sm",
            contentClassName,
          )}
          side={side}
          sideOffset={sideOffset}
        >
          {tooltipContent}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
