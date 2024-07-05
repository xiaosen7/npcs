import { createReadStream, createWriteStream, exists } from "fs";
import { mkdir, readdir, rm, writeFile } from "fs/promises";
import path, { dirname, isAbsolute } from "path";
import { Readable, Writable } from "stream";
import { promisify } from "util";
import { UploadStorage } from "./base";

const existsAsync = promisify(exists);

export class FileSystemStorage extends UploadStorage {
  constructor(private root: string) {
    super();
  }

  exists(path: string): Promise<boolean> {
    return existsAsync(path);
  }

  joinPaths(...paths: string[]): string {
    return path.join(...paths);
  }

  resolvePaths(...paths: string[]): string {
    if (isAbsolute(paths[0])) {
      return this.joinPaths(...paths);
    }

    return path.join(this.root, ...paths);
  }

  async createWriteStream(path: string): Promise<Writable> {
    if (!(await this.exists(path))) {
      await mkdir(dirname(path), { recursive: true });
      await writeFile(path, "");
    }
    return createWriteStream(this.joinPaths(path));
  }

  async createReadStream(path: string): Promise<Readable> {
    return createReadStream(this.joinPaths(path));
  }

  async readdir(path: string): Promise<string[]> {
    if (!(await this.exists(path))) {
      return [];
    }
    return readdir(path);
  }

  rmdir(path: string): Promise<void> {
    return rm(path, { recursive: true });
  }
}
