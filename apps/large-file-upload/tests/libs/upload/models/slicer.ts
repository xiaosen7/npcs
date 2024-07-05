import { DEFAULTS } from "@/upload/constants/defaults";
import { range } from "lodash-es";

import { UploadSlicer } from "@/upload/models/slicer";
import { MemoryStorage } from "@/upload/models/storages/memory";

export function createSlicer() {
  const hash = "";
  const storage = new MemoryStorage();
  const slicer = new UploadSlicer(hash, storage, () => ({
    append: () => {},
    end: () => "",
  }));

  return {
    hash,
    storage,
    slicer,
    clear: () => MemoryStorage.clear(),
  };
}

import { ERRORS } from "@/shared/constants/errors";
import { MemoryReadableStream as CustomReadableStream } from "@/upload/models/storages/memory";
import { nameOf } from "../../../test-utils";

describe(UploadSlicer.name, () => {
  let { slicer, hash, storage, clear } = createSlicer();

  beforeEach(() => {
    const helpers = createSlicer();
    slicer = helpers.slicer;
    hash = helpers.hash;
    storage = helpers.storage;
    clear();
  });

  test(nameOf<UploadSlicer>("getChunkPath"), () => {
    expect(slicer.getChunkPath(0)).toBe(
      storage.resolvePaths(hash, DEFAULTS.chunksDir, "0")
    );
  });

  test(nameOf<UploadSlicer>("getFilePath"), () => {
    expect(slicer.getFilePath()).toBe(
      storage.resolvePaths(hash, DEFAULTS.mergedFileName)
    );
  });

  test(nameOf<UploadSlicer>("fileExists"), async () => {
    expect(await slicer.fileExists()).toBeFalsy();
  });

  test(nameOf<UploadSlicer>("chunkExists"), async () => {
    expect(await slicer.chunkExists(0)).toBeFalsy();
  });

  test(nameOf<UploadSlicer>("writeChunk"), async () => {
    const stream = new CustomReadableStream("hello");
    await slicer.writeChunk(0, stream);

    expect(await slicer.chunkExists(0)).toBeTruthy();
  });

  test(nameOf<UploadSlicer>("getLastExistedChunkIndex"), async () => {
    expect(await slicer.getLastExistedChunkIndex()).toBe(-1);

    const chunkCount = 3;
    await Promise.all(
      range(chunkCount).map((index) =>
        slicer.writeChunk(index, new CustomReadableStream(`${index}`))
      )
    );

    expect(await slicer.getLastExistedChunkIndex()).toBe(chunkCount - 1);
  });

  describe(nameOf<UploadSlicer>("merge"), () => {
    test("should create new file", async () => {
      const chunkCount = 100;
      await Promise.all(
        range(chunkCount).map((index) =>
          slicer.writeChunk(index, new CustomReadableStream(`${index}`))
        )
      );

      expect(await slicer.fileExists()).toBeFalsy();

      await slicer.merge();

      expect(await slicer.fileExists()).toBeTruthy();
      expect(await storage.exists(slicer.getFilePath())).toBeTruthy();
    });

    test("should remove chunks", async () => {
      const chunkCount = 1;
      await Promise.all(
        range(chunkCount).map((index) =>
          slicer.writeChunk(0, new CustomReadableStream(`${index}`))
        )
      );

      expect(await storage.exists(slicer.getChunkPath(0))).toBeTruthy();
      await slicer.merge();
      expect(await storage.exists(slicer.getChunkPath(0))).toBeFalsy();
    });

    test("when validate hash failed", async () => {
      const slicer = new UploadSlicer("hash1", storage, () => ({
        append: () => {},
        end: () => "hash2",
      }));

      await slicer.writeChunk(0, new CustomReadableStream("data"));

      let e;
      try {
        await slicer.merge();
      } catch (error) {
        e = error;
      }

      expect(e).toBe(ERRORS.upload.hashValidationFailed);

      expect(await storage.exists(slicer.getChunkPath(0))).toBeFalsy();
    });
  });
});
