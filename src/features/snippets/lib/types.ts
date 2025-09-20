export type SnippetCategoryId = "micro-interactions";

export interface SnippetItem {
  id: string;
  name: string;
  description?: string;
  category: SnippetCategoryId;
  component: React.ComponentType;
}

export interface SnippetCategory {
  id: SnippetCategoryId;
  name: string;
}

export interface SnippetsContextType {
  selectedSnippet: string | null;
  setSelectedSnippet: (snippetId: string) => void;
  snippets: SnippetItem[];
  categories: SnippetCategory[];
}
