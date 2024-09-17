import fs from "fs";
import { pipeline } from "stream";
import { promisify } from "util";
import { IActions } from "./types";

const pump = promisify(pipeline);

export const actions = {
  uploadAudio: async (formData) => {
    "use server";
    const audio = formData.get("audio") as unknown as Blob;
    const readable = audio.stream as any;
    const writable = fs.createWriteStream("tmp/audio.wav");
    await pump(readable, writable);
  },
} satisfies IActions;
