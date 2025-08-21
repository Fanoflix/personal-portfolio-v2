"use client";

import { Building2, Wrench } from "lucide-react";
import { createContext, useContext, useEffect, useState } from "react";
import { Tool, ToolCategory, ToolsContextType } from "../types";
import { ShouldBuyBackEquity } from "../../corporate/canIRetire/shouldBuyBackEquity";

const STORAGE_KEY = "selected-tool";

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
  const [selectedTool, setSelectedToolState] = useState<string | null>(null);

  useEffect(() => {
    // Load from localStorage on mount
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && tools.find((tool) => tool.id === stored)) {
      setSelectedToolState(stored);
    } else {
      // Set first tool as default
      const firstTool = tools[0];
      if (firstTool) {
        setSelectedToolState(firstTool.id);
      }
    }
  }, []);

  const setSelectedTool = (toolId: string) => {
    setSelectedToolState(toolId);
    localStorage.setItem(STORAGE_KEY, toolId);

    // Update URL
    const url = new URL(window.location.href);
    url.searchParams.set("selected", toolId);
    window.history.replaceState({}, "", url.toString());
  };

  useEffect(() => {
    // Sync with URL params on mount
    const url = new URL(window.location.href);
    const urlTool = url.searchParams.get("selected");
    if (urlTool && tools.find((tool) => tool.id === urlTool)) {
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
