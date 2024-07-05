import { createSockets } from "./test-utils";

describe("SocketServer", () => {
  test("setupLister", async () => {
    const name = "name";
    const args: any[] = [1, 2, 3];
    const requestId = "requestId";
    const result = {};

    const actions = {
      [name]: vi.fn(() => result),
    };
    const { sendToServer } = createSockets(actions);

    sendToServer({
      name,
      args,
      requestId,
    });

    sendToServer({
      name: "unknown",
    });

    await new Promise((rs) => setTimeout(rs, 10));

    expect(actions[name]).toHaveBeenCalledTimes(1);
    expect(actions[name]).toHaveBeenCalledWith(...args);
  });
});
