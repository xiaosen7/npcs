import { actions } from "@/actions";
import { NoteEdit } from "@/note/edit";
import { ENoteEditMode } from "@/note/types";
import { prisma } from "@/prisma/client";
import { faker } from "@faker-js/faker";
import { IPageProps } from "@npc/shared/react-helpers";
import { redirect } from "next/navigation";
import React from "react";

const AddPage: React.FC<IPageProps> = async (props) => {
  const save = async ({
    title,
    content,
  }: {
    title: string;
    content: string;
  }) => {
    "use server";
    await prisma.note.create({
      data: {
        title,
        content,
        color: faker.color.rgb(),
        author: {
          connect: await actions.user.getCurrentOrThrow(),
        },
      },
    });

    redirect("/");
  };

  return <NoteEdit defaultMode={ENoteEditMode.Edit} save={save} />;
};

export default AddPage;
