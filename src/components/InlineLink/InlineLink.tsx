import Link from "next/link";
import { PropsWithChildren } from "react";

/**
 * Inline Link to be used within a paragraph
 */
export default function InlineLink({
  href,
  external = true,
  children,
}: {
  href: string;
  /**
   * Whether this leaves the site. External by default, since that's what an
   * inline link in prose almost always is — but an internal one mustn't open a
   * tab, or moving around the site strands you in a second window.
   */
  external?: boolean;
} & PropsWithChildren) {
  return (
    <Link
      className="hover:decoration-primary dark:hover:decoration-primary text-primary inline font-medium underline decoration-neutral-300 underline-offset-[6px] transition-colors dark:decoration-neutral-700"
      href={href}
      {...(external ? { rel: "noopener noreferrer", target: "_blank" } : {})}
    >
      {children}
    </Link>
  );
}
