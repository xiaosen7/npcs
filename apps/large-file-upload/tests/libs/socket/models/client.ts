import { createSockets } from "./test-utils";

describe("SocketClient", () => {
  const name = "name";
  const args: any[] = [1, 2, 3];
  const expectedResult = {};

  const actions = {
    [name]: vi.fn(async (...args: any[]) => expectedResult),
  };

  const { socketClient } = createSockets(actions);

  test("actions", async () => {
    expect(socketClient.actions[name]).toBeTypeOf("function");

    const result = await socketClient.actions[name](...args);
    expect(result).toBe(expectedResult);
  });
});
