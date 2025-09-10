"use client";
import dynamic from "next/dynamic";
import { PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

const DynamicToolsProviderWithNoSSR = dynamic(
  () =>
    import("@/features/tools/lib/hooks/useTools").then(
      (mod) => mod.ToolsProvider,
    ),
  { ssr: false },
);

export default function ToolsLayout({ children }: PropsWithChildren) {
  return (
    <DynamicToolsProviderWithNoSSR>
      <div className="h-[calc(100vh-80px)] w-full p-4 md:p-12">
        <div
          className={cn(
            "absolute inset-0 -z-50 h-full",
            // Dotted background pattern
            "bg-background",
            "bg-[radial-gradient(circle,var(--color-input)_0.5px,transparent_1px)]",
            "bg-size-[35px_35px]",
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

        <div className="relative z-10 flex w-full justify-center overflow-hidden pt-24">
          {children}
        </div>
      </div>
    </DynamicToolsProviderWithNoSSR>
  );
}
