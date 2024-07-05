import { prisma } from "@/prisma";
import { calcBadges } from "@/profile";

export {};

export async function getBadges(userId: string) {
  const user = await prisma.user.findUniqueOrThrow({
    where: { id: userId },
    include: {
      answers: {
        include: {
          upvotes: true,
        },
      },
      questions: {
        include: {
          upvotes: true,
        },
      },
    },
  });

  const questionCount = user?.questions.length;
  const answerCount = user?.answers.length;
  const answerUpVotes = user?.answers.reduce(
    (acc, answer) => acc + answer.upvotes.length,
    0
  );
  const questionUpVotes = user?.questions.reduce(
    (acc, question) => acc + question.upvotes.length,
    0
  );
  const views = user?.questions.reduce(
    (acc, question) => acc + question.views,
    0
  );

  return calcBadges({
    answers: answerCount,
    answerUpVotes,
    questions: questionCount,
    questionUpVotes,
    views,
  });
}
