import { NoteEdit } from "@/note/edit";
import { ENoteEditMode } from "@/note/types";
import { prisma } from "@/prisma/client";
import { IPageProps } from "@npc/shared/react-helpers";
import React from "react";

const ViewPage: React.FC<IPageProps<{ id: string }>> = async (props) => {
  const note = await prisma.note.findUniqueOrThrow({
    where: {
      id: props.params.id,
    },
  });

  const save = async () => {
    "use server";
  };
  return (
    <NoteEdit defaultMode={ENoteEditMode.Preview} note={note} save={save} />
  );
};

export default ViewPage;
