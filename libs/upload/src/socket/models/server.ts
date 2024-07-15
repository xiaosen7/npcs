import { uploadActions } from "@next.js-practical-cases/upload/actions";
import { configuration } from "@next.js-practical-cases/upload/configuration";
import { DEFAULTS } from "@next.js-practical-cases/upload/upload/constants/defaults";
import { get } from "lodash-es";
import { createServer } from "node:http";
import { Server } from "socket.io";
import { ISocketIO } from "../types";

/**
 * The wrapper of socket io in server side
 */
export class SocketServer<TActions> {
  static start() {
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
  }

  constructor(io: ISocketIO, actions: TActions) {
    io.on("connection", (socket) => {
      socket.on("message", async (value: any) => {
        const { name, args = [], requestId } = value;

        const handle = get(actions, name);
        if (handle) {
          const result = await handle(...args);
          socket.send({ result, requestId });
        }
      });
    });
  }
}
