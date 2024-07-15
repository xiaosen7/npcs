import { configuration } from "@next.js-practical-cases/upload/configuration";
import { IWrapServerActions } from "@next.js-practical-cases/upload/shared/types/actions";
import { deconstructFormData } from "@next.js-practical-cases/upload/shared/utils/type";
import { wrapAction } from "@next.js-practical-cases/upload/shared/utils/wrap-action";
import {
  IUploadChunkData,
  IUploadClientActions,
} from "@next.js-practical-cases/upload/upload/models/client";
import { UploadSlicer } from "@next.js-practical-cases/upload/upload/models/slicer";
import { Readable } from "stream";

export const uploadActions = {
  uploadChunk: wrapAction(async (formData: FormData) => {
    "use server";
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
    "use server";
    const slicer = new UploadSlicer(hash, configuration.storage);
    return await slicer.fileExists();
  }),
  chunkExists: wrapAction(async (hash: string, index: number) => {
    "use server";
    const slicer = new UploadSlicer(hash, configuration.storage);
    return await slicer.chunkExists(index);
  }),
  merge: wrapAction(async (hash: string) => {
    "use server";
    const slicer = new UploadSlicer(hash, configuration.storage);
    await slicer.merge();
  }),
  getLastExistedChunkIndex: wrapAction(async (hash) => {
    "use server";
    const slicer = new UploadSlicer(hash, configuration.storage);
    return slicer.getLastExistedChunkIndex();
  }),
} as const satisfies IWrapServerActions<IUploadClientActions>;
