export function calculateChunksHashByWorker(
  chunks: Blob[],
  onProgress?: (progress: number) => void
) {
  return new Promise<string>((resolve, reject) => {
    // 添加 worker 属性，webworker
    const worker = new Worker(new URL("./worker.ts", import.meta.url));
    worker.postMessage(chunks);
    worker.onmessage = (e) => {
      const { hash, progress, error } = e.data;

      if (error) {
        reject(error);
        return;
      }

      if (progress) {
        onProgress?.(progress);
      }

      if (hash) {
        resolve(hash);
      }
    };
  });
}
