#!/usr/bin/env node

// @ts-check
import { createLog } from "@npcs/shared/log";
import { Command as Commander } from "commander";
import * as commands from "../esm/index.js";
import { Command } from "../esm/index.js";

(async () => {
  process.on("SIGINT", function () {
    process.exit();
  });

  const log = createLog("npcs");

  /**
   *
   * @param {Error} error
   */
  function errorHandler(error) {
    log.error("@npcs/cli:", error.message);
    if (error.stack) {
      log.error("@npcs/cli:", error.stack);
    }

    process.exit(1);
  }
  process.on("uncaughtException", errorHandler);
  process.on("unhandledRejection", errorHandler);

  const program = new Commander().name("npcs");

  Object.values(commands).forEach((CommandCtrl) => {
    if (
      Object.getPrototypeOf(CommandCtrl.prototype) === Command.prototype &&
      CommandCtrl !== Command
    ) {
      // @ts-ignore
      program.addCommand(new CommandCtrl().cmd);
    }
  });

  program.parse();
})();
