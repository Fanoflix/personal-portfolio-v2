"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/src/components/ui/sidebar";
import { useTools } from "../lib/hooks/useTools";

export function ToolsSidebar() {
  const { selectedTool, setSelectedTool, tools, categories } = useTools();

  const getToolsByCategory = (categoryId: string) => {
    return tools.filter((tool) => tool.category === categoryId);
  };

  return (
    <Sidebar className="bg-background rounded-xl h-[70vh] fixed z-50">
      <SidebarHeader className="flex items-center justify-end border-b-0">
        <SidebarTrigger />
      </SidebarHeader>

      <SidebarContent>
        {categories.map((category) => {
          const categoryTools = getToolsByCategory(category.id);
          const CategoryIcon = category.icon;

          return (
            <SidebarGroup className="flex flex-col gap-3" key={category.id}>
              <SidebarGroupLabel>
                <div className="flex items-center gap-2">
                  {CategoryIcon && <CategoryIcon className="h-3 w-3" />}
                  {category.name}
                </div>
              </SidebarGroupLabel>
              <SidebarGroupContent>
                {categoryTools.map((tool) => (
                  <SidebarMenuItem
                    key={tool.id}
                    isActive={selectedTool === tool.id}
                    onClick={() => setSelectedTool(tool.id)}
                  >
                    {tool.name}
                  </SidebarMenuItem>
                ))}
              </SidebarGroupContent>
            </SidebarGroup>
          );
        })}
      </SidebarContent>
    </Sidebar>
  );
}
