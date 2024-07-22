"use server";

import { prisma } from "@libs/prisma/client";
import { Note } from "@prisma/client";

export async function remove(note: Note) {
  await prisma.note.delete({
    where: note,
  });
}
