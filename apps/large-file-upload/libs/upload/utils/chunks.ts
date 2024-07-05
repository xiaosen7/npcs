import { ERRORS } from "@/shared/constants/errors";

export function validateChunkIndices(chunkIndices: number[]) {
  const totalChunks = chunkIndices.length;
  if (totalChunks < 1) {
    throw ERRORS.upload.noChunksFound;
  }

  if (chunkIndices[0] !== 0) {
    throw ERRORS.upload.invalidFirstChunk;
  }

  // check the sequence is correct
  for (let i = 0; i < totalChunks - 1; i++) {
    if (chunkIndices[i] + 1 !== chunkIndices[i + 1]) {
      throw ERRORS.upload.invalidChunkSequence;
    }
  }

  return chunkIndices;
}

export const readBlob = (file: Blob) => {
  return new Promise<ArrayBuffer>((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onload = (e) => {
      const result = e.target?.result;
      if (result instanceof ArrayBuffer) {
        resolve(result);
      }
    };

    reader.onerror = () => {
      reject(ERRORS.upload.fileReadFailed);
    };
  });
};
