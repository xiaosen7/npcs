"use client";

import { Loading } from "@/shared/components/loading";
import { Input } from "@/shared/components/ui/input";
import { Progress } from "@/shared/components/ui/progress";
import { IWrapServerActions } from "@/shared/types/actions";
import { mp } from "@/shared/utils/jsx";
import { unwrapActions } from "@/shared/utils/unwrap-action";
import {
  CheckIcon,
  Cross2Icon,
  PauseIcon,
  PlayIcon,
  ReloadIcon,
  TrashIcon,
} from "@radix-ui/react-icons";
import { useLocalStorageState, useMap, useMemoizedFn } from "ahooks";
import { sentenceCase } from "change-case";
import { get, uniqueId } from "lodash-es";
import { useObservable } from "rcrx";
import React, { memo, useEffect, useMemo, useRef } from "react";
import { Observable } from "rxjs";
import { IUploadClientActions, UploadClient } from "../models/client";
import { IUploadSetting, UploadSetting } from "./setting";

import { Badge } from "@/shared/components/ui/badge";
import { WEBSOCKET_PORT } from "@/shared/constants";
import { useIsClient } from "@/shared/hooks/is-client";
import { cn } from "@/shared/utils";
import { formatFileSize } from "@/shared/utils/format-file-size";
import { formatTimeBySeconds } from "@/shared/utils/format-time";
import { SocketClient } from "@/socket/models/client";
import { io } from "socket.io-client";
import { DEFAULTS } from "../constants/defaults";
import { ESupportedProtocol } from "../types";

const AUTO_UPLOAD = true;

export interface IUploadProps {
  actions: IWrapServerActions<IUploadClientActions>;
}

export const Upload: React.FC<IUploadProps> = ({ actions: httpActions }) => {
  const { isClient } = useIsClient();
  const [setting, setSetting] = useLocalStorageState<IUploadSetting>(
    "uploadSetting",
    {
      defaultValue: {
        chunkSize: DEFAULTS.chunkSize,
        concurrency: DEFAULTS.concurrency,
        protocol: DEFAULTS.protocol,
      },
    }
  );
  const [clientMap, clientMapActions] = useMap<string, UploadClient>();
  const [idToProtocolMap, idToProtocolMapActions] = useMap<
    string,
    ESupportedProtocol
  >();

  const socketClient = useMemo(
    () =>
      isClient
        ? new SocketClient<IWrapServerActions<IUploadClientActions>>(
            io(`${location.protocol}//${location.hostname}:${WEBSOCKET_PORT}`)
          )
        : null,
    [isClient]
  );
  const canUseWebsocket = !!socketClient;
  const protocol =
    setting?.protocol === ESupportedProtocol.Http || !canUseWebsocket
      ? ESupportedProtocol.Http
      : ESupportedProtocol.Websocket;

  const actions = useMemo(
    () =>
      protocol === ESupportedProtocol.Http
        ? httpActions
        : socketClient!.actions,
    [protocol, socketClient, httpActions]
  );

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollContainer = scrollContainerRef.current;

  const onChange = useMemoizedFn((async (e) => {
    Array.from(e.target.files ?? []).forEach((file) => {
      const id = uniqueId();
      const client = new UploadClient(
        file,
        unwrapActions(actions),
        setting?.concurrency,
        setting?.chunkSize
      );
      idToProtocolMap.set(id, protocol);
      clientMap.set(id, client);
    });

    clientMapActions.setAll(clientMap);
    idToProtocolMapActions.setAll(idToProtocolMap);

    if (scrollContainer) {
      setTimeout(() => {
        (scrollContainer.lastChild as HTMLDivElement | null)?.scrollIntoView({
          behavior: "smooth",
        });
      }, 500);
    }
  }) satisfies React.ComponentProps<"input">["onChange"]);

  const onRemove = useMemoizedFn((id: string) => {
    clientMap.get(id)?.destroy();
    clientMapActions.remove(id);
  });

  return (
    <div className="flex flex-col gap-4 border border-solid py-4">
      <div className="px-4 mb-4">
        <UploadSetting
          value={
            isClient
              ? setting
              : {
                  concurrency: 0,
                  chunkSize: 0,
                  protocol: "",
                }
          }
          onChange={setSetting}
          disabled={!isClient}
        />
      </div>

      <div className="flex gap-4 px-4">
        <Input
          value={""}
          className="flex-1 text-[0]"
          multiple
          type="file"
          onChange={onChange}
        />
      </div>

      <div ref={scrollContainerRef} className="h-64 overflow-auto">
        {Array.from(clientMap.keys()).map((id) => (
          <UploadSingleFile
            key={id}
            client={clientMap.get(id)!}
            onRemove={() => onRemove(id)}
            {...setting}
            protocol={idToProtocolMap.get(id)}
          />
        ))}
      </div>
    </div>
  );
};

interface IUploadSingleFileProps {
  className?: string;
  onRemove?: () => void;
  concurrency?: number;
  client: UploadClient;
  chunkSize?: number;
  protocol?: string;
}
const UploadSingleFile = memo(function UploadSingleFile(
  props: IUploadSingleFileProps
) {
  const { client, onRemove, protocol } = props;
  const file = client.file;

  useEffect(() => {
    client.start(AUTO_UPLOAD);
  }, [client]);

  const onPlay = useMemoizedFn(() => {
    client.startPool();
  });

  const onStop = useMemoizedFn(() => {
    client.stopPool();
  });

  const onRestart = useMemoizedFn(() => {
    client.restart(AUTO_UPLOAD);
  });

  const state = useObservable(client.state$, UploadClient.EState.Default);
  const error = useObservable(client.error$, null);

  const stateString =
    state === UploadClient.EState.Error && error
      ? get(error, "message")
      : state === UploadClient.EState.Default
      ? undefined
      : sentenceCase(UploadClient.EState[state]);

  return mp(
    props,
    <div className="py-2  px-4 flex flex-col gap-2 hover:bg-gray-100">
      <div className="flex items-center justify-between">
        <div title={file.name} className="flex-1 truncate">
          {file.name}
        </div>

        <Badge variant={"secondary"} className="w-[90px] justify-center mr-2">
          {protocol}
        </Badge>
      </div>

      <div
        title={stateString}
        className="text-gray-500 text-xs flex gap-2 overflow-hidden"
      >
        <UploadStateIcon state$={client.state$} />
        <div className="truncate flex-1">{stateString}</div>
      </div>

      <div className="flex gap-2 items-center">
        <RxProgress value$={client.progress$} />
        <div className="w-12 flex items-center justify-end">
          <UploadControl
            state$={client.state$}
            onPlay={onPlay}
            onStop={onStop}
            onRestart={onRestart}
          />
          <TrashIcon className="cursor-pointer ml-2" onClick={onRemove} />
        </div>
      </div>

      <div className="text-xs gap-2 flex text-gray-400">
        <div> Concurrency {client.concurrency} </div>
        <div>, Chunk size {formatFileSize(client.chunkSize)} </div>
        <UploadingElapsed elapse$={client.poolElapse$} />
      </div>
    </div>
  );
});

const UploadingElapsed: React.FC<{
  elapse$: UploadClient["poolElapse$"];
}> = ({ elapse$ }) => {
  const elapsed = useObservable(elapse$, 0);
  return (
    <div className={cn(elapsed === 0 && "hidden")}>
      , Uploading time {formatTimeBySeconds(elapsed / 10)}
    </div>
  );
};

const UploadStateIcon: React.FC<{
  state$: UploadClient["state$"];
}> = ({ state$ }) => {
  const state = useObservable(state$, UploadClient.EState.Default);

  switch (state) {
    case UploadClient.EState.Uploading:
    case UploadClient.EState.CheckingFileExists:
    case UploadClient.EState.CalculatingHash:
    case UploadClient.EState.Merging:
      return <Loading />;

    case UploadClient.EState.UploadSuccessfully:
    case UploadClient.EState.FastUploaded:
      return <CheckIcon color="green" />;

    case UploadClient.EState.Error:
      return <Cross2Icon color="red" />;

    default:
      return null;
  }
};

interface IUploadControlProps {
  onPlay?: () => void;
  onStop?: () => void;
  onRestart?: () => void;
  state$: UploadClient["state$"];
}
const UploadControl: React.FC<IUploadControlProps> = ({
  onPlay,
  onStop,
  onRestart,
  state$,
}) => {
  const state = useObservable(state$, UploadClient.EState.Default);

  switch (state) {
    case UploadClient.EState.WaitForUpload:
    case UploadClient.EState.UploadStopped:
      return <PlayIcon onClick={onPlay} className="cursor-pointer" />;

    case UploadClient.EState.Uploading:
      return <PauseIcon onClick={onStop} className="cursor-pointer" />;

    case UploadClient.EState.Error:
      return <ReloadIcon onClick={onRestart} className="cursor-pointer" />;

    default:
      return null;
  }
};

interface IRxProgressProps {
  value$: Observable<number>;
}
const RxProgress: React.FC<IRxProgressProps> = ({ value$ }) => {
  const value = useObservable(value$, 0);

  return <Progress className="h-1 my-2" value={value} />;
};
