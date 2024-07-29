import { createLog } from "@/log";
import consola from "consola";

describe(createLog.name, () => {
  beforeAll(() => {
    consola.wrapAll();
  });

  beforeEach(() => {
    consola.mockTypes(() => vitest.fn());
  });

  test("log", async () => {
    const tag = "tag";
    const msg = "message";
    const log = createLog(tag);
    log.log(msg);

    const consolaMessages = (log.log as any).mock.calls.map((c: any) => c[0]);
    expect(consolaMessages).toContain(msg);
  });
});
