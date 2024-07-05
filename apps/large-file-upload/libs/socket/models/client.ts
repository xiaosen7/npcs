import { deconstructFormData } from "@/shared/utils/type";
import { v4 as generateId } from "uuid";
import { ISocketIO } from "../types";

/**
 * The wrapper for socket io in client side
 */
export class SocketClient<T> {
  actions: T;

  #requests = new Map<string, (data: any) => void>();

  constructor(private io: ISocketIO) {
    this.actions = new Proxy(
      {},
      {
        get: (_, name) => {
          return async (...args: any[]) => {
            const requestId = generateId();
            const message = {
              name,
              args: args.map((x) =>
                x instanceof FormData ? deconstructFormData(x) : x
              ),
              requestId,
            };
            this.io.send(message);

            return new Promise((resolve) => {
              const resolver = (data: any) => {
                this.#requests.delete(requestId);
                resolve(data);
              };

              this.#requests.set(requestId, resolver);
            });
          };
        },
      }
    ) as T;

    io.on("message", (message: any) => {
      const { requestId, result } = message;
      const resolver = this.#requests.get(requestId);
      resolver?.(result);
    });
  }
}
