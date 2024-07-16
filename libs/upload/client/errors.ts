import { keys, values } from "lodash-es";

export const ERRORS = {
  upload: {
    clientHasDestroyed: new Error("UploadClient has been destroyed"),
    fileReadFailed: new Error("File read failed"),
  },
} as const;

export const ERROR_SET = new Set<Error>(
  keys(ERRORS)
    // @ts-ignore
    .map((module) => values(ERRORS[module]))
    .flat(2)
);
