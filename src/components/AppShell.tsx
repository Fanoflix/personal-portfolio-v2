import { PropsWithChildren } from "react";
import SiteNavbar from "./SiteNavBar";
import TopNavbar from "./TopNavbar";

export default function AppShell({ children }: PropsWithChildren) {
  return (
    <div className="p-6 flex flex-col items-center">
      <TopNavbar />
      <SiteNavbar />
      {children}
    </div>
  );
}
