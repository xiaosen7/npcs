import { Note } from ".prisma/client";
import { prisma } from "@libs/prisma/client";
import { revalidatePath } from "next/cache";
import React from "react";
import { INoteCardsProps, NoteCards } from ".";

export const NoteCardsRSC: React.FC<Omit<INoteCardsProps, "actions">> = (
  props,
) => {
  async function remove(note: Note, pathname: string) {
    "use server";
    await prisma.note.delete({
      where: note,
    });
    revalidatePath(pathname);
  }

  return <NoteCards {...props} actions={{ remove }} />;
};
