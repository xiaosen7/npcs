"use client";

import { IconEdit } from "@/assets/icon/edit";
import { IconPreview } from "@/assets/icon/preview";
import { IconSave } from "@/assets/icon/save";
import { ButtonIcon } from "@/button/icon";
import { InputContent } from "@/input/content";
import { InputTitle } from "@/input/title";
import { Back } from "@/router/back";
import { Note } from "@prisma/client";
import { useControllableValue } from "ahooks";
import React from "react";
import { ENoteEditMode } from "./types";

interface INoteEditProps {
  defaultMode?: ENoteEditMode;
  note?: Note;
  save: (note: { title: string; content: string }) => Promise<void>;
}

export const NoteEdit: React.FC<INoteEditProps> = (props) => {
  const { defaultMode = ENoteEditMode.Edit, note, save } = props;

  const [mode, changeMode] = useControllableValue(props, {
    defaultValue: defaultMode,
    defaultValuePropName: "defaultMode",
  });

  const readOnly = mode === ENoteEditMode.Preview;
  console.log({ readOnly });

  return (
    <div className="flex h-full flex-col gap-10">
      <header className="flex justify-between">
        <Back />

        <div className="flex gap-5">
          <ButtonIcon
            hidden={!readOnly}
            onClick={() => changeMode(ENoteEditMode.Edit)}
          >
            <IconEdit alt="edit" />
          </ButtonIcon>

          <ButtonIcon
            hidden={readOnly}
            onClick={() => changeMode(ENoteEditMode.Preview)}
          >
            <IconPreview alt="preview" />
          </ButtonIcon>

          <ButtonIcon
            onClick={() =>
              save({
                content: "111",
                title: "222",
              })
            }
          >
            <IconSave alt="save" />
          </ButtonIcon>
        </div>
      </header>

      <InputTitle autoFocus defaultValue={note?.title} readOnly={readOnly} />

      <InputContent
        className="flex-1"
        defaultValue={note?.content ?? ""}
        readOnly={readOnly}
      />
    </div>
  );
};
