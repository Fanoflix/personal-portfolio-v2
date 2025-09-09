"use client";
import { ToolsProvider } from "@/src/features/tools/lib/hooks/useTools";
import { cn } from "@/src/lib/utils";
import { PropsWithChildren } from "react";

export default function ToolsLayout({ children }: PropsWithChildren) {
  return (
    <ToolsProvider>
      <div className="h-[calc(100vh-80px)] w-full p-4 md:p-12">
        <div
          className={cn(
            "absolute inset-0 h-full -z-50",
            // Dotted background pattern
            "bg-background",
            "bg-[radial-gradient(circle,theme(colors.input)_0.5px,transparent_1px)]",
            "bg-[length:35px_35px]",
          )}
          style={{
            backgroundPosition: "0 0, 35px 35px",
            maskImage:
              "linear-gradient(to right, transparent 0%, black 7%, black 93%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 7%, black 93%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 7%, black 93%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 7%, black 93%, transparent 100%)",
            maskComposite: "intersect",
            WebkitMaskComposite: "intersect",
          }}
        />

        <div className="flex overflow-hidden w-full relative z-10 pt-24 justify-center">
          {children}
        </div>
      </div>
    </ToolsProvider>
  );
}
