"use client";

import InlineLink from "@/components/InlineLink/InlineLink";

import { StaggeredContainer } from "../framer-animations/components/StaggeredContainer";
import { EXTRAS } from "./constants";

/**
 * Side projects, as a plain list and nothing else.
 *
 * Deliberately bare — no cards, no screenshots, no chrome. Each of these has a
 * site of its own to do the selling; this page's only job is to be a legible
 * index that gets out of the way, so it's narrow, centred, and stops there.
 */
export default function ExtrasPage() {
  return (
    // Vertically centred against the viewport less the navbar, so the list sits
    // in the middle of an otherwise empty page rather than under the header.
    //
    // `childClassName` is load-bearing: the stagger wraps every child in a div
    // of its own, and under `items-center` those wrappers would otherwise
    // shrink to their content and take the list's `w-full` down with them.
    <StaggeredContainer
      childClassName="w-full"
      containerClassName="flex min-h-[calc(100vh-110px)] w-full max-w-124 flex-col items-center gap-10 px-2 pt-20"
    >
      <h1 className="flex flex-col text-start leading-[0.75] font-black">
        Extras.
        <span className="text-primary/25 leading-[0.9]">
          Proof of concepts.Tools. Anything really. Fun stuff.
        </span>
      </h1>

      <ul className="w-full space-y-3 text-base">
        {EXTRAS.map(({ href, label, description, external }) => (
          <li key={href}>
            <InlineLink external={external} href={href}>
              {label}
            </InlineLink>
            {/* The dash and the description sit outside the link, so the
                underline marks only the part that's actually clickable. */}
            <span className="text-text"> — {description}</span>
          </li>
        ))}

        {/* Set apart from the list: it's the way out, not another entry. */}
        <li className="pt-10">
          <InlineLink external={false} href="/">
            back
          </InlineLink>
        </li>
      </ul>
    </StaggeredContainer>
  );
}
