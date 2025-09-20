"use client";
import React from "react";

import { StaggeredContainer } from "../framer-animations/components/StaggeredContainer";
import { useSnippets } from "./lib/hooks/useSnippets";

export default function SnippetsPage() {
  const { selectedSnippet, snippets } = useSnippets();

  const current = selectedSnippet
    ? snippets.find((s) => s.id === selectedSnippet)
    : null;
  const SnippetComponent = current?.component;

  return (
    <div className="flex h-max w-full justify-start">
      {SnippetComponent ? (
        <StaggeredContainer
          stagger={0.2}
          containerClassName="h-full flex items-start justify-start"
        >
          <SnippetComponent />
        </StaggeredContainer>
      ) : (
        <StaggeredContainer
          stagger={0.2}
          containerClassName="h-full flex justify-center"
        >
          <div className="space-y-4 text-center">
            <h2 className="text-primary text-2xl font-bold">
              Welcome to Snippets
            </h2>
            <p className="text-text max-w-md">
              Select a snippet from the selector above to preview it here.
            </p>
          </div>
        </StaggeredContainer>
      )}
    </div>
  );
}
