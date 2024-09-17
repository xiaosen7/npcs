import { log } from "@/libs/log";
import { translateSubtitles } from "@/libs/openai";
import { actions } from "@/libs/server/actions";
import { ISubtitle } from "@/libs/shared/types";
import dynamic from "next/dynamic";
import React from "react";

const Play = dynamic(() => import("@/libs/play"), {
  ssr: false,
});

const Video = dynamic(() => import("@/libs/play/video"), {
  ssr: false,
});

const translate = async (subtitles: ISubtitle[]) => {
  "use server";

  log.log({ subtitles });
  const result = await translateSubtitles({
    subtitles,
  });

  log.log({ result });

  return result;
};

const translateMock = async (subtitles: ISubtitle[]) => {
  "use server";

  log.log({ subtitles });

  await new Promise((resolve) => setTimeout(resolve, 3000));

  return subtitles.map((x) => ({
    ...x,
    text: x.text + "(translate)",
    audio: Buffer.from(""),
  }));
};

const GettingStartedPage: React.FC = () => {
  return <Video actions={actions} translate={translateMock} />;
};

export default GettingStartedPage;
