"use client";

import { createContext, useContext } from "react";

import { useEntity } from "@/hooks/useEntity";

import RetroLoader from "../../components/snippets/micro-interactions/retro-loader/RetroLoader";
import {
  SnippetCategory,
  SnippetCategoryId,
  SnippetItem,
  SnippetsContextType,
} from "../types";

const STORAGE_KEY = "selected-snippet";
const selectedSnippetQueryParam = "snippet";

const categories: SnippetCategory[] = [
  { id: "micro-interactions", name: "Micro Interactions" },
];

const snippets: SnippetItem[] = [
  {
    id: "retro-loader",
    name: "Retro Loader",
    description: "Old-school loader micro interaction",
    category: "micro-interactions",
    component: RetroLoader,
  },
];

const SnippetsContext = createContext<SnippetsContextType | undefined>(
  undefined,
);

export function SnippetsProvider({ children }: { children: React.ReactNode }) {
  const entity = useEntity<SnippetItem, SnippetCategoryId>({
    items: snippets,
    categories,
    storageKey: STORAGE_KEY,
    queryKey: selectedSnippetQueryParam,
    defaultSelectedId: snippets[0]?.id ?? null,
  });

  const value: SnippetsContextType = {
    selectedSnippet: entity.selectedId,
    setSelectedSnippet: entity.setSelectedId,
    snippets: entity.items,
    categories: entity.categories,
  };

  return (
    <SnippetsContext.Provider value={value}>
      {children}
    </SnippetsContext.Provider>
  );
}

export function useSnippets() {
  const context = useContext(SnippetsContext);
  if (context === undefined) {
    throw new Error("useSnippets must be used within a SnippetsProvider");
  }
  return context;
}
