import { UploadStorage } from "@next.js-practical-cases/upload/upload/models/storages/base";
import { MemoryStorage } from "@next.js-practical-cases/upload/upload/models/storages/memory";
import { entries, set } from "lodash-es";

interface IConfiguration {
  storage: UploadStorage;
  webSocketPort: number;
}

export const DEFAULT_GLOBAL_STORE: IConfiguration = {
  storage: new MemoryStorage(),
  webSocketPort: 9999,
} as const satisfies IConfiguration;

class Configuration implements IConfiguration {
  storage = DEFAULT_GLOBAL_STORE.storage;
  webSocketPort = DEFAULT_GLOBAL_STORE.webSocketPort;

  set(value: Partial<IConfiguration>) {
    entries(value).forEach(([key, value]) => {
      set(this, key, value);
    });
  }
}

export const configuration = new Configuration();
