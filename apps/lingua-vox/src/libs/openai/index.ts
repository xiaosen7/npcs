import OpenAI from "openai";
import { log } from "../log";
import { ISubtitle, ISubtitleWithAudio } from "../shared/types";

interface TranslateSubtitlesOptions {
  subtitles: ISubtitle[];
  apiKey?: string;
}

export async function translateSubtitles(
  options: TranslateSubtitlesOptions,
): Promise<ISubtitleWithAudio[]> {
  const { subtitles, apiKey } = options;
  const openai = new OpenAI({
    apiKey,
    dangerouslyAllowBrowser: process.env.NODE_ENV === "test",
  });

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          "You are a helpful assistant to translate the subtitle object to chinese, please response me the json format just like the user input, do not need to response markdown syntax.",
      },
      {
        role: "user",
        content: JSON.stringify(subtitles),
      },
    ],
  });

  let ret: ISubtitleWithAudio[] = [];

  try {
    ret = JSON.parse(response.choices[0].message.content ?? "[]");
    if (!Array.isArray(ret)) {
      throw new Error("Invalid subtitles format");
    }
  } catch (error) {
    log.error(`Parse failed`, error);
    return [];
  }

  // for (let index = 0; index < subtitles.length; index++) {
  //   const subtitle = subtitles[index];
  //   const mp3 = await openai.audio.speech.create({
  //     model: "tts-1",
  //     voice: "nova",
  //     input: subtitle.text,
  //   });
  //   const audio = Buffer.from(await mp3.arrayBuffer());
  //   ret[index].audio = audio;
  // }

  return ret;
}
