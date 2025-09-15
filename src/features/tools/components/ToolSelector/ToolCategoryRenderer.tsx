import { Check } from "lucide-react";
import React, { Dispatch, SetStateAction } from "react";

import { CommandGroup, CommandItem } from "@/components/Command/Command";
import { cn } from "@/lib/utils";

import { useTools } from "../../lib/hooks/useTools";
import { ToolCategory } from "../../lib/types";

export default function ToolCategoryRenderer({
  setOpen,
  toolCategory,
}: {
  setOpen: Dispatch<SetStateAction<boolean>>;
  toolCategory: ToolCategory;
}) {
  const toolsState = useTools();

  const categoryTools = toolsState.tools.filter(
    (tool) => tool.category === toolCategory.id,
  );

  if (!categoryTools.length) {
    return null;
  }

  return (
    <>
      {/* Maybe add icon? */}
      <CommandGroup heading={toolCategory.name}>
        {categoryTools.map((tool) => (
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
    </>
  );
}
