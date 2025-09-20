"use client";

import { Building2 } from "lucide-react";
import { createContext, useContext } from "react";

import { useEntity } from "@/hooks/useEntity";

import { ShouldBuyBackEquity } from "../../categories/corporate/canIRetire/shouldBuyBackEquity";
import { CategoriesIds, Tool, ToolCategory, ToolsContextType } from "../types";

const TOOLS_STORAGE_KEY = "selected-tool";
const SELECTED_TOOL_QUERY_PARAM = "tool";

const categories: ToolCategory[] = [
  {
    id: "corporate",
    name: "Corporate",
    icon: Building2,
  },
];

const tools: Tool[] = [
  {
    id: "shouldBuyBackEquity",
    name: "Equity Calculation",
    description: "Calculate if buying back equity makes financial sense",
    category: "corporate",
    component: ShouldBuyBackEquity,
  },
];

const ToolsContext = createContext<ToolsContextType | undefined>(undefined);

export function ToolsProvider({ children }: { children: React.ReactNode }) {
  const entity = useEntity<Tool, CategoriesIds>({
    items: tools,
    categories,
    storageKey: TOOLS_STORAGE_KEY,
    queryKey: SELECTED_TOOL_QUERY_PARAM,
    defaultSelectedId: tools[0]?.id ?? null,
  });

  const value: ToolsContextType = {
    selectedTool: entity.selectedId,
    setSelectedTool: entity.setSelectedId,
    tools: entity.items,
    categories: entity.categories,
  };

  return (
    <ToolsContext.Provider value={value}>{children}</ToolsContext.Provider>
  );
}

export function useTools() {
  const context = useContext(ToolsContext);
  if (context === undefined) {
    throw new Error("useTools must be used within a ToolsProvider");
  }
  return context;
}
