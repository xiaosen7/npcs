import { uploadActions } from "@next.js-practical-cases/upload/actions";
import { SocketServer } from "@next.js-practical-cases/upload/socket/models/server";
import { DEFAULTS } from "@next.js-practical-cases/upload/upload/constants/defaults";
import { createServer } from "node:http";
import { Server } from "socket.io";

export function startWebsocketServer() {
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
    .listen(9999, () => {
      console.log(`> Socket server is ready on http://${hostname}:${9999}`);
    });
}
