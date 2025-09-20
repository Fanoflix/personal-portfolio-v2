"use client";

import { useEffect, useState } from "react";

export interface EntityItem<CategoryId extends string = string> {
  id: string;
  name: string;
  category: CategoryId;
}

export interface EntityCategory<CategoryId extends string = string> {
  id: CategoryId;
  name: string;
}

export interface UseEntityConfig<
  TItem extends EntityItem<CategoryId>,
  CategoryId extends string = string,
> {
  items: TItem[];
  categories: EntityCategory<CategoryId>[];
  storageKey: string;
  queryKey: string;
  defaultSelectedId?: string | null;
}

export interface UseEntityResult<
  TItem extends EntityItem<CategoryId>,
  CategoryId extends string = string,
> {
  selectedId: string | null;
  setSelectedId: (id: string) => void;
  items: TItem[];
  categories: EntityCategory<CategoryId>[];
}

/**
 * This hook provides a base implementation for managing a selected entity in the browser.
 * It is designed to be used with a selector component.
 */
export function useEntity<
  TItem extends EntityItem<CategoryId>,
  CategoryId extends string = string,
>(
  config: UseEntityConfig<TItem, CategoryId>,
): UseEntityResult<TItem, CategoryId> {
  const { items, categories, storageKey, queryKey, defaultSelectedId } = config;

  const initialSelected = () => {
    if (typeof window === "undefined")
      return defaultSelectedId ?? items[0]?.id ?? null;
    const fromStorage = window.localStorage.getItem(storageKey);
    return fromStorage ?? defaultSelectedId ?? items[0]?.id ?? null;
  };

  const [selectedId, setSelectedIdState] = useState<string | null>(
    initialSelected,
  );

  const setSelectedId = (id: string) => {
    setSelectedIdState(id);
    if (typeof window !== "undefined") {
      try {
        window.localStorage.setItem(storageKey, id);
        const url = new URL(window.location.href);
        url.searchParams.set(queryKey, id);
        window.history.replaceState({}, "", url.toString());
      } catch {
        if (process.env.NODE_ENV === "development") {
          console.error("Error setting selected id", id);
        }
      }
    }
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const url = new URL(window.location.href);
      const fromQuery = url.searchParams.get(queryKey);
      if (fromQuery && items.find((i) => i.id === fromQuery)) {
        setSelectedId(fromQuery);
        window.localStorage.setItem(storageKey, fromQuery);
      }
    } catch {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    selectedId,
    setSelectedId,
    items,
    categories,
  };
}
