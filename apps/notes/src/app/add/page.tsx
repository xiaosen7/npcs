import { faker } from "@faker-js/faker";
import { actions } from "@libs/actions";
import { NoteEdit } from "@libs/components/edit/edit";
import { ENoteEditMode } from "@libs/components/edit/types";
import { INoteValidationInfer } from "@libs/components/edit/validation";
import { prisma } from "@libs/prisma/client";
import { IPageProps } from "@npcs/shared/react-helpers";
import { redirect } from "next/navigation";
import React from "react";

export const dynamic = "force-dynamic";
const AddPage: React.FC<IPageProps> = async (props) => {
  const save = async ({ title, content }: INoteValidationInfer) => {
    "use server";
    console.log("save");
    await prisma.note.create({
      data: {
        title,
        content,
        // TODO user pick a color
        color: faker.color.rgb(),
        author: {
          connect: await actions.user.getCurrentOrThrow(),
        },
      },
    });

    redirect("/");
  };

  return <NoteEdit actions={{ save }} defaultMode={ENoteEditMode.Edit} />;
};

export default AddPage;
