import rehypePrism from "@mapbox/rehype-prism"
import nextMDX from "@next/mdx"
import remarkGfm from "remark-gfm"
import path from "node:path"

import * as url from "url"

const __dirname = url.fileURLToPath(new URL(".", import.meta.url))

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["tsx", "mdx"],
  reactStrictMode: true,
  output: "standalone",
  swcMinify: true,
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["localhost"],
  },
  experimental: {
    // newNextLinkBehavior: true,
    scrollRestoration: true,
    outputFileTracingRoot: path.join(__dirname, "../../"),
  },

  transpilePackages: ["ui"],
}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
})

export default withMDX(nextConfig)
