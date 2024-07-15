import { Label } from "@next.js-practical-cases/upload/shared/components/ui/label";
import { Slider } from "@next.js-practical-cases/upload/shared/components/ui/slider";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@next.js-practical-cases/upload/shared/components/ui/toggle-group";
import { IS_VERCEL } from "@next.js-practical-cases/upload/shared/constants";
import { cn } from "@next.js-practical-cases/upload/shared/utils";
import { formatFileSize } from "@next.js-practical-cases/upload/shared/utils/format-file-size";
import { useControllableValue } from "ahooks";
import { values } from "lodash-es";
import React from "react";
import { DEFAULTS } from "../constants/defaults";
import { ESupportedProtocol } from "../types";

export interface IUploadSetting {
  concurrency: number;
  chunkSize: number;
  protocol: string;
}

export interface IUploadSettingProps {
  value?: IUploadSetting;
  onChange?: (value: IUploadSetting) => void;
  defaultValue?: IUploadSetting;
  disabled?: boolean;
}

export const UploadSetting: React.FC<IUploadSettingProps> = (props) => {
  const { disabled } = props;
  const [value, onChange] = useControllableValue<IUploadSetting>(props);

  return (
    <div className={cn(disabled && "cursor-not-allowed", "space-y-4")}>
      <div className="space-y-2">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label className="text-left" htmlFor="chunkSize">
            Chunk Size
          </Label>
          <Slider
            className="col-span-2"
            disabled={disabled}
            id="chunkSize"
            max={DEFAULTS.maxChunkSize}
            min={DEFAULTS.minChunkSize}
            step={1}
            value={[value.chunkSize]}
            onValueChange={([chunkSize]) => {
              onChange({
                ...value,
                chunkSize,
              });
            }}
          />
          <span>{formatFileSize(value.chunkSize)}</span>
        </div>

        <div className="text-sm text-gray-500">Size of each chunk.</div>
      </div>

      <div className="space-y-2">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label className="text-left" htmlFor="maxWidth">
            Concurrency
          </Label>
          <Slider
            className="col-span-2"
            disabled={disabled}
            id="concurrency"
            max={DEFAULTS.maxConcurrency}
            min={1}
            step={1}
            value={[value.concurrency]}
            onValueChange={([concurrency]) => {
              onChange({
                ...value,
                concurrency,
              });
            }}
          />
          <span>{value.concurrency}</span>
        </div>

        <div className="text-sm text-gray-500">
          The count of requests when uploading.
        </div>
      </div>

      <div className={"space-y-2"}>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label className="text-left" htmlFor="maxWidth">
            Protocol
          </Label>

          <ToggleGroup
            className="col-span-2"
            disabled={disabled || IS_VERCEL}
            type="single"
            value={value.protocol}
            onValueChange={(protocol) => {
              onChange({
                ...value,
                protocol: protocol as ESupportedProtocol,
              });
            }}
          >
            {values(ESupportedProtocol).map((protocol) => (
              <ToggleGroupItem
                key={protocol}
                className="w-1/2"
                value={protocol}
              >
                {protocol}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>

        <div className="text-sm text-gray-500">
          The protocol when uploading.
        </div>
      </div>
    </div>
  );
};
