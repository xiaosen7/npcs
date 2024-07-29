#!/usr/bin/env node

// @ts-check
import { Command } from "commander";
import { CommandDev } from "../esm/dev.js";
import { CommandGenerateComponents } from "../esm/generate-components.js";

(async () => {
  process.on("SIGINT", function () {
    process.exit();
  });

  /**
   *
   * @param {Error} error
   */
  function errorHandler(error) {
    console.error("@npcs/cli:", error.message);
    if (error.stack) {
      console.error("@npcs/cli:", error.stack);
    }

    process.exit(1);
  }
  process.on("uncaughtException", errorHandler);
  process.on("unhandledRejection", errorHandler);

  const program = new Command().name("npcs");

  program.addCommand(new CommandGenerateComponents().cmd);
  program.addCommand(new CommandDev().cmd);

  program.parse();
})();
