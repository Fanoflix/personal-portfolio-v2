import { ReactNode } from "react";

interface LearnLayoutProps {
  children: ReactNode;
}

export default function LearnLayout({ children }: LearnLayoutProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-4xl">{children}</div>
    </div>
  );
}
