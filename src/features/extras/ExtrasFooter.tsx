import { Fragment } from "react";

import InlineLink from "@/components/InlineLink/InlineLink";
import MyLogo from "@/components/MyLogo/MyLogo";

import { EXTRAS } from "./constants";

/**
 * The one thing at the bottom of the home page.
 *
 * Reads off the same list as `/extras` — every entry, so a new project appears
 * in both places from a single edit and neither can quietly fall behind.
 */
export default function ExtrasFooter() {
  return (
    // A fixed 196px of otherwise empty page, with the line sitting at the very
    // bottom of it — the gap above is the point, so this reads as a sign-off
    // rather than a section.
    // Stacks below `md`: on a phone the sentence always wraps, and once it does
    // the logo sits beside the *first* line only, leaving the rest hanging off
    // on its own.
    <footer className="flex h-[196px] flex-col items-center justify-center gap-2 px-2 pb-4 text-sm md:flex-row md:items-end">
      {/* Wrapped, because `MyLogo` carries `m-auto`. As a direct flex child that
          auto margin absorbs every pixel of free space in the row and shoves
          everything after it to the far edge. A content-sized wrapper leaves it
          nothing to absorb. */}
      <span className="shrink-0">
        <MyLogo containerClassName="max-h-6 min-h-6 max-w-5 min-w-5 opacity-50 hover:opacity-100" />
      </span>
      {/* Only earns its place in a row — stacked, the line break already
          separates the two. */}
      <span
        className="text-text hidden text-xl leading-6 font-thin md:inline"
        aria-hidden
      >
        |
      </span>
      <p className="text-text text-center md:text-left">
        Checkout some fun stuff I have created:{" "}
        {EXTRAS.map(({ href, label, external }, index) => (
          <Fragment key={href}>
            {index > 0 && ", "}
            <InlineLink external={external} href={href}>
              {label}
            </InlineLink>
          </Fragment>
        ))}
      </p>
    </footer>
  );
}
