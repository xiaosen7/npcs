"use client";

import React, { useState } from "react";
import { IPlayFormValues, PlayForm } from "./form";
import Video, { IVideoProps } from "./video";

export interface IPlayProps extends Omit<IVideoProps, "subtitle" | "video"> {}

const Play: React.FC<IPlayProps> = (props) => {
  const [data, setData] = useState<IPlayFormValues>();

  return (
    <div className="flex flex-col gap-10">
      <PlayForm onSubmit={setData} />

      {data && <Video {...props} subtitle={data.subtitle} video={data.video} />}
    </div>
  );
};

export default Play;
