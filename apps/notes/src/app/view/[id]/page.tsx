import { NoteEdit } from "@libs/components/edit/edit";
import { ENoteEditMode } from "@libs/components/edit/types";
import { INoteValidationInfer } from "@libs/components/edit/validation";
import { prisma } from "@libs/prisma/client";
import { IPageProps } from "@npc/shared/react-helpers";
import { redirect } from "next/navigation";
import React from "react";

const ViewPage: React.FC<IPageProps<{ id: string }>> = async (props) => {
  const { id } = props.params;
  const note = await prisma.note.findUniqueOrThrow({
    where: {
      id,
    },
  });

  const save = async (note: INoteValidationInfer) => {
    "use server";
    await prisma.note.update({
      where: {
        id,
      },
      data: {
        title: note.title,
        content: note.content,
      },
    });
    redirect("/");
  };
  return (
    <NoteEdit
      actions={{ save }}
      defaultMode={ENoteEditMode.Preview}
      note={note}
    />
  );
};

export default ViewPage;
