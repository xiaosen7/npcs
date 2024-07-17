import { ISocketIO } from "@shared/socket";
import { get } from "lodash-es";

/**
 * The wrapper of socket io in server side
 */
export class SocketServer<TActions> {
  constructor(io: ISocketIO, actions: TActions) {
    console.log("socket server: actions", actions);

    io.on("connection", (socket) => {
      socket.on("message", async (value: any) => {
        const { name, args = [], requestId } = value;

        console.log("socket server: receive", value);
        const handle = get(actions, name);
        console.log("socket server: handle", handle);
        if (handle) {
          const result = await handle(...args);
          console.log("socket server: send", result);
          socket.send({ result, requestId });
        }
      });
    });
  }
}
