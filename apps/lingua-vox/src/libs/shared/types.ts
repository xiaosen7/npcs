export interface ISubtitle {
  start: number;
  end: number;
  text: string;
}

export interface ISubtitleWithAudio {
  start: number;
  end: number;
  text: string;
  audio: Buffer;
}
