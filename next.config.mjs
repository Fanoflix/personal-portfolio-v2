/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects() {
    return [
      /**
       * `/tools` is retired in favour of `/extras`.
       *
       * Handled here rather than by a `redirect()` inside the route, so it
       * applies before anything renders and catches inbound links from outside
       * the site too. The route files are gone; the implementation under
       * `src/features/tools/` is left in place for whenever it comes back.
       *
       * Not permanent: a 308 is cached by browsers indefinitely and is
       * miserable to undo if `/tools` is ever revived.
       */
      { source: "/tools", destination: "/extras", permanent: false },
      { source: "/tools/:path*", destination: "/extras", permanent: false },
    ];
  },
};

export default nextConfig;
