import { rimraf } from "rimraf";
import { z } from "zod";
import { Command, IOptionsValidation } from "./command";

const name = "clean";
const description = "Clean files in current project.";
const options = z.object({}) satisfies IOptionsValidation;

export class CommandClean extends Command<typeof options> {
  constructor() {
    super(name, description, options);
  }

  async action() {
    await rimraf(
      [
        "node_modules",
        "esm",
        ".turbo",
        ".rollup.cache",
        "*.tsbuildinfo",
        ".next",
        "playwright-report",
        "test-results",
        "vitest.config.*.timestamp*",
        "coverage",
      ],
      {
        glob: true,
      },
    );
  }
}
