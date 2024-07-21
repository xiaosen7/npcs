import { Command } from "commander";
import { z } from "zod";

export function createCommand<
  TOptionsValidation extends z.ZodObject<
    Record<string, z.ZodDefault<z.ZodString>>
  >,
>(
  name: string,
  description: string,
  optionsValidation: TOptionsValidation,
  actionFn: (options: z.infer<TOptionsValidation>) => void,
) {
  const command = new Command(name);

  // options
  Object.entries(optionsValidation.shape).forEach(([key, option]) => {
    const defaultValue = option._def.defaultValue();
    command.option(
      `--${key} <${key}>`,
      defaultValue !== undefined
        ? `${option.description} (defaults to ${JSON.stringify(defaultValue)})`
        : option.description,
      defaultValue,
    );
  });

  command
    .description(description) // description
    .action(createActionWithValidation(optionsValidation, actionFn));

  return command;
}

export function createActionWithValidation<
  TOptionsValidation extends z.ZodObject<
    Record<string, z.ZodDefault<z.ZodString>>
  >,
>(
  optionsValidation: TOptionsValidation,
  actionFn: (options: z.infer<TOptionsValidation>) => void,
) {
  return async (opts: z.infer<TOptionsValidation>) => {
    const result = optionsValidation.safeParse(opts);
    if (result.error) {
      throw new Error(
        result.error.errors
          .map((e) => `options.${e.path}: ${e.message}`)
          .join("\n"),
      );
    }
    await actionFn(opts);
  };
}
