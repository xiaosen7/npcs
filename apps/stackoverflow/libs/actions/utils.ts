import { IActionFn, ISafeAny } from "@/shared";
import { revalidatePath } from "next/cache";

export const ac = (actionFn: IActionFn) => {
  function bindArgs(...boundArgs: ISafeAny[]) {
    return ac(async (...args: ISafeAny[]) => {
      "use server";
      return actionFn(...boundArgs, ...args);
    });
  }

  function bindObjectArgs(obj: ISafeAny) {
    return ac(async (...args: ISafeAny[]) => {
      "use server";
      return actionFn({ ...obj, ...args[0], ...args.slice(1) });
    });
  }

  function bindRevalidatePath(path: string) {
    return ac(async (...args) => {
      "use server";
      await actionFn(...args);
      revalidatePath(path);
    });
  }

  const fn = Object.assign(actionFn, {
    bindArgs,
    bindObjectArgs,
    bindRevalidatePath,
  });

  return fn;
};
