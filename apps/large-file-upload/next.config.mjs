/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  /**
   * standalone: after next build, then teh node_modules/next directory will be empty, I don't know why
   */
  output: "standalone",
  distDir: "dist",
};

export default nextConfig;
