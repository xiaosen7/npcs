import { uploadActions } from "@next.js-practical-cases/upload/actions";
import { SocketServer } from "@next.js-practical-cases/upload/socket/models/server";
import { DEFAULTS } from "@next.js-practical-cases/upload/upload/constants/defaults";
import { once } from "lodash-es";
import { createServer } from "node:http";
import { Server } from "socket.io";
import { configuration } from "../../configuration";

export const startServer = once(() => {
  console.log("Creating socket server...");

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
    .listen(configuration.webSocketPort, () => {
      console.log(
        `> Socket server is ready on http://${hostname}:${configuration.webSocketPort}`
      );
    });

  return server;
});
