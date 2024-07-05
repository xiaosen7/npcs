import { keys, values } from "lodash-es";

export const ERRORS = {
  upload: {
    clientHasDestroyed: new Error("UploadClient has been destroyed"),
    hashValidationFailed: new Error("Hash validation failed"),
    noChunksFound: new Error("No chunks found"),
    invalidFirstChunk: new Error("Invalid first chunk"),
    invalidChunkSequence: new Error("Invalid chunk sequence"),
    fileReadFailed: new Error("File read failed"),
    invalidConcurrencyType: new Error("Invalid concurrency type"),
  },
} as const;

export const ERROR_SET = new Set<Error>(
  keys(ERRORS)
    // @ts-ignore
    .map((module) => values(ERRORS[module]))
    .flat(2)
);
