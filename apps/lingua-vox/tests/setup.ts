import { loadAppEnvs } from "@npcs/next-config/load-env";
import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

import proxy from "node-global-proxy";

loadAppEnvs();

proxy.setConfig("http://127.0.0.1:7890");
proxy.start();

afterEach(() => {
  cleanup();
});
