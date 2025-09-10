import { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface LearnLayoutProps {
  children: ReactNode;
}

export default function LearnLayout({ children }: LearnLayoutProps) {
  return (
    <div
      className={cn(
        "w-full px-3 md:px-0",
        "flex flex-col items-center justify-center pb-6",
      )}
    >
      {children}
    </div>
  );
}
