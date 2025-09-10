"use client";

import { Building2 } from "lucide-react";
import { createContext, useContext, useEffect, useState } from "react";

import { ShouldBuyBackEquity } from "../../corporate/canIRetire/shouldBuyBackEquity";
import { Tool, ToolCategory, ToolsContextType } from "../types";

const STORAGE_KEY = "selected-tool";
const selectedToolQueryParam = "tool";

// Define categories
const categories: ToolCategory[] = [
  {
    id: "corporate",
    name: "Corporate",
    icon: Building2,
  },
];

// Define tools
const tools: Tool[] = [
  {
    id: "shouldBuyBackEquity",
    name: "Should I Buy Back Equity?",
    description: "Calculate if buying back equity makes financial sense",
    category: "corporate",
    component: ShouldBuyBackEquity,
  },
];

const ToolsContext = createContext<ToolsContextType | undefined>(undefined);

export function ToolsProvider({ children }: { children: React.ReactNode }) {
  const [selectedTool, setSelectedToolState] = useState<string | null>(
    localStorage.getItem(STORAGE_KEY) || tools[0]?.id || null,
  );

  const setSelectedTool = (toolId: string) => {
    setSelectedToolState(toolId);
    localStorage.setItem(STORAGE_KEY, toolId);

    // Update URL
    const url = new URL(window.location.href);
    url.searchParams.set(selectedToolQueryParam, toolId);
    window.history.replaceState({}, "", url.toString());
  };

  useEffect(() => {
    // Sync with URL params on mount
    const url = new URL(window.location.href);
    const urlTool = url.searchParams.get(selectedToolQueryParam);
    if (urlTool && tools.find((tool) => tool.id === urlTool)) {
      url.searchParams.set(selectedToolQueryParam, urlTool);
      setSelectedToolState(urlTool);
      localStorage.setItem(STORAGE_KEY, urlTool);
    }
  }, []);

  const value: ToolsContextType = {
    selectedTool,
    setSelectedTool,
    tools,
    categories,
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
