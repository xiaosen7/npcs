"use client";

import {
  Button,
  FormBuilder,
  IFormBuilderItems,
  IFormBuilderProps,
  Input,
  InputProps,
} from "@npcs/ui";
import { useControllableValue } from "ahooks";
import React, { useState } from "react";
import { z } from "zod";

const schema = z.object({
  video: z.string(),
  subtitle: z.string(),
});

export type IPlayFormValues = z.infer<typeof schema>;

const ObjectURLInput = (props: {
  onChange?: (url: string) => void;
  value?: string;
  accept?: string;
  placeholder?: string;
}) => {
  const { accept, placeholder = "+ Select" } = props;
  const [value, onChange] = useControllableValue<string>(props);
  const [file, setFile] = useState<File>();
  const inputRef = React.useRef<HTMLInputElement>(null);

  const onInputChange: InputProps["onChange"] = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setFile(file);
      const url = URL.createObjectURL(file);
      onChange(url);
      return;
    }

    setFile(undefined);
    onChange("");
  };

  return (
    <Button
      className="truncate"
      type="button"
      variant={"secondary"}
      onClick={() => inputRef.current?.click()}
    >
      {file?.name ?? placeholder}
      <Input
        ref={inputRef}
        hidden
        accept={accept}
        style={{ display: "none" }}
        type="file"
        onChange={onInputChange}
      />
    </Button>
  );
};

const items: IFormBuilderItems<IPlayFormValues> = [
  {
    name: "video",
    label: "video",
    renderControl: (field) => (
      <ObjectURLInput placeholder="Select video" {...field} accept="video/*" />
    ),
  },
  {
    name: "subtitle",
    label: "subtitle",
    renderControl: (field) => (
      <ObjectURLInput placeholder="subtitle" {...field} accept=".vtt,.srt" />
    ),
  },
];

export interface IPlayFormProps
  extends Omit<IFormBuilderProps<typeof schema>, "items" | "schema"> {}

export const PlayForm: React.FC<IPlayFormProps> = (props) => {
  return (
    <FormBuilder
      getSubmitText={(loading) => (loading ? "loading..." : "confirm")}
      items={items}
      schema={schema}
      {...props}
    />
  );
};
