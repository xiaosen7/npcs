import NextFederationPlugin from "@module-federation/nextjs-mf";
import { sharedNextConfig } from "@npcs/next-config";
import { merge } from "webpack-merge";

process.env.NEXT_PRIVATE_LOCAL_WEBPACK = "true";

const remotes = (isServer) => {
  const location = isServer ? "ssr" : "chunks";
  return {
    mf_shared: `mf_shared@http://localhost:3000/_next/static/${location}/remoteEntry.js`,
  };
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...sharedNextConfig,
  webpack(config, options) {
    const sharedConfig = sharedNextConfig.webpack(config);

    return merge(sharedConfig, {
      plugins: [
        new NextFederationPlugin({
          filename: "static/chunks/remoteEntry.js",
          name: "mf_consumer",
          remotes: remotes(options.isServer),
        }),
      ],
    });
  },
};

export default nextConfig;
