"use client";

import * as React from "react";

import { EntitySelector } from "@/components/EntitySelector/EntitySelector";

import { useTools } from "../../lib/hooks/useTools";

export function ToolSelector() {
  const toolsState = useTools();

  return (
    <EntitySelector
      labelPill="Tool"
      selectedId={toolsState.selectedTool}
      items={toolsState.tools}
      categories={toolsState.categories}
      onSelect={toolsState.setSelectedTool}
      placeholder="Select tool..."
    />
  );
}
