import createMDX from "@next/mdx";
import { sharedNextConfig } from "@npcs/next-config";

const withMDX = createMDX({
  // Add markdown plugins here, as desired
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...sharedNextConfig,
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  experimental: {
    ...sharedNextConfig.experimental,
    mdxRs: true,
  },
};

export default withMDX(nextConfig);
