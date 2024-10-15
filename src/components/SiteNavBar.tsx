"use client";
import Link from "next/link";

export default function SiteNavbar() {
  return (
    <nav className="flex items-end gap-5 justify-end">
      <h2>
        <Link href="/">Home</Link>
      </h2>
      <h2>
        <Link href="/contact">Contact</Link>
      </h2>
    </nav>
  );
}
