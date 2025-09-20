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
import { EntityCategory, EntityItem } from "@/hooks/useEntity";

import EntityCategoryRenderer from "./EntityCategoryRenderer";

export interface EntitySelectorProps<
  TItem extends EntityItem<CategoryId>,
  CategoryId extends string = string,
> {
  labelPill: string;
  selectedId: string | null;
  items: TItem[];
  categories: EntityCategory<CategoryId>[];
  onSelect: (id: string) => void;
  placeholder?: string;
}

export function EntitySelector<
  TItem extends EntityItem<CategoryId>,
  CategoryId extends string = string,
>({
  labelPill,
  selectedId,
  items,
  categories,
  onSelect,
  placeholder,
}: EntitySelectorProps<TItem, CategoryId>) {
  const [open, setOpen] = React.useState(false);

  const selectedName = selectedId
    ? items.find((i) => i.id === selectedId)?.name
    : undefined;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger className="group/entitySelector" asChild>
        <div className="flex w-max items-center">
          <div className="group-hover/entitySelector:bg-accent/50 border-input flex h-8 items-center justify-center rounded-l border-t border-b border-l p-1">
            <div className="bg-accent flex h-5.5 w-max items-center justify-center rounded-xs border px-1.5 text-center text-xs tracking-wide">
              {labelPill}
            </div>
          </div>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="group-hover/entitySelector:hover:bg-accent/50 w-71 justify-between truncate rounded-l-none rounded-r border-l-0 p-1.5"
          >
            {selectedName ??
              (placeholder || `Select ${labelPill.toLowerCase()}...`)}
            <ChevronDown size={17} className="opacity-50" />
          </Button>
        </div>
      </PopoverTrigger>
      <PopoverContent side="bottom" align="end" className="w-72 p-0">
        <Command>
          <CommandInput
            placeholder={`Search ${labelPill.toLowerCase()}...`}
            className="h-10 rounded"
          />
          <CommandList>
            <CommandEmpty>{`No ${labelPill.toLowerCase()} found`}</CommandEmpty>

            {categories.map((category) => (
              <EntityCategoryRenderer
                key={(category as EntityCategory).id}
                setOpen={setOpen}
                category={category}
                items={items}
                selectedId={selectedId}
                onSelect={onSelect}
              />
            ))}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

export default EntitySelector;
