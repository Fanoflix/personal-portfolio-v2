"use client";
import Link from "next/link";

export default function SiteNavbar() {
  return (
    <nav className="flex items-end gap-5 justify-end text-xs pb-20">
      <h2>
        <Link prefetch className="text-xs font-normal" href="/">
          Home
        </Link>
      </h2>
      <h2>
        <Link prefetch className="text-xs font-normal" href="/contact">
          Contact
        </Link>
      </h2>
      <h2>
        <Link prefetch className="text-xs font-normal" href="/work">
          Work
        </Link>
      </h2>
    </nav>
  );
}
