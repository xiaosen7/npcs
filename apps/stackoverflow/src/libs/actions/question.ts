"use server";

import { prisma } from "@/prisma";
import { QUESTION_SCHEMA } from "@/question";
import { IQuestion, ITag, REPUTATION_COUNTS } from "@/shared";
import { RedirectType, redirect } from "next/navigation";
import { z } from "zod";
import * as userActions from "./user";

export async function create(values: z.infer<typeof QUESTION_SCHEMA>) {
  await prisma.$transaction(async () => {
    const user = await userActions.getCurrentOrRedirectSignIn();

    const { tags } = values;

    await prisma.question.create({
      data: {
        content: values.explanation,
        title: values.title,
        views: 0,
        authorId: user.id,
        tags: {
          connect: (tags as ITag[]).map(({ id }) => ({ id })),
        },
      },
    });

    await userActions.updateReputation(user, REPUTATION_COUNTS.Question.create);
  });

  redirect("/", RedirectType.push);
}

export async function remove(question: IQuestion) {
  await prisma.$transaction(async () => {
    await prisma.question.delete({
      where: {
        id: question.id,
      },
    });

    await userActions.updateReputation(
      await userActions.getCurrentOrRedirectSignIn(),
      REPUTATION_COUNTS.Question.remove,
    );
  });

  redirect("/");
}

export async function update(
  question: IQuestion,
  data: Omit<z.infer<typeof QUESTION_SCHEMA>, "tags">,
) {
  await prisma.question.update({
    where: {
      id: question.id,
    },
    data: {
      content: data.explanation,
      title: data.title,
    },
  });
}

export async function upVote(question: IQuestion, vote: boolean) {
  await prisma.$transaction(async () => {
    const user = await userActions.getCurrentOrRedirectSignIn();

    vote && (await downVote(question, false));

    await prisma.question.update({
      where: {
        id: question.id,
      },
      data: {
        upvotes: {
          [vote ? "connect" : "disconnect"]: {
            id: user.id,
          },
        },
      },
    });

    await userActions.updateReputation(
      user,
      REPUTATION_COUNTS.Question.upvote.user,
    );
    await userActions.updateReputation(
      { id: question.authorId },
      REPUTATION_COUNTS.Question.upvote.author,
    );
  });
}

export async function downVote(question: IQuestion, vote: boolean) {
  await prisma.$transaction(async () => {
    const user = await userActions.getCurrentOrRedirectSignIn();

    vote && (await upVote(question, false));

    await prisma.question.update({
      where: {
        id: question.id,
      },
      data: {
        downvotes: {
          [vote ? "connect" : "disconnect"]: {
            id: user.id,
          },
        },
      },
    });

    await userActions.updateReputation(
      user,
      REPUTATION_COUNTS.Question.downvote.user,
    );
    await userActions.updateReputation(
      { id: question.authorId },
      REPUTATION_COUNTS.Question.downvote.author,
    );
  });
}

export async function collect(question: IQuestion, collect: boolean) {
  const user = await userActions.getCurrentOrRedirectSignIn();

  await prisma.question.update({
    where: {
      id: question.id,
    },
    data: {
      collectors: {
        [collect ? "connect" : "disconnect"]: {
          id: user.id,
        },
      },
    },
  });
}
