import Link from "next/link";
import { PropsWithChildren } from "react";

/**
 * Inline Link to be used within a paragraph
 */
export default function InlineLink({
  href,
  children,
}: {
  href: string;
} & PropsWithChildren) {
  return (
    <Link
      className="hover:decoration-primary dark:hover:decoration-primary text-primary inline font-medium underline decoration-neutral-300 underline-offset-[6px] transition-colors dark:decoration-neutral-700"
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      {children}
    </Link>
  );
}
