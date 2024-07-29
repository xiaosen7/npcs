export type ISafeAny = any;
export type IActionFn = (...args: ISafeAny) => void | Promise<void>;
