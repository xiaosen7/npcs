"use server";

import { Note } from ".prisma/client";
import { prisma } from "@libs/prisma/client";

export async function removeNote(note: Note) {
  await prisma.note.delete({
    where: note,
  });
}
