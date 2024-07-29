import { createLog, ILog } from "@npcs/shared/log";
import { Command as _Command } from "commander";
import { z } from "zod";

// TODO fix any
export type IOptionsValidation = z.ZodObject<any>;

export abstract class Command<
  TOptionsValidation extends IOptionsValidation = z.ZodObject<any>,
  TOptions = z.infer<TOptionsValidation>,
> {
  readonly cmd;
  readonly cwd = process.cwd();
  options?: TOptions;
  log: ILog;

  constructor(
    readonly name: string,
    readonly description: string,
    readonly optionsValidation: TOptionsValidation,
  ) {
    const cmd = new _Command(this.name);
    this.log = createLog(this.name);

    // options
    Object.entries(this.optionsValidation.shape).forEach(([key, option]) => {
      // TODO fix ts ignore
      // @ts-ignore
      const defaultValue = option._def?.defaultValue();
      cmd.option(
        `--${key} <${key}>`,
        defaultValue !== undefined
          ? // @ts-ignore
            `${option.description} (defaults to ${JSON.stringify(defaultValue)})`
          : // @ts-ignore
            option.description,
        defaultValue,
      );
    });

    cmd
      .description(this.description) // description
      .action(this.createActionWithValidation());

    this.cmd = cmd;
  }

  abstract action(): void;

  private createActionWithValidation() {
    return async (opts: TOptions) => {
      const result = this.optionsValidation.safeParse(opts);
      if (result.error) {
        this.throwError(
          result.error.errors
            .map((e) => `invalid options.${e.path} - ${e.message}`)
            .join(";"),
        );
      }
      this.options = opts;
      await this.action();
    };
  }

  /**
   * Throw an error
   * @param args
   */
  throwError(message: string): never {
    throw new Error(message);
  }
}
