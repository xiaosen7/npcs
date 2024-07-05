import { IUnwrapServerActions } from "../types/actions";

export function unwrapActions<T extends Record<string, (...args: any) => any>>(
  actions: T
) {
  return new Proxy(actions, {
    get: (_, name) => {
      return async (...args: any[]) => {
        const { data, error } = await actions[name as keyof typeof actions](
          ...args
        );

        if (error) {
          throw error;
        }

        return data;
      };
    },
  }) as unknown as IUnwrapServerActions<T>;
}
