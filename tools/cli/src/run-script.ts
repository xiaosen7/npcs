import { findWorkspaceDir } from "@pnpm/find-workspace-dir";
import { findWorkspacePackages } from "@pnpm/workspace.find-packages";
import execSh from "exec-sh";
import inquirer from "inquirer";
import { z } from "zod";
import { Command, IOptionsValidation } from "./command";

const name = "run-script";
const description = "Run script in specify package";
const options = z.object({}) satisfies IOptionsValidation;

export class CommandRunScript extends Command<typeof options> {
  constructor() {
    super(name, description, options);
    this.cmd.allowUnknownOption();
  }

  async action() {
    const workspace = await findWorkspaceDir(this.cwd);
    if (!workspace) {
      this.throwError("Not a workspace");
    }

    const apps = (
      await findWorkspacePackages(workspace, {
        patterns: ["./apps/*"],
      })
    ).filter((x) => x.rootDir !== workspace);

    const { packageName } = await inquirer.prompt([
      {
        type: "list",
        name: "packageName",
        message: "Select app",
        choices: apps.map((x) => x.manifest.name!),
      } as any,
    ]);

    const selectedApp = apps.find((app) => app.manifest.name === packageName);

    if (!selectedApp) {
      this.throwError(`Package ${packageName} not found`);
    }

    const { script } = await inquirer.prompt([
      {
        type: "list",
        name: "script",
        message: "Select script to run",
        choices: Object.entries(selectedApp.manifest.scripts ?? {}).map(
          ([script, content]) => `${script}: ${content}`,
        ),
      } as any,
    ]);

    if (!script) {
      this.throwError(`Script not found`);
    }

    execSh(`pnpm run ${script.split(": ")[0]}`, {
      cwd: selectedApp.rootDir,
    });
  }
}
