import { PHASE_PRODUCTION_BUILD } from "next/dist/shared/lib/constants";
import { ZodType } from "zod";

export function productionBuildOptional<T extends ZodType>(env: T) {
  if (process.env.NODE_ENV === PHASE_PRODUCTION_BUILD) {
    return env
      .optional()
      .describe(
        `This env is optional because it is only used at runtime, but it can be undefined at the build time`,
      );
  }

  return env;
}
