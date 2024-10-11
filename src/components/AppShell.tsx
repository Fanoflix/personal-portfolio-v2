import { PropsWithChildren } from "react";
import Navbar from "./Navbar";

export default function AppShell({ children }: PropsWithChildren) {
  return (
    <div className="p-6 flex flex-col">
      <Navbar />
      {children}
    </div>
  );
}
