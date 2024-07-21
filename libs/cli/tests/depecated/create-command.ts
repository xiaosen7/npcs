import {
  createActionWithValidation,
  createCommand,
} from "@/deprecated/create-command";
import { Command } from "commander";
import { z } from "zod";

describe(createCommand.name, () => {
  test("should return the command instance", () => {
    const result = createCommand("test", "", z.object({}), () => {});
    expect(result).toBeInstanceOf(Command);
  });

  test("should set command name", () => {
    const commandName = "test";
    const command = createCommand(commandName, "", z.object({}), () => {});

    expect(command.name()).toBe(commandName);
  });

  test("should set command description", () => {
    const commandDescription = "test desc";
    const command = createCommand(
      "",
      commandDescription,
      z.object({}),
      () => {},
    );

    expect(command.description()).toBe(commandDescription);
  });

  describe("options", () => {
    const createTestCommand = () => {
      const optionDefaultValue = "./src";
      const optionName = "inputDir";
      const optionDescription = "option description";
      const optionsValidation = z.object({
        [optionName]: z
          .string()
          .default(optionDefaultValue)
          .describe(optionDescription),
      });
      const actionFn = vi.fn(() => {});
      const command = createCommand("", "", optionsValidation, actionFn);
      const option = command.options[0];
      return {
        command,
        optionName,
        optionDefaultValue,
        optionDescription,
        actionFn,
        option,
      };
    };

    test("should set default value", () => {
      const { command, optionName, optionDefaultValue, actionFn } =
        createTestCommand();
      expect(command.getOptionValue(optionName)).toBe(optionDefaultValue);
      command.parse();
      expect(actionFn).toHaveBeenCalledWith({
        [optionName]: optionDefaultValue,
      });
    });

    test("should set option description", () => {
      const { option } = createTestCommand();
      expect(option.description).toMatchInlineSnapshot(
        `"option description (defaults to "./src")"`,
      );
    });

    test("should run action with options that is from user passed", () => {
      const { command, optionName, actionFn } = createTestCommand();
      command.parse([`--${optionName}`, "test"], {
        from: "user",
      });
      expect(actionFn).toBeCalledWith({
        [optionName]: "test",
      });
    });

    test("should not run action with options that is from user passed if it is invalid", () => {
      const { command, optionName, actionFn } = createTestCommand();

      expect(() =>
        command.parseAsync([`--${optionName}`, 1 as any], {
          from: "user",
        }),
      ).rejects.toThrowErrorMatchingInlineSnapshot(
        `[Error: options.inputDir: Expected string, received number]`,
      );
      expect(actionFn).not.toHaveBeenCalledWith({
        [optionName]: 1,
      });
    });
  });
});

describe(createActionWithValidation.name, () => {
  const optionsValidation = z.object({
    inputDir: z.string().default("./src"),
  });

  test("should run action fn", () => {
    const actionFn = vi.fn(() => {});
    const actionWithValidation = createActionWithValidation(
      optionsValidation,
      actionFn,
    );

    actionWithValidation({
      inputDir: "./test",
    });
    expect(actionFn).toHaveBeenCalledTimes(1);
    expect(actionFn).toHaveBeenCalledWith({ inputDir: "./test" });
  });

  test("should catch error if pass invalid options", () => {
    const actionFn = vi.fn(() => {});
    const actionWithValidation = createActionWithValidation(
      optionsValidation,
      actionFn,
    );

    expect(() =>
      actionWithValidation({
        inputDir: true as any,
      }),
    ).rejects.toThrowErrorMatchingInlineSnapshot(
      `[Error: options.inputDir: Expected string, received boolean]`,
    );
  });
});
