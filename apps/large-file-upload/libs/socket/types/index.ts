export interface ISocket {
  send: (message: any) => void;
  on: (type: "message", callback: (message: any) => void) => void;
}

export interface ISocketIO {
  on: (type: "message" | "connection", callback: (data: any) => void) => void;
  send: (message: any) => void;
}
