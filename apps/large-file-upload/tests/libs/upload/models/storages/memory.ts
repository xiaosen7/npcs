import {
  MemoryReadableStream,
  MemoryStorage,
  MemoryWritableStream,
} from "@/upload/models/storages/memory";
import { describe, expect, it } from "vitest";

describe("MemoryStorage", () => {
  beforeEach(() => {
    MemoryStorage.clear();
  });

  it("should create a write stream", async () => {
    const storage = new MemoryStorage();
    const stream = await storage.createWriteStream("/test/file.txt");
    expect(stream).toBeInstanceOf(MemoryWritableStream);
  });

  it("should create a read stream", async () => {
    const storage = new MemoryStorage();
    const stream = await storage.createReadStream("/test/file.txt");
    expect(stream).toBeInstanceOf(MemoryReadableStream);
  });

  it("should write to the stream", async () => {
    const storage = new MemoryStorage();
    const stream = await storage.createWriteStream("/test/file.txt");
    await new Promise((resolve) => {
      stream.write("Hello", "utf8", resolve);
    });
    expect(MemoryStorage.getData()).toEqual({
      test: {
        "file.txt": "Hello",
      },
    });
  });

  it("should write _", async () => {
    const storage = new MemoryStorage();
    const stream = await storage.createWriteStream("/test/file.txt");
    await new Promise((resolve) => {
      stream.write("letters more than 10", "utf8", resolve);
    });
    expect(MemoryStorage.getData()).toEqual({
      test: {
        "file.txt": "_",
      },
    });
  });

  it("should read from the stream", async () => {
    const storage = new MemoryStorage();
    const writeStream = await storage.createWriteStream("/test/file.txt");
    await new Promise((resolve) => {
      writeStream.write("Hello", "utf8", resolve);
    });

    const readStream = await storage.createReadStream("/test/file.txt");
    const chunks = [];
    for await (const chunk of readStream) {
      chunks.push(chunk.toString());
    }
    expect(chunks.join("")).toEqual("Hello");
  });

  it("should exist", async () => {
    const storage = new MemoryStorage();
    const writeStream = await storage.createWriteStream("/test/file.txt");
    await new Promise((resolve) => {
      writeStream.write("Hello", "utf8", resolve);
    });

    expect(await storage.exists("/test/file.txt")).toBe(true);
  });

  it("should not exist", async () => {
    const storage = new MemoryStorage();
    expect(await storage.exists("/test/file.txt")).toBe(false);
  });

  it("should readdir", async () => {
    const storage = new MemoryStorage();
    await storage.createWriteStream("/test/file1.txt");
    await storage.createWriteStream("/test/file2.txt");
    const files = await storage.readdir("/test");
    expect(files).toEqual(["file1.txt", "file2.txt"]);
  });

  it("should rmdir", async () => {
    const storage = new MemoryStorage();
    await storage.createWriteStream("/test/file.txt");
    await storage.rmdir("/test");
    expect(await storage.exists("/test/file.txt")).toBe(false);
  });

  it("should join paths", () => {
    const storage = new MemoryStorage();
    expect(storage.joinPaths("/test", "file.txt")).toEqual("/test/file.txt");
  });

  it("should resolve paths", () => {
    const storage = new MemoryStorage();
    expect(storage.resolvePaths("/test", "file.txt")).toEqual("/test/file.txt");
    expect(storage.resolvePaths("test", "file.txt")).toEqual("/test/file.txt");
  });
});
