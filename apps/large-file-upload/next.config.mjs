import isDocker from "is-docker";

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.BASE_PATH,
  eslint: {
    ignoreDuringBuilds: true,
  },
  /**
   * standalone: after next build, then teh node_modules/next directory will be empty, I don't know why
   */
  output: isDocker() ? "standalone" : undefined,
};

export default nextConfig;
