import { Check } from "lucide-react";
import React, { Dispatch, SetStateAction } from "react";

import { CommandGroup, CommandItem } from "@/components/Command/Command";
import { EntityCategory, EntityItem } from "@/hooks/useEntity";
import { cn } from "@/lib/utils";

export default function EntityCategoryRenderer<
  TItem extends EntityItem<CategoryId>,
  CategoryId extends string = string,
>({
  setOpen,
  category,
  items,
  selectedId,
  onSelect,
}: {
  setOpen: Dispatch<SetStateAction<boolean>>;
  category: EntityCategory<CategoryId>;
  items: TItem[];
  selectedId: string | null;
  onSelect: (id: string) => void;
}) {
  const categoryItems = items.filter((item) => item.category === category.id);

  if (!categoryItems.length) {
    return null;
  }

  return (
    <>
      <CommandGroup heading={category.name}>
        {categoryItems.map((item) => (
          <CommandItem
            key={item.id}
            value={item.id}
            onSelect={(currentValue) => {
              onSelect(currentValue);
              setOpen(false);
            }}
          >
            {item.name}
            <Check
              className={cn(
                "ml-auto",
                selectedId === item.id ? "opacity-100" : "opacity-0",
              )}
            />
          </CommandItem>
        ))}
      </CommandGroup>
    </>
  );
}
