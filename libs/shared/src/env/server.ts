import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";
import { buildTimeOptional } from "./utils";

export const env = createEnv({
  server: {
    DATABASE_URL: buildTimeOptional(z.string().min(1)),
    CLERK_SECRET_KEY: buildTimeOptional(z.string().min(1)),
  },
  experimental__runtimeEnv: process.env,
});
