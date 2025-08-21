"use client";

import "../globals.css";

import { ToolsProvider } from "@/src/features/tools/lib/hooks/useTools";
import { SidebarProvider } from "@/src/components/ui/sidebar";
import { PropsWithChildren, ReactNode } from "react";
import TopNavbar from "@/src/components/TopNavbar";
import { ThemeProvider } from "next-themes";
import localFont from "next/font/local";
import { usePathname } from "next/navigation";
import { cn } from "@/src/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { layoutVariants } from "@/src/features/framer-animations/variants";

interface ToolsLayoutProps {
  children: ReactNode;
}

const inter = localFont({
  src: "../../../public/fonts/web/InterVariable.woff2",
  variable: "--font-inter",
  display: "swap",
  weight: "100 200 300 400 500 600 700 800 900",
});

export default function ToolsLayout({ children }: ToolsLayoutProps) {
  return (
    <html
      className={`${inter.variable} antialiased`}
      lang="en"
      suppressHydrationWarning={true}
    >
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <SidebarProvider>
            <TopNavbar />
            <WithSidebarShell>{children}</WithSidebarShell>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

export function WithSidebarShell({ children }: PropsWithChildren) {
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "w-screen bg-transparent overflow-x-hidden px-3 md:px-0",
        "pb-6 flex flex-col items-center justify-center",
      )}
    >
      <AnimatePresence mode="wait">
        <motion.section
          className="w-full"
          key={pathname}
          variants={layoutVariants}
          initial="hidden"
          animate="visible"
        >
          {children}
        </motion.section>
      </AnimatePresence>
    </div>
  );
}
