import { isNil, omitBy } from "lodash-es";
import { ISafeAny } from "../types";

export function removeNilKeys<T extends {}>(
  object: T,
): {
  [Key in keyof T as T[Key] extends null | undefined ? never : Key]: T[Key];
} {
  return omitBy(object, isNil) as ISafeAny;
}
