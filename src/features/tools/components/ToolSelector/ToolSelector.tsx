"use client";

import { ChevronDown } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/Button";
import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandList,
} from "@/components/Command/Command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/Popover/Popover";

import { useTools } from "../../lib/hooks/useTools";
import ToolCategoryRenderer from "./ToolCategoryRenderer";

export function ToolSelector() {
  const [open, setOpen] = React.useState(false);
  const toolsState = useTools();

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger className="group/toolSelector" asChild>
        <div className="flex max-w-max items-center">
          <div className="group-hover/toolSelector:bg-accent/50 border-input flex h-8 w-12 items-center justify-center rounded-l border-t border-b border-l p-1">
            <div className="bg-accent group-hover/toolSelector:border-primary/10 flex h-6 w-10 items-center justify-center rounded-xs border text-center text-sm">
              Tool
            </div>
          </div>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="group-hover/toolSelector:hover:bg-accent/50 w-71 justify-between truncate rounded-l-none rounded-r border-l-0 p-1.5"
          >
            {toolsState.selectedTool
              ? toolsState.tools.find(
                  (tool) => tool.id === toolsState.selectedTool,
                )?.name
              : "Select tool..."}
            <ChevronDown size={17} className="opacity-50" />
          </Button>
        </div>
      </PopoverTrigger>
      <PopoverContent side="bottom" align="end" className="w-72 p-0">
        <Command>
          <CommandInput placeholder="Search tool..." className="h-10 rounded" />
          <CommandList>
            <CommandEmpty>No tool found</CommandEmpty>

            {toolsState.categories.map((toolCategory) => (
              <ToolCategoryRenderer
                key={toolCategory.id}
                setOpen={setOpen}
                toolCategory={toolCategory}
              />
            ))}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
