import NextFederationPlugin from "@module-federation/nextjs-mf";
import { sharedNextConfig } from "@npcs/next-config";
import webpack from "webpack";
import { merge } from "webpack-merge";

const { container } = webpack;

process.env.NEXT_PRIVATE_LOCAL_WEBPACK = "true";

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...sharedNextConfig,
  webpack(config) {
    const sharedConfig = sharedNextConfig.webpack(config);

    return merge(sharedConfig, {
      plugins: [
        new NextFederationPlugin({
          name: "mf_shared",
          filename: "static/chunks/remoteEntry.js",
          exposes: {
            "./add": "./src/exposes/add.ts",
          },
        }),
      ],
    });
  },
};

export default nextConfig;
