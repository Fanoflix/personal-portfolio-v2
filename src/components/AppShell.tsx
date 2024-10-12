import { PropsWithChildren } from "react";
import TopNavbar from "./TopNavbar";

export default function AppShell({ children }: PropsWithChildren) {
  return (
    <div className="p-6 flex flex-col">
      <TopNavbar />
      {children}
    </div>
  );
}
