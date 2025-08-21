"use client";
import { SidebarTrigger, useSidebar } from "@/src/components/ui/sidebar";
import { ToolsSidebar } from "@/src/features/tools/components/ToolsSidebar";
import { ToolsProvider } from "@/src/features/tools/lib/hooks/useTools";
import { cn } from "@/src/lib/utils";
import { PropsWithChildren } from "react";

export default function ToolsLayout({ children }: PropsWithChildren) {
  const { isCollapsed } = useSidebar();

  return (
    <ToolsProvider>
      <div className="h-[calc(100vh-150px)] w-full p-4 md:p-12">
        <div
          className={cn(
            "absolute inset-0 h-full -z-50",
            // Dotted background pattern
            "bg-background",
            "bg-[radial-gradient(circle,theme(colors.border)_1px,transparent_1px)]",
            "bg-[length:30px_30px]",
          )}
          style={{
            backgroundPosition: "0 0, 30px 30px",
            maskImage:
              "linear-gradient(to right, transparent 0%, black 35%, black 85%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 35%, black 85%, transparent 100%)",
          }}
        />

        {isCollapsed && (
          <SidebarTrigger
            text="More tools"
            className="fixed inline top-7 md:top-14 z-50"
          />
        )}

        <ToolsSidebar />

        <div className="flex overflow-hidden w-full relative z-10 pt-24 justify-center">
          {children}
        </div>
      </div>
    </ToolsProvider>
  );
}
