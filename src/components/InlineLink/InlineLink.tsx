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
      className="underline underline-offset-[5px] decoration-text text-primary hover:decoration-primary"
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      <span>{children}</span>
    </Link>
  );
}
