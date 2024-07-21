#!/usr/bin/env node

// @ts-check
import { Command } from "commander";
import { CommandDevApp, CommandGenerateComponents } from "../esm/index.js";

(async () => {
  process.on("SIGINT", function () {
    process.exit();
  });

  /**
   *
   * @param {Error} error
   */
  function errorHandler(error) {
    console.error("@npc/cli:", error.message);
    if (error.stack) {
      console.error("@npc/cli:", error.stack);
    }

    process.exit(1);
  }
  process.on("uncaughtException", errorHandler);
  process.on("unhandledRejection", errorHandler);

  const program = new Command().name("npc");

  program.addCommand(new CommandGenerateComponents().cmd);
  program.addCommand(new CommandDevApp().cmd);
  program.parse();
})();
