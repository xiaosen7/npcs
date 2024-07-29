import { rimraf } from "rimraf";
import { z } from "zod";
import { Command, IOptionsValidation } from "./command";

const targets = [
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
];
const name = "clean";
const description = `Clean files in current project. targets: ${targets.join(", ")}`;
const options = z.object({}) satisfies IOptionsValidation;

export class CommandClean extends Command<typeof options> {
  constructor() {
    super(name, description, options);
  }

  async action() {
    await rimraf(targets, {
      glob: true,
    });
  }
}
