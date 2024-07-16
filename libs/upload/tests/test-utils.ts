import { SocketClient } from "@client/socket";
import { SocketServer } from "@server/socket";
import EventEmitter from "events";

export function nameOf<TObject>(obj: TObject, key: keyof TObject): string;
export function nameOf<TObject>(key: keyof TObject): string;
export function nameOf(key1: any, key2?: any): any {
  return key2 ?? key1;
}

export function expectTime(time: number, expectedTime: number, allowDiff = 10) {
  expect(time).toBeGreaterThanOrEqual(expectedTime - allowDiff);
  expect(time).toBeLessThanOrEqual(expectedTime + allowDiff);
}

export class MockSocket extends EventEmitter {
  send = vi.fn();
}

export function createSocket() {
  return new (class extends EventEmitter {
    send = vi.fn();
  })();
}

export function createSocketIO() {
  return new (class extends EventEmitter {
    send = vi.fn();
  })();
}

export function createSockets<T>(actions: T) {
  const serverSocket = new (class extends EventEmitter {
    send = vi.fn((message) => {
      // send to client
      clientSocketIO.emit("message", message);
    });
  })();
  const serverSocketIO = new (class extends EventEmitter {
    send = vi.fn();
  })();
  const clientSocketIO = new (class extends EventEmitter {
    send = vi.fn((message) => {
      // send to server
      serverSocket.emit("message", message);
    });
  })();

  const socketServer = new SocketServer(serverSocketIO, actions);
  const socketClient = new SocketClient<T>(clientSocketIO);

  serverSocketIO.emit("connection", serverSocket);

  function sendToServer(data: any) {
    clientSocketIO.send(data);
  }

  function sendToClient(data: any) {
    serverSocket.send(data);
  }

  return {
    socketClient,
    socketServer,
    sendToClient,
    sendToServer,
  };
}
