"use server";

import { ANSWER_SCHEMA } from "@/answer";
import { prisma } from "@/prisma";
import { IAnswer, IQuestion, REPUTATION_COUNTS } from "@/shared";
import { z } from "zod";
import * as userActions from "./user";

export async function create(
  question: IQuestion,
  values: z.infer<typeof ANSWER_SCHEMA>
) {
  await prisma.$transaction(async () => {
    const { content } = values;
    const user = await userActions.getCurrentOrRedirectSignIn();
    await prisma.answer.create({
      data: {
        content,
        authorId: user.id,
        questionId: question.id,
      },
    });

    await userActions.updateReputation(user, REPUTATION_COUNTS.Answer.create);
  });
}

export async function update(
  answer: IAnswer,
  data: z.infer<typeof ANSWER_SCHEMA>
) {
  await prisma.answer.update({
    where: {
      id: answer.id,
    },
    data: {
      content: data.content,
    },
  });
}

export async function remove(answer: IAnswer) {
  await prisma.$transaction(async () => {
    await prisma.answer.delete({
      where: {
        id: answer.id,
      },
    });

    await userActions.updateReputation(
      await userActions.getCurrentOrRedirectSignIn(),
      REPUTATION_COUNTS.Answer.remove
    );
  });
}

export async function upVote(answer: IAnswer, vote: boolean) {
  await prisma.$transaction(async () => {
    const user = await userActions.getCurrentOrRedirectSignIn();

    vote && (await downVote(answer, false));
    await prisma.answer.update({
      where: {
        id: answer.id,
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
      REPUTATION_COUNTS.Answer.upvote.user
    );
    await userActions.updateReputation(
      { id: answer.authorId },
      REPUTATION_COUNTS.Answer.upvote.author
    );
  });
}

export async function downVote(answer: IAnswer, vote: boolean) {
  await prisma.$transaction(async () => {
    const user = await userActions.getCurrentOrRedirectSignIn();

    vote && (await upVote(answer, false));
    await prisma.answer.update({
      where: {
        id: answer.id,
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
      REPUTATION_COUNTS.Answer.downvote.user
    );
    await userActions.updateReputation(
      { id: answer.authorId },
      REPUTATION_COUNTS.Answer.downvote.author
    );
  });
}
