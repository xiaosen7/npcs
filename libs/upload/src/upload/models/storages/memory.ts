import { get, keys, set } from "lodash-es";
import path, { isAbsolute } from "path";
import { Readable, Writable } from "stream";
import { UploadStorage } from "./base";

let data = {};

const splitPath = (path: string) => {
  return path.split("/").filter(Boolean);
};

export class MemoryWritableStream extends Writable {
  constructor(private path: string) {
    super();
  }

  _write(chunk: Buffer, encoding: string, callback: () => void) {
    const str = chunk.toString();

    set(data, splitPath(this.path), str.length > 10 ? "_" : str);
    callback();
  }
}

export class MemoryReadableStream extends Readable {
  #current: number;
  constructor(private data: string) {
    super();
    this.#current = 0;
  }

  _read(size: number) {
    if (this.#current === 0) {
      this.push(this.data);
      this.#current += 1;
      return;
    }

    this.push(null);
  }
}

/**
 * Memory storage for testing or Vercel deployment
 */
export class MemoryStorage extends UploadStorage {
  static clear() {
    keys(data).forEach((key) => {
      // @ts-ignore
      delete data[key];
    });
  }

  static getData() {
    return data;
  }

  private root: string;

  constructor() {
    super();
    this.root = "/";
  }

  async exists(path: string): Promise<boolean> {
    return !!get(data, splitPath(path));
  }

  joinPaths(...paths: string[]): string {
    return path.posix.join(...paths);
  }

  resolvePaths(...paths: string[]): string {
    if (isAbsolute(paths[0])) {
      return this.joinPaths(...paths);
    }

    return this.joinPaths(this.root, ...paths);
  }

  async createWriteStream(path: string) {
    if (!(await this.exists(path))) {
      set(data, splitPath(path), "");
    }
    return new MemoryWritableStream(path);
  }

  async readdir(path: string) {
    return Object.keys(get(data, splitPath(path), {}));
  }

  async rmdir(path: string): Promise<void> {
    set(data, splitPath(path), undefined);
  }

  async createReadStream(path: string): Promise<Readable> {
    return new MemoryReadableStream(get(data, splitPath(path)));
  }
}
