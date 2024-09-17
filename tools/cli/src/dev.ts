import { findWorkspaceDir } from "@pnpm/find-workspace-dir";
import { findWorkspacePackages, Project } from "@pnpm/workspace.find-packages";
import execSh from "exec-sh";
import inquirer from "inquirer";
import { z } from "zod";
import { Command, IOptionsValidation } from "./command";

const name = "dev";
const description = "Start develop app";
const options = z.object({
  turbo: z
    .boolean()
    .default(false)
    .describe("Same as the `turbo` option of `next dev`"),
}) satisfies IOptionsValidation;

export class CommandDev extends Command<typeof options> {
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

    const currentApp = apps.find((x) => x.rootDir === this.cwd);
    if (currentApp) {
      this.devApp(currentApp);
      return;
    }

    this.devWorkspace(workspace, apps);
  }

  devWorkspace(workspace: string, apps: Project[]) {
    inquirer
      .prompt([
        {
          type: "list",
          name: "packageName",
          message: "Select app",
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

  devApp(app: Project) {
    execSh(`pnpm next dev ${this.options?.turbo ? "--turbo" : ""}`, {
      cwd: app.rootDir,
    });
  }
}
