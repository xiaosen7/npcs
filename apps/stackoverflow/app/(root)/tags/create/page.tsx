import { actions } from "@/actions";
import { prisma } from "@/prisma";
import { IPageProps, REPUTATION_COUNTS } from "@/shared";
import { ITagFormProps, TagForm } from "@/tag";
import { redirect } from "next/navigation";
import React from "react";

const CreateTagPage: React.FC<IPageProps> = async () => {
  const user = await actions.user.getCurrentOrRedirectSignIn();

  const onSubmit: ITagFormProps["onSubmit"] = async (values) => {
    "use server";

    await prisma.$transaction(async () => {
      await prisma.$transaction(async () => {
        const tag = await prisma.tag.create({
          data: {
            ...values,
            creatorId: user.id,
          },
        });

        await prisma.user.update({
          data: {
            followedTags: {
              connect: {
                id: tag.id,
              },
            },
          },
          where: {
            id: user.id,
          },
        });
      });

      await actions.user.updateReputation(user, REPUTATION_COUNTS.Tag.create);
    });

    redirect("/tags");
  };

  const checkNameUniq = async (name: string) => {
    "use server";
    return !(await prisma.tag.findFirst({
      where: {
        name: {
          mode: "insensitive",
          equals: name,
        },
      },
    }));
  };

  return <TagForm checkNameUniq={checkNameUniq} onSubmit={onSubmit} />;
};

export default CreateTagPage;
