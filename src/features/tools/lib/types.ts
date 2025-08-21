export interface Tool {
  id: string;
  name: string;
  description: string;
  category: string;
  component: React.ComponentType;
}

export interface ToolCategory {
  id: string;
  name: string;
  icon?: React.ComponentType<{ className?: string }>;
}

export interface ToolsContextType {
  selectedTool: string | null;
  setSelectedTool: (toolId: string) => void;
  tools: Tool[];
  categories: ToolCategory[];
}
