export interface Tool {
  id: string;
  name: string;
  description: string;
  category: CategoriesIds;
  component: React.ComponentType;
}

export interface ToolCategory {
  id: CategoriesIds;
  name: string;
  icon?: React.ComponentType<{ className?: string }>;
}

export interface ToolsContextType {
  selectedTool: string | null;
  setSelectedTool: (toolId: string) => void;
  tools: Tool[];
  categories: ToolCategory[];
}

export type CategoriesIds = "career" | "corporate";
