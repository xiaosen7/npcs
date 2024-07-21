import { constantCase, pascalCase } from "change-case";
import fg from "fast-glob";
import fsx from "fs-extra";
import slash from "slash";

import handlebars from "handlebars";
import { basename, dirname, extname, join, relative, resolve } from "path";
import { z } from "zod";
import { createCommand } from "./create-command";

const COMMAND_NAME = "generate-components";
const DESCRIPTION =
  "Generate Next.js `Image` components from public image resources";

export const optionsValidation = z.object({
  templatesDir: z
    .string()
    .default("./templates")
    .describe("Templates directory"),
  publicDir: z.string().default("./public").describe("Public directory"),
  outDir: z
    .string()
    .default("./src/libs/generated-components")
    .describe("Directory for generated code"),
});

export const generateComponentsCommand = createCommand(
  COMMAND_NAME,
  DESCRIPTION,
  optionsValidation,
  generateComponents,
);

interface IGenerateComponentsOptions
  extends z.infer<typeof optionsValidation> {}
export async function generateComponents(options: IGenerateComponentsOptions) {
  const { publicDir, templatesDir, outDir } = options;
  const cwd = resolve();
  const publicAssetsDir = publicDir;

  const assetPaths = await fg(["**/*.{svg,png,jpg}"], {
    cwd: publicAssetsDir,
    absolute: true,
  });

  await Promise.all(
    assetPaths.map(async (fsPath) => {
      await assetToComponent(fsPath);
    }),
  );

  async function assetToComponent(fsPath: string) {
    const ext = extname(fsPath).slice(1);
    switch (ext) {
      case "svg":
      case "png":
      case "jpg":
        await toImage();
        break;

      default:
        throw new Error(`Unknown extension: ${ext}, at file path: ${fsPath}`);
    }

    async function toImage() {
      const url = slash(relative(publicDir, fsPath));
      if (url.startsWith(".")) {
        throw new Error(`Invalid path: ${url}`);
      }

      const templateFilePath = join(
        templatesDir,
        relative(cwd, publicDir),
        dirname(url),
        "index.handlebars",
      );
      if (!fsx.existsSync(templateFilePath)) {
        console.warn(`Template file not found: ${templateFilePath}`);
        return;
      }

      const fsBaseName = basename(fsPath, extname(fsPath));
      const componentVariableName = pascalCase(
        `${dirname(fsPath) === publicDir ? "Image" : basename(dirname(fsPath))}-${fsBaseName}`,
      );
      const srcVariableName = constantCase("Src" + componentVariableName);
      const outputPath = join(
        outDir,
        dirname(relative(publicAssetsDir, fsPath)),
        `${fsBaseName}.tsx`,
      );

      const template = handlebars.compile(
        await fsx.readFile(templateFilePath, "utf-8"),
      );
      const content = template({ srcVariableName, componentVariableName, url });

      await fsx.ensureFile(outputPath);
      await fsx.writeFile(outputPath, content);
      console.log("Generated:", outputPath);
    }
  }
}
