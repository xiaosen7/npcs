import { ZodType } from "zod";

export function buildTimeOptional<T extends ZodType>(env: T) {
  return env
    .optional()
    .describe(
      `This env is optional because it is only used at runtime, but it can be undefined at the build time`,
    );
}
