export interface IUploadChunkData {
  hash: string;
  chunk: Blob | Buffer;
  index: number;
}
