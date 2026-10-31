// GITHUB_PAGES=1 builds a static export served under /lc-imports on GitHub Pages.
const pages = process.env.GITHUB_PAGES === "1";

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(pages && { output: "export", basePath: "/lc-imports", trailingSlash: true }),
  images: { unoptimized: pages },
};

export default nextConfig;
