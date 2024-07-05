import { isArray } from "lodash-es";

export function ensureArray<T>(value: T) {
  return isArray(value) ? value : [value];
}
