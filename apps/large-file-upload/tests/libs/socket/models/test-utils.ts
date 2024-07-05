import { SocketClient } from "@/socket/models/client";
import { SocketServer } from "@/socket/models/server";
import EventEmitter from "events";

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
