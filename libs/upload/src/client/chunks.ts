import { ERRORS } from "./errors";

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
