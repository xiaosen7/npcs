import { ESupportedProtocol } from "../types";

export const DEFAULTS = {
  mergedFileName: "merged",
  chunksDir: "chunks",
  chunkSize: 1 * 1024 * 1024,
  concurrency: 1,
  maxChunkSize: 5 * 1024 * 1024,
  minChunkSize: 100 * 1024,
  maxConcurrency: 10,
  minConcurrency: 1,
  protocol: ESupportedProtocol.Websocket,
};
