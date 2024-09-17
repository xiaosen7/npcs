import { log } from "@/libs/log";
import { throttle } from "lodash-es";
import { useCallback, useMemo, useRef, useState } from "react";
import videojs from "video.js";
import Player from "video.js/dist/types/player";
import Constants from "./constants";

export interface MessageEventHandler {
  (event: MessageEvent): void;
}

export function useWorker(messageEventHandler: MessageEventHandler): Worker {
  // Create new worker once and never again
  const [worker] = useState(() => createWorker(messageEventHandler));
  return worker;
}

function createWorker(messageEventHandler: MessageEventHandler): Worker {
  const worker = new Worker(new URL("./worker.ts", import.meta.url), {
    type: "module",
  });
  // Listen for messages from the Web Worker
  worker.addEventListener("message", messageEventHandler);
  return worker;
}

interface ProgressItem {
  file: string;
  loaded: number;
  progress: number;
  total: number;
  name: string;
  status: string;
}

interface TranscriberUpdateData {
  data: [
    string,
    { chunks: { text: string; timestamp: [number, number | null] }[] },
  ];
  text: string;
}

interface TranscriberCompleteData {
  data: {
    text: string;
    chunks: { text: string; timestamp: [number, number | null] }[];
  };
}

export interface TranscriberData {
  isBusy: boolean;
  text: string;
  chunks: { text: string; timestamp: [number, number | null] }[];
}

export interface Transcriber {
  onInputChange: () => void;
  isBusy: boolean;
  isModelLoading: boolean;
  progressItems: ProgressItem[];
  start: (audioData: AudioBuffer | undefined) => void;
  output?: TranscriberData;
  model: string;
  setModel: (model: string) => void;
  multilingual: boolean;
  setMultilingual: (model: boolean) => void;
  quantized: boolean;
  setQuantized: (model: boolean) => void;
  subtask: string;
  setSubtask: (subtask: string) => void;
  language?: string;
  setLanguage: (language: string) => void;
}

export function useTranscriber(
  videoRef: React.RefObject<HTMLVideoElement>,
): Transcriber {
  const [transcript, setTranscript] = useState<TranscriberData | undefined>(
    undefined,
  );
  const [isBusy, setIsBusy] = useState(false);
  const [isModelLoading, setIsModelLoading] = useState(false);
  const playerRef = useRef<Player>();
  const trackRef = useRef<TextTrack>();
  const lastStartRef = useRef<number>(-1);

  const [progressItems, setProgressItems] = useState<ProgressItem[]>([]);

  const webWorker = useWorker((event) => {
    const message = event.data;
    // Update the state with the result
    switch (message.status) {
      case "progress":
        // Model file progress: update one of the progress items.
        setProgressItems((prev) =>
          prev.map((item) => {
            if (item.file === message.file) {
              return { ...item, progress: message.progress };
            }
            return item;
          }),
        );
        break;
      case "update":
        // Received partial update
        // console.log("update", message);
        // eslint-disable-next-line no-case-declarations
        const updateMessage = message as TranscriberUpdateData;
        addTracks(updateMessage, lastStartRef, trackRef);
        setTranscript({
          isBusy: true,
          text: updateMessage.data[0],
          chunks: updateMessage.data[1].chunks,
        });
        break;
      case "complete":
        // Received complete transcript
        // console.log("complete", message);
        // eslint-disable-next-line no-case-declarations
        const completeMessage = message as TranscriberCompleteData;
        setTranscript({
          isBusy: false,
          text: completeMessage.data.text,
          chunks: completeMessage.data.chunks,
        });
        log.log({ completeMessage });
        setIsBusy(false);
        break;

      case "initiate":
        // Model file start load: add a new progress item to the list.
        setIsModelLoading(true);
        setProgressItems((prev) => [...prev, message]);
        break;
      case "ready":
        setIsModelLoading(false);
        playerRef.current = videojs(videoRef.current!, {});
        trackRef.current = playerRef.current.addTextTrack(
          "subtitles",
          "custom",
          "chinese",
        );
        break;
      case "error":
        setIsBusy(false);
        alert(
          `${message.data.message} This is most likely because you are using Safari on an M1/M2 Mac. Please try again from Chrome, Firefox, or Edge.\n\nIf this is not the case, please file a bug report.`,
        );
        break;
      case "done":
        // Model file loaded: remove the progress item from the list.
        setProgressItems((prev) =>
          prev.filter((item) => item.file !== message.file),
        );
        break;

      default:
        // initiate/download/done
        break;
    }
  });

  const [model, setModel] = useState<string>(Constants.DEFAULT_MODEL);
  const [subtask, setSubtask] = useState<string>(Constants.DEFAULT_SUBTASK);
  const [quantized, setQuantized] = useState<boolean>(
    Constants.DEFAULT_QUANTIZED,
  );
  const [multilingual, setMultilingual] = useState<boolean>(
    Constants.DEFAULT_MULTILINGUAL,
  );
  const [language, setLanguage] = useState<string>(Constants.DEFAULT_LANGUAGE);

  const onInputChange = useCallback(() => {
    setTranscript(undefined);
  }, []);

  const postRequest = useCallback(
    async (audioData: AudioBuffer | undefined) => {
      if (audioData) {
        setTranscript(undefined);
        setIsBusy(true);

        let audio;
        if (audioData.numberOfChannels === 2) {
          const SCALING_FACTOR = Math.sqrt(2);

          let left = audioData.getChannelData(0);
          let right = audioData.getChannelData(1);

          audio = new Float32Array(left.length);
          for (let i = 0; i < audioData.length; ++i) {
            audio[i] = (SCALING_FACTOR * (left[i] + right[i])) / 2;
          }
        } else {
          // If the audio is not stereo, we can just use the first channel:
          audio = audioData.getChannelData(0);
        }

        webWorker.postMessage({
          audio,
          model,
          multilingual,
          quantized,
          subtask: multilingual ? subtask : null,
          language: multilingual && language !== "auto" ? language : null,
        });
      }
    },
    [webWorker, model, multilingual, quantized, subtask, language],
  );

  const transcriber = useMemo(() => {
    return {
      onInputChange,
      isBusy,
      isModelLoading,
      progressItems,
      start: postRequest,
      output: transcript,
      model,
      setModel,
      multilingual,
      setMultilingual,
      quantized,
      setQuantized,
      subtask,
      setSubtask,
      language,
      setLanguage,
    };
  }, [
    isBusy,
    isModelLoading,
    progressItems,
    postRequest,
    transcript,
    model,
    multilingual,
    quantized,
    subtask,
    language,
  ]);

  return transcriber;
}
const addTracks = throttle(
  (updateMessage: TranscriberUpdateData, lastStartRef, trackRef) => {
    const trackChunks: (typeof updateMessage)["data"]["1"]["chunks"] = [];
    updateMessage.data[1].chunks.forEach((chunk) => {
      const {
        text: currentText,
        timestamp: [currentStart, currentEnd],
      } = chunk;

      const shouldAdd = currentStart > lastStartRef.current;
      if (!shouldAdd) {
        return;
      }

      trackChunks.push(chunk);

      const isEnd =
        currentEnd && (currentText.endsWith(".") || currentText.endsWith(","));
      if (isEnd) {
        const start = trackChunks[0].timestamp[0];
        const text = trackChunks.map((x) => x.text).join(" ");
        const cue = new VTTCue(start, currentEnd, text);
        trackRef.current?.addCue(cue);
        log.log("addCue", start, currentEnd, text);
        lastStartRef.current = currentStart;

        trackChunks.length = 0;
      }
    });
  },
  3000,
);
