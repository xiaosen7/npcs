import { ERROR_SET } from "@/shared/constants/errors";
import { IWrapServerAction } from "../types/actions";

export function wrapAction<T extends (...args: any) => Promise<any>>(
  actionFn: T
) {
  return (async (...args: any) => {
    "use server";
    let data: T | undefined;
    let error: Error | undefined;
    try {
      data = await actionFn(...args);
    } catch (e) {
      error = e as Error;

      if (!ERROR_SET.has(error)) {
        // Throw the sensitive errors
        throw error;
      }
    }

    // should be plain objects
    return {
      data,
      error: error
        ? {
            message: error.message,
          }
        : undefined,
    };
  }) as IWrapServerAction<T>;
}
