import { AsyncReturnType, SetReturnType, Simplify } from "type-fest";
export type IWrapServerAction<T> = T extends (...args: any) => Promise<any>
  ? SetReturnType<
      T,
      Promise<
        | {
            error: { message: string };
            data: undefined;
          }
        | {
            error: undefined;
            data: AsyncReturnType<T>;
          }
      >
    >
  : never;

export type IWrapServerActions<T extends {}> = Simplify<{
  [K in keyof T]: IWrapServerAction<T[K]>;
}>;

export type IUnwrapServerAction<T> = T extends (...args: any) => Promise<any>
  ? SetReturnType<
      T,
      AsyncReturnType<T> extends
        | {
            error: undefined;
            data: infer R;
          }
        | {
            error: { message: string };
            data: undefined;
          }
        ? Promise<R>
        : never
    >
  : never;

export type IUnwrapServerActions<
  T extends Record<string, (...args: any) => any>
> = Simplify<{
  [K in keyof T]: IUnwrapServerAction<T[K]>;
}>;
