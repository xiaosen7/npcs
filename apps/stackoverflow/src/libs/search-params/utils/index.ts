export {};

import { isString } from "lodash-es";
import { ESearchParamKey } from "../constants";

function patchSearchParams(
  searchParams: URLSearchParams,
  query: Partial<Record<ESearchParamKey, string>>,
): URLSearchParams;
function patchSearchParams(
  searchParams: URLSearchParams,
  name: ESearchParamKey,
  value: string,
): URLSearchParams;
function patchSearchParams(
  params: URLSearchParams = new URLSearchParams(),
  name: string | Record<string, string>,
  value?: string,
) {
  if (typeof URLSearchParams === "undefined") {
    return params?.toString() ?? "";
  }

  const searchParams = new URLSearchParams(params?.toString() ?? "");

  if (isString(name)) {
    if (value) {
      searchParams.set(name, value);
    } else {
      searchParams.delete(name);
    }
  } else {
    Object.entries(name).forEach(([name, value]) => {
      if (value) {
        searchParams.set(name, value);
      } else {
        searchParams.delete(name);
      }
    });
  }

  return searchParams;
}

export { patchSearchParams };
