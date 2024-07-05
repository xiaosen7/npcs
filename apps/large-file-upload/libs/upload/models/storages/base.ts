import { Readable, Writable } from "stream";

export abstract class UploadStorage {
  abstract exists(path: string): Promise<boolean>;
  abstract joinPaths(...paths: string[]): string;
  abstract resolvePaths(...paths: string[]): string;
  abstract createWriteStream(path: string): Promise<Writable>;
  abstract createReadStream(path: string): Promise<Readable>;
  abstract readdir(path: string): Promise<string[]>;
  abstract rmdir(path: string): Promise<void>;
}
