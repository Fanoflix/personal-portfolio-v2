"use client";

import { Check, ChevronDown } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/Button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/Command/Command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/Popover/Popover";
import { cn } from "@/lib/utils";

import { useTools } from "../lib/hooks/useTools";

export function ToolSelector() {
  const [open, setOpen] = React.useState(false);
  const toolsState = useTools();

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger className="group/tool-selector" asChild>
        <div className="group-hover/tool-selector:bg-accent flex max-w-max items-center">
          <div className="border-input flex h-8 w-12 items-center justify-center rounded-l border-t border-b border-l">
            <div className="bg-accent flex h-6 w-10 items-center justify-center rounded-xs text-center text-sm">
              Tool
            </div>
          </div>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="hover:bg-background w-71 justify-between truncate rounded-l-none rounded-r border-l-0 p-1.5"
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
          <CommandInput placeholder="Search tool..." className="h-12 rounded" />
          <CommandList>
            <CommandEmpty>No tool found.</CommandEmpty>
            <CommandGroup>
              {toolsState.tools.map((tool) => (
                <CommandItem
                  key={tool.id}
                  value={tool.id}
                  onSelect={(currentValue) => {
                    toolsState.setSelectedTool(currentValue);
                    setOpen(false);
                  }}
                >
                  {tool.name}
                  <Check
                    className={cn(
                      "ml-auto",
                      toolsState.selectedTool === tool.id
                        ? "opacity-100"
                        : "opacity-0",
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
