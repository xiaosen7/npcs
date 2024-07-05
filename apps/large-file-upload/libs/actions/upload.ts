import { IWrapServerActions } from "@/shared/types/actions";
import { deconstructFormData } from "@/shared/utils/type";
import { wrapAction } from "@/shared/utils/wrap-action";
import { IUploadChunkData, IUploadClientActions } from "@/upload/models/client";
import { UploadSlicer } from "@/upload/models/slicer";
import { FileSystemStorage } from "@/upload/models/storages/file-system";
import path from "path";
import { Readable } from "stream";

const storage = new FileSystemStorage(path.resolve("node_modules", ".cache"));

export const uploadActions = {
  uploadChunk: wrapAction(async (formData: FormData) => {
    "use server";
    const { hash, chunk, index } =
      deconstructFormData<IUploadChunkData>(formData);
    const slicer = new UploadSlicer(hash, storage);

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
    const slicer = new UploadSlicer(hash, storage);
    return await slicer.fileExists();
  }),
  chunkExists: wrapAction(async (hash: string, index: number) => {
    "use server";
    const slicer = new UploadSlicer(hash, storage);
    return await slicer.chunkExists(index);
  }),
  merge: wrapAction(async (hash: string) => {
    "use server";
    const slicer = new UploadSlicer(hash, storage);
    await slicer.merge();
  }),
  getLastExistedChunkIndex: wrapAction(async (hash) => {
    "use server";
    const slicer = new UploadSlicer(hash, storage);
    return slicer.getLastExistedChunkIndex();
  }),
} as const satisfies IWrapServerActions<IUploadClientActions>;
