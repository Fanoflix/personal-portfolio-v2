"use client";

import { useTools } from "./lib/hooks/useTools";
import { StaggeredContainer } from "../framer-animations/components/StaggeredContainer";

export function ToolsPage() {
  const { selectedTool, tools } = useTools();

  const currentTool = selectedTool
    ? tools.find((tool) => tool.id === selectedTool)
    : null;
  const ToolComponent = currentTool?.component;

  return (
    <div className="flex justify-center w-full h-max">
      {ToolComponent ? (
        <StaggeredContainer
          stagger={0.2}
          containerClassName="h-full flex items-start justify-center"
        >
          <ToolComponent />
        </StaggeredContainer>
      ) : (
        <StaggeredContainer
          stagger={0.2}
          containerClassName="h-full flex justify-center"
        >
          l
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold text-primary">
              Welcome to Tools
            </h2>
            <p className="text-text max-w-md">
              Select a tool from the sidebar to get started. Each tool is
              designed to help you make informed decisions and calculations.
            </p>
          </div>
        </StaggeredContainer>
      )}
    </div>
  );
}
