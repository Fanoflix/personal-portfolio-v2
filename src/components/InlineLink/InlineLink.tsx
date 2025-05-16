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
      className="inline underline underline-offset-[8px] decoration-neutral-300 dark:decoration-neutral-700 hover:decoration-primary dark:hover:decoration-primary text-primary font-medium transition-colors"
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      {children}
    </Link>
  );
}
