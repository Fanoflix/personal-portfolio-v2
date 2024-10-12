import { cn } from "@/src/lib/utils";
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
  sideOffset = 10,
}: {
  children: React.ReactNode;
  delayDuration?: number;
  tooltipContent: React.ReactNode;
  side?: "top" | "bottom" | "left" | "right";
  sideOffset?: number;
}) {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={delayDuration}>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent
          className={cn(
            // Shape (Padding, width, height etc)
            "py-2",
            // Background color and text color
            "bg-muted dark:bg-popover text-popover-foreground",
            // Border-color
            "border-secondary-foreground",
            // Border sides and shadow for each side
            "data-[side=top]:border-b dark:data-[side=top]:shadow-tooltip-b",
            "data-[side=bottom]:border-t dark:data-[side=bottom]:shadow-tooltip-t",
            "data-[side=right]:border-l dark:data-[side=right]:shadow-tooltip-r",
            "data-[side=left]:border-r dark:data-[side=left]:shadow-tooltip-l",
            // Slide and zoom animations
            "data-[side=bottom]:slide-in-from-top-3"
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
