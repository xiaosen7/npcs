import { uploadActions } from "@/actions/upload";
import { WEBSOCKET_PORT } from "@/shared/constants";
import { SocketServer } from "@/socket/models/server";
import { DEFAULTS } from "@/upload/constants/defaults";
import { createServer } from "node:http";
import { Server } from "socket.io";

if (require.main === module) {
  console.log(`Starting socket server...`);
  createSocketServer();
}

export function createSocketServer() {
  const hostname = "0.0.0.0";

  const httpServer = createServer();

  new SocketServer(
    new Server(httpServer, {
      maxHttpBufferSize: DEFAULTS.maxChunkSize,
      cors: {
        origin: "*",
      },
    }),
    uploadActions
  );

  httpServer
    .once("error", (err) => {
      console.error(err);
      process.exit(1);
    })
    .listen(WEBSOCKET_PORT, () => {
      console.log(
        `> Socket server is ready on http://${hostname}:${WEBSOCKET_PORT}`
      );
    });
}

export {};
