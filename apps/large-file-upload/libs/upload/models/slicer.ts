import { IS_VERCEL } from "@/shared/constants";
import { ERRORS } from "@/shared/constants/errors";
import MultiStream from "multistream";
import { Readable } from "stream";
import { DEFAULTS } from "../constants/defaults";
import { validateChunkIndices } from "../utils/chunks";
import { pump } from "../utils/pump";
import { IHashCalculator } from "./hash-calculators/base";
import { Md5HashCalculator } from "./hash-calculators/md5";
import { UploadStorage } from "./storages/base";

export class UploadSlicer {
  #rootDir: string;
  #chunksDir: string;
  constructor(
    private hash: string,
    private storage: UploadStorage,
    private calculatorProvider: () => IHashCalculator = () =>
      new Md5HashCalculator()
  ) {
    this.#rootDir = this.storage.resolvePaths(this.hash);
    this.#chunksDir = this.storage.joinPaths(this.#rootDir, DEFAULTS.chunksDir);
  }

  async #getSortedExistedChunkIndices() {
    return (await this.storage.readdir(this.#chunksDir))
      .map((x) => Number(x))
      .sort((a, b) => a - b);
  }

  getChunkPath(index: number) {
    return this.storage.joinPaths(this.#chunksDir, `${index}`);
  }

  getFilePath() {
    return this.storage.joinPaths(this.#rootDir, DEFAULTS.mergedFileName);
  }

  async getLastExistedChunkIndex() {
    return (await this.#getSortedExistedChunkIndices()).pop() ?? -1;
  }

  async fileExists() {
    return this.storage.exists(this.getFilePath());
  }

  async chunkExists(index: number) {
    return this.storage.exists(this.getChunkPath(index));
  }

  async writeChunk(index: number, stream: Readable) {
    await pump(
      stream,
      await this.storage.createWriteStream(this.getChunkPath(index))
    );
  }

  async #createMultiChunksStream(chunkIndices: number[]) {
    const chunkPaths = chunkIndices.map((basename) =>
      this.storage.joinPaths(this.#chunksDir, String(basename))
    );

    const inputList = await Promise.all(
      chunkPaths.map((path) => {
        return this.storage.createReadStream(path);
      })
    );

    return new MultiStream(inputList);
  }

  async #validateHash(chunkIndices: number[]) {
    if (IS_VERCEL) {
      // skip hash validation in vercel deployment
      return;
    }

    const input = await this.#createMultiChunksStream(chunkIndices);

    const hash = await new Promise<string>((resolve, reject) => {
      const calculator = this.calculatorProvider();
      input.on("data", (chunk) => {
        calculator.append(chunk);
      });
      input.on("end", () => {
        resolve(calculator.end());
      });
      input.on("error", reject);
    });

    if (hash !== this.hash) {
      throw ERRORS.upload.hashValidationFailed;
    }
  }

  async merge() {
    try {
      const chunkIndices = await this.#getSortedExistedChunkIndices();

      validateChunkIndices(chunkIndices);
      await this.#validateHash(chunkIndices);

      const input = await this.#createMultiChunksStream(chunkIndices);
      const output = await this.storage.createWriteStream(this.getFilePath());

      await pump(input, output);
    } catch (error) {
      throw error;
    } finally {
      await this.storage.rmdir(this.#chunksDir);
    }
  }
}
