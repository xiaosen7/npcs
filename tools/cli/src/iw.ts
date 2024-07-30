import { findWorkspaceDir } from "@pnpm/find-workspace-dir";
import { findWorkspacePackages } from "@pnpm/workspace.find-packages";
import execSh from "exec-sh";
import inquirer from "inquirer";
import { z } from "zod";
import { Command, IOptionsValidation } from "./command";

const name = "iw";
const description = "Install packages from workspace";
const options = z.object({}) satisfies IOptionsValidation;

export class CommandIw extends Command<typeof options> {
  constructor() {
    super(name, description, options);
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

    inquirer
      .prompt([
        {
          type: "list",
          name: "installTo",
          message: "Select where packages you want to install into",
          choices: apps.map((x) => x.manifest.name!),
        } as any,
        {
          type: "list",
          name: "packages",
          message: "Select packages to install",
          choices: apps.map((x) => x.manifest.name!),
        } as any,
      ])
      .then(({ packageName }) => {
        execSh(`turbo dev --filter=${packageName}`, {
          cwd: workspace,
        });
      })
      .catch((error) => {
        if (error.isTtyError) {
          this.throwError(
            `Prompt couldn't be rendered in the current environment`,
          );
        } else {
          this.throwError(error.message);
        }
      });
  }
}
