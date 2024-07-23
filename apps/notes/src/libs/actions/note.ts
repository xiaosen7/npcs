"use server";

import { Note, prisma } from "@libs/prisma/client";

export async function remove(note: Note) {
  await prisma.note.delete({
    where: note,
  });
}
