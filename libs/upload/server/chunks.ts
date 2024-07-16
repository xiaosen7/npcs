import { ERRORS } from "./errors";

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
