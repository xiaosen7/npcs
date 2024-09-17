"use client";

import { ISubtitle, ISubtitleWithAudio } from "@/libs/shared/types";
import { FFmpeg } from "@ffmpeg/ffmpeg";
import { useRequest } from "ahooks";
import React, { useEffect, useRef, useState } from "react";
import Player from "video.js/dist/types/player";
import "video.js/dist/video-js.css";
import { log } from "../log";
import { IActions } from "../server/types";
import { IPlayFormValues } from "./form";
import constants from "./whisper/constants";
import { useTranscriber } from "./whisper/hooks";
import { formatAudioTimestamp } from "./whisper/utils";

async function fetchFile(url) {
  const response = await fetch(url);
  const buffer = await response.arrayBuffer();
  return new Uint8Array(buffer);
}

async function splitAudio() {
  const ffmpeg = new FFmpeg();
  await ffmpeg.load();
  ffmpeg.writeFile("input.mp3", await fetchFile("/test/demo.mp4"));
  await ffmpeg.exec(["-i", "input.mp3", "-ss", "0", "-t", "10", "output.mp3"]);
  const data = await ffmpeg.readFile("output.mp3");

  // 下载文件
  const url = URL.createObjectURL(new Blob([data], { type: "audio/mp3" }));
  const a = document.createElement("a");
  a.href = url;
  a.download = "trimmed-audio.mp3";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

// splitAudio();

export interface IVideoProps extends IPlayFormValues {
  translate?: (subtitles: ISubtitle[]) => Promise<ISubtitleWithAudio[]>;
  actions?: IActions;
}

const Video: React.FC<IVideoProps> = ({
  subtitle,
  video,
  translate,
  actions,
}) => {
  const ref = React.useRef<HTMLVideoElement>(null);
  const refDummy = React.useRef<HTMLVideoElement>(null);
  const trackRef = React.useRef<TextTrack>(null);
  const playerRef = React.useRef<Player>(null);
  const transcriber = useTranscriber(ref);
  const [audioData, setAudioData] = useState<
    | {
        buffer: AudioBuffer;
        url: string;
        mimeType: string;
      }
    | undefined
  >(undefined);

  const translateRequest = useRequest(
    async (subtitles: ISubtitle[]) => translate?.(subtitles) ?? [],
    {
      manual: true,
      ready: !!trackRef.current,
      onSuccess(data, params) {
        // log.log({ data });
        // data.forEach((item) => {
        //   trackRef.current!.addCue(new VTTCue(item.start, item.end, item.text));
        // });
      },
    },
  );

  useEffect(() => {
    // if (!(Hls.isSupported() && ref.current)) {
    //   return;
    // }

    // if (playerRef.current) {
    //   return;
    // }

    // const player = videojs(ref.current, {});
    // // @ts-ignore
    // playerRef.current = player;
    // player.play();
    // const track = player.addTextTrack('subtitles', 'custom', 'chinese');

    // const stream = (ref.current as any).captureStream() as MediaStream;
    // log.log({getAudioTracks: stream.getAudioTracks()});

    // log.log({ stream });

    // window.run = () => {
    //   const mediaRecorder = new MediaRecorder(stream, {
    //     mimeType: "video/webm",
    //   });

    //   let recordedChunks = [];

    //   mediaRecorder.ondataavailable = function (event) {
    //     if (event.data.size > 0) {
    //       log.log("ondataavailable", event.data);
    //       recordedChunks.push(event.data);
    //     }
    //   };

    //   mediaRecorder.onstop = async function () {
    //     const blob = new Blob(recordedChunks, {
    //       type: "video/webm",
    //     });
    //     const arrayBuffer = await blob.arrayBuffer();
    //     const uint8Array = new Uint8Array(arrayBuffer);

    //     // 将捕获的数据传递给ffmpeg.js处理
    //     log.log({ uint8Array });

    //     // create download link and append to Dom
    //     const downloadLink = document.createElement("a");
    //     downloadLink.href = URL.createObjectURL(blob);
    //     downloadLink.setAttribute("download", "my-audio.webm"); // name file
    //     downloadLink.click();

    //     // splitAudio(uint8Array);
    //   };

    //   window.mediaRecorder = mediaRecorder;
    //   mediaRecorder.start();

    //   // let timer = setTimeout(() => {
    //   //   mediaRecorder.stop();
    //   // }, 1000);
    // };

    async function splitAudio(uint8Array: Uint8Array) {
      try {
        const ffmpeg = new FFmpeg();
        await ffmpeg.load();
        await ffmpeg.writeFile("input.mp3", uint8Array);
        await ffmpeg.exec([
          "-i",
          "input.mp3",
          "-ss",
          "0",
          "-t",
          "3",
          "output.mp3",
        ]);
        const data = await ffmpeg.readFile("output.mp3");

        // 下载文件
        const url = URL.createObjectURL(
          new Blob([data], { type: "audio/mp3" }),
        );
        const a = document.createElement("a");
        a.href = url;
        a.download = "trimmed-audio.mp3";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      } catch (error) {
        log.error(error);
      }
    }
  }, []);

  return (
    <div className="flex h-full flex-col items-center gap-6 overflow-auto">
      <FileTile
        key={"file-tile"}
        icon={<FolderIcon />}
        text="select video"
        onFileUpdate={(decoded, blobUrl, mimeType) => {
          log.log({ decoded, blobUrl, mimeType });
          transcriber.onInputChange();
          setAudioData({
            buffer: decoded,
            url: blobUrl,
            mimeType: mimeType,
          });
        }}
      />

      {audioData && (
        <video
          key={"video"}
          ref={ref}
          controls
          className="video-js aspect-video w-[800px]"
          src={audioData?.url}
        />
      )}

      {audioData && (
        <TranscribeButton
          key={"transcribe-button"}
          isModelLoading={transcriber.isModelLoading}
          isTranscribing={transcriber.isBusy}
          onClick={() => {
            transcriber.start(audioData.buffer);
          }}
        />
      )}

      <Transcript transcribedData={transcriber.output} />
    </div>
  );
};

interface ITranscribeButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isModelLoading: boolean;
  isTranscribing: boolean;
}

function TranscribeButton(props: ITranscribeButtonProps): JSX.Element {
  const { isModelLoading, isTranscribing, onClick, ...buttonProps } = props;
  return (
    <button
      {...buttonProps}
      className="mr-2 inline-flex items-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      disabled={isTranscribing}
      onClick={(event) => {
        if (onClick && !isTranscribing && !isModelLoading) {
          onClick(event);
        }
      }}
    >
      {isModelLoading ? (
        <Spinner text={"Loading model..."} />
      ) : isTranscribing ? (
        <Spinner text={"Transcribing..."} />
      ) : (
        "Transcribe Audio"
      )}
    </button>
  );
}

import { TranscriberData } from "./whisper/hooks";

interface Props {
  transcribedData: TranscriberData | undefined;
}

function Transcript({ transcribedData }: Props) {
  const divRef = useRef<HTMLDivElement>(null);

  const saveBlob = (blob: Blob, filename: string) => {
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
  };
  const exportTXT = () => {
    let chunks = transcribedData?.chunks ?? [];
    let text = chunks
      .map((chunk) => chunk.text)
      .join("")
      .trim();

    const blob = new Blob([text], { type: "text/plain" });
    saveBlob(blob, "transcript.txt");
  };
  const exportJSON = () => {
    let jsonData = JSON.stringify(transcribedData?.chunks ?? [], null, 2);

    // post-process the JSON to make it more readable
    const regex = /(    "timestamp": )\[\s+(\S+)\s+(\S+)\s+\]/gm;
    jsonData = jsonData.replace(regex, "$1[$2 $3]");

    const blob = new Blob([jsonData], { type: "application/json" });
    saveBlob(blob, "transcript.json");
  };

  // Scroll to the bottom when the component updates
  useEffect(() => {
    if (divRef.current) {
      const diff = Math.abs(
        divRef.current.offsetHeight +
          divRef.current.scrollTop -
          divRef.current.scrollHeight,
      );

      if (diff <= 64) {
        // We're close enough to the bottom, so scroll to the bottom
        divRef.current.scrollTop = divRef.current.scrollHeight;
      }
    }
  });

  return (
    <div
      ref={divRef}
      className="my-2 flex max-h-80 w-full flex-col overflow-y-auto p-4"
    >
      {transcribedData?.chunks &&
        transcribedData.chunks.map((chunk, i) => (
          <div
            key={`${i}-${chunk.text}`}
            className="mb-2 flex w-full flex-row rounded-lg bg-white p-4 shadow-xl shadow-black/5 ring-1 ring-slate-700/10"
          >
            <div className="mr-5">
              {formatAudioTimestamp(chunk.timestamp[0])}
            </div>
            {chunk.text}
          </div>
        ))}
      {transcribedData && !transcribedData.isBusy && (
        <div className="w-full text-right">
          <button
            className="mr-2 inline-flex items-center rounded-lg bg-green-500 px-4 py-2 text-center text-sm font-medium text-white hover:bg-green-600 focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            onClick={exportTXT}
          >
            Export TXT
          </button>
          <button
            className="mr-2 inline-flex items-center rounded-lg bg-green-500 px-4 py-2 text-center text-sm font-medium text-white hover:bg-green-600 focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            onClick={exportJSON}
          >
            Export JSON
          </button>
        </div>
      )}
    </div>
  );
}

function Spinner(props: { text: string }): JSX.Element {
  return (
    <div role="status">
      <svg
        aria-hidden="true"
        className="mr-3 inline size-4 animate-spin text-white"
        fill="none"
        role="status"
        viewBox="0 0 100 101"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="#E5E7EB"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentColor"
        />
      </svg>
      <div>{props.text}</div>
    </div>
  );
}

function FolderIcon() {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Video;

function FileTile(props: {
  icon?: JSX.Element;
  text: string;
  onFileUpdate: (
    decoded: AudioBuffer,
    blobUrl: string,
    mimeType: string,
  ) => void;
}) {
  // const audioPlayer = useRef<HTMLAudioElement>(null);

  // Create hidden input element
  let elem = document.createElement("input");
  elem.type = "file";
  elem.oninput = (event) => {
    // Make sure we have files to use
    let files = (event.target as HTMLInputElement).files;
    if (!files) return;

    // Create a blob that we can use as an src for our audio element
    const urlObj = URL.createObjectURL(files[0]);
    const mimeType = files[0].type;

    const reader = new FileReader();
    reader.addEventListener("load", async (e) => {
      const arrayBuffer = e.target?.result as ArrayBuffer; // Get the ArrayBuffer
      if (!arrayBuffer) return;

      const audioCTX = new AudioContext({
        sampleRate: constants.SAMPLING_RATE,
      });

      const decoded = await audioCTX.decodeAudioData(arrayBuffer);

      props.onFileUpdate(decoded, urlObj, mimeType);
    });
    reader.readAsArrayBuffer(files[0]);

    // Reset files
    elem.value = "";
  };

  return (
    <>
      <Tile icon={props.icon} text={props.text} onClick={() => elem.click()} />
    </>
  );
}

function Tile(props: {
  icon?: JSX.Element;
  text?: string;
  onClick?: () => void;
}) {
  return (
    <button
      className="bg-blue flex items-center justify-center rounded-lg p-2 text-slate-500 transition-all duration-200 hover:bg-indigo-50 hover:text-indigo-600"
      onClick={props.onClick}
    >
      <div className="size-7">{props.icon}</div>
      {props.text && (
        <div className="break-text text-md w-30 ml-2 text-center">
          {props.text}
        </div>
      )}
    </button>
  );
}
