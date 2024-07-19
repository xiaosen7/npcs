import { IUploadClientActions, IWrapServerActions } from "@shared/actions";
import { configuration } from "@shared/configuration";

import { deconstructFormData } from "@shared/form";
import { Readable } from "stream";

import { IWrapServerAction } from "@shared/actions";
import { IUploadChunkData } from "../shared/chunk";
import { ERROR_SET } from "./errors";
import { UploadSlicer } from "./slicer";

function wrapAction<T extends (...args: any) => Promise<any>>(actionFn: T) {
  async function wrappedAction(...args: any) {
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
  }

  return wrappedAction as IWrapServerAction<T>;
}

export const uploadActions = {
  uploadChunk: wrapAction(async (formData: FormData) => {
    const { hash, chunk, index } =
      deconstructFormData<IUploadChunkData>(formData);
    const slicer = new UploadSlicer(hash, configuration.storage);

    if (chunk instanceof Blob) {
      const stream = chunk.stream() as any;
      await slicer.writeChunk(index, stream);
    } else if (chunk instanceof Buffer) {
      const stream = Readable.from(chunk as Buffer);
      await slicer.writeChunk(index, stream);
    }
  }),
  fileExists: wrapAction(async (hash: string) => {
    const slicer = new UploadSlicer(hash, configuration.storage);
    return await slicer.fileExists();
  }),
  chunkExists: wrapAction(async (hash: string, index: number) => {
    const slicer = new UploadSlicer(hash, configuration.storage);
    return await slicer.chunkExists(index);
  }),
  merge: wrapAction(async (hash: string) => {
    const slicer = new UploadSlicer(hash, configuration.storage);
    await slicer.merge();
  }),
  getLastExistedChunkIndex: wrapAction(async (hash) => {
    const slicer = new UploadSlicer(hash, configuration.storage);
    return slicer.getLastExistedChunkIndex();
  }),
} as const satisfies IWrapServerActions<IUploadClientActions>;
