import { uploadActions } from "@/actions/upload";
import { WEBSOCKET_PORT } from "@/shared/constants";
import { SocketServer } from "@/socket/models/server";
import { DEFAULTS } from "@/upload/constants/defaults";
import { createServer } from "node:http";
import { Server } from "socket.io";

function createSocketServer() {
  const hostname = "0.0.0.0";

  const httpServer = createServer();

  const server = new SocketServer(
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

  return server;
}

if (
  // @ts-ignore
  !global.socketServer &&
  process.env.NEXT_PHASE !== "phase-production-build"
) {
  console.log("Creating socket server...");
  // @ts-ignore
  global.socketServer = createSocketServer();
}
