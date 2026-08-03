/**
 * Things worth looking at that aren't work, and aren't a blog post either.
 *
 * Kept as data rather than markup so the page stays a single map, and adding
 * one is a line here instead of a block of JSX.
 */
export const EXTRAS: {
  href: string;
  label: string;
  description: string;
  /** Internal ones must not open a tab. See `InlineLink`. */
  external?: boolean;
}[] = [
  {
    href: "https://fanoflix.github.io/webfun/",
    label: "webfun",
    description: "Interactive graphics and motion experiments",
  },
  {
    href: "https://fanoflix.github.io/rawgrid-client/",
    label: "rawgrid",
    description: "A developer toolbox in a resizable grid",
  },
  {
    href: "/learn/react-query",
    label: "react query quiz",
    description: "How well do you know Query?",
    external: false,
  },
];
