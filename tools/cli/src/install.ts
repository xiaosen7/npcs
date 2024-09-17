import { findWorkspaceDir } from "@pnpm/find-workspace-dir";
import { findWorkspacePackages } from "@pnpm/workspace.find-packages";
import execSh from "exec-sh";
import inquirer from "inquirer";
import { z } from "zod";
import { Command, IOptionsValidation } from "./command";

const name = "install";
const description = "Install npm package in specify package";
const options = z.object({}) satisfies IOptionsValidation;

export class CommandInstall extends Command<typeof options> {
  constructor() {
    super(name, description, options);
    this.cmd.argument("<packagesToInstall...>");
  }

  async action() {
    const workspace = await findWorkspaceDir(this.cwd);
    if (!workspace) {
      this.throwError("Not a workspace");
    }

    const [packagesToInstall] = this.args!;
    this.log.debug({ packagesToInstall });

    const packages = (await findWorkspacePackages(workspace)).filter(
      (x) => x.rootDir !== workspace,
    );

    const { packageName } = await inquirer.prompt([
      {
        type: "list",
        name: "packageName",
        message: "Select package",
        choices: packages.map((x) => x.manifest.name!),
      } as any,
    ]);

    const selectedApp = packages.find(
      (app) => app.manifest.name === packageName,
    );

    if (!selectedApp) {
      this.throwError(`Package ${packageName} not found`);
    }

    execSh(`pnpm install ${packagesToInstall.join(" ")}`, {
      cwd: selectedApp.rootDir,
    });
  }
}
