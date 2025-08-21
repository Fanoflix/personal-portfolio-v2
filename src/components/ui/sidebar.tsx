"use client";

import { cn } from "@/src/lib/utils";
import { Button } from "@/src/components/Button/button";
import { PanelRight } from "lucide-react";
import { createContext, PropsWithChildren, useContext, useState } from "react";
import { SidebarAnimation } from "@/src/features/tools/components/SidebarAnimation";

interface SidebarContextType {
  isCollapsed: boolean;
  setIsCollapsed: (collapsed: boolean) => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export function useSidebar() {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
}

interface SidebarProviderProps {
  children: React.ReactNode;
  defaultCollapsed?: boolean;
}

export function SidebarProvider({
  children,
  defaultCollapsed = false,
}: SidebarProviderProps) {
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);

  return (
    <SidebarContext.Provider value={{ isCollapsed, setIsCollapsed }}>
      {children}
    </SidebarContext.Provider>
  );
}

interface SidebarProps {
  children: React.ReactNode;
  className?: string;
}

export function Sidebar({ children, className }: SidebarProps) {
  const { isCollapsed } = useSidebar();

  if (isCollapsed) {
    return null;
  }

  return (
    <div
      className={cn(
        "flex h-full flex-col border-r border-border bg-background w-60 md:w-72 relative z-20",
        className,
      )}
    >
      {children}
    </div>
  );
}

interface SidebarHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export function SidebarHeader({ children, className }: SidebarHeaderProps) {
  return (
    <div
      className={cn(
        "flex h-14 items-center border-b border-border px-4",
        className,
      )}
    >
      {children}
    </div>
  );
}

interface SidebarContentProps {
  children: React.ReactNode;
  className?: string;
}

export function SidebarContent({ children, className }: SidebarContentProps) {
  return (
    <div className={cn("flex-1 overflow-auto py-2", className)}>{children}</div>
  );
}

interface SidebarTriggerProps {
  className?: string;
}

export function SidebarTrigger({
  className,
  text,
}: SidebarTriggerProps & { text?: string }) {
  const { isCollapsed, setIsCollapsed } = useSidebar();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setIsCollapsed(!isCollapsed)}
      className={cn(
        "w-max h-8 px-1.5 py-0 rounded-lg hover:bg-accent/40",
        className,
      )}
    >
      {text ? (
        <div className="flex flex-nowrap items-center justify-start gap-1.5 w-max">
          {text && <span>{text}</span>}
          <PanelRight className="h-4 w-4" />
        </div>
      ) : (
        <PanelRight className="h-4 w-4" />
      )}
    </Button>
  );
}

interface SidebarGroupProps {
  children: React.ReactNode;
  className?: string;
}

export function SidebarGroup({ children, className }: SidebarGroupProps) {
  return <div className={cn("px-3 py-2", className)}>{children}</div>;
}

interface SidebarGroupLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SidebarGroupLabel({
  children,
  className,
}: SidebarGroupLabelProps) {
  return (
    <div
      className={cn(
        "px-1 py-1 text-xs font-bold text-muted-foreground uppercase tracking-wider",
        className,
      )}
    >
      {children}
    </div>
  );
}

interface SidebarGroupContentProps {
  children: React.ReactNode;
  className?: string;
}

export function SidebarGroupContent({
  children,
  className,
}: SidebarGroupContentProps) {
  return <div className={cn("space-y-1", className)}>{children}</div>;
}

interface SidebarMenuItemProps {
  children: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
}

export function SidebarMenuItem({
  children,
  isActive,
  onClick,
  className,
  icon,
}: SidebarMenuItemProps) {
  const { isCollapsed } = useSidebar();

  return (
    <button
      onClick={onClick}
      className={cn(
        "flex w-full items-center gap-2 rounded-lg px-3 py-1.5 text-sm font-medium text-left",
        "hover:bg-accent/70 hover:text-accent-foreground",
        isActive && "bg-accent/35 text-dark",
        className,
      )}
    >
      {icon && <div className="flex-shrink-0">{icon}</div>}
      {<span className="truncate">{children}</span>}
    </button>
  );
}
