// @ts-check

import { sharedNextConfig } from "@npcs/next-config";

/** @type {import('next').NextConfig} */
const config = {
  ...sharedNextConfig,
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
};

export default config;
