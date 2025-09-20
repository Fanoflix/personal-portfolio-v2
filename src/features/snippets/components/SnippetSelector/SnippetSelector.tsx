"use client";

import * as React from "react";

import { EntitySelector } from "@/components/EntitySelector/EntitySelector";

import { useSnippets } from "../../lib/hooks/useSnippets";

export function SnippetSelector() {
  const state = useSnippets();

  return (
    <EntitySelector
      labelPill="Snippet"
      selectedId={state.selectedSnippet}
      items={state.snippets}
      categories={state.categories}
      onSelect={state.setSelectedSnippet}
      placeholder="Select snippet..."
    />
  );
}

export default SnippetSelector;
