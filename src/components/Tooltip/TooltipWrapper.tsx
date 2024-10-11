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
  sideOffset = 4,
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
            "bg-muted dark:bg-popover text-popover-foreground",
            "border-secondary-foreground data-[side=top]:border-b data-[side=top]:shadow-tooltip-b",
            "data-[side=bottom]:border-t data-[side=bottom]:shadow-tooltip-t",
            "data-[side=right]:border-l data-[side=right]:shadow-tooltip-r",
            "data-[side=left]:border-r data-[side=left]:shadow-tooltip-l"
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
