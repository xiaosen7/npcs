import { merge } from "webpack-merge";

const requiredEnvs = [
  "NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY",
  "CLERK_SECRET_KEY",
  "POSTGRES_URL_NON_POOLING",
  "POSTGRES_PRISMA_URL",
];

const missingEnvs = requiredEnvs.filter((env) => !process.env[env]);
if (missingEnvs.length > 0) {
  throw new Error(`Missing environment variables: ${missingEnvs.join(", ")}`);
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.dicebear.com",
        port: "",
        pathname: "/**/*",
      },
      {
        hostname: "img.clerk.com",
      },
      {
        hostname: "picsum.photos",
      },
      {
        hostname: "cloudflare-ipfs.com",
      },
      {
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
  eslint: {
    dirs: ["app", "libs"],
  },
  webpack(config) {
    return merge(config, {
      module: {
        rules: [
          {
            resourceQuery: /raw/,
            type: "asset/source",
          },
        ],
      },
    });
  },
};

export default nextConfig;
