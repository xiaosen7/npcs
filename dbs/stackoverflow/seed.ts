import { PrismaClient } from "@prisma/client";
import { random } from "lodash-es";
import { createLogUpdate } from "log-update";
import os from "node:os";
import { mock } from "../libs/mock";

const BUILTIN_TAG_NAMES = ["react", "vue", "next.js", "javascript"];
const ANSWER_COUNT = 125000;
const USER_COUNT = 50;
const QUESTION_COUNT = 2500;
const TAG_COUNT = 50 + BUILTIN_TAG_NAMES.length;
const TAG_COUNT_EACH_USER = 5;

const prisma = new PrismaClient({
  transactionOptions: {
    timeout: 10 * 60 * 1000,
  },
});
async function main() {
  await prisma.$transaction(async () => {
    console.log("Deleting answers...");
    await prisma.answer.deleteMany();
    console.log("Deleting questions...");
    await prisma.question.deleteMany();
    console.log("Deleting tags...");
    await prisma.tag.deleteMany();
    console.log("Deleting users...");
    await prisma.user.deleteMany();

    console.log("Creating users...");
    const users = await prisma.user.createManyAndReturn({
      data: mock.user.createMany(USER_COUNT),
      skipDuplicates: true,
    });

    console.log("Creating tags...");
    const tags = await prisma.tag.createManyAndReturn({
      data: BUILTIN_TAG_NAMES.map((name) => ({
        name,
        description: `${name} tag`,
      }))
        .concat(mock.tag.createMany(TAG_COUNT - BUILTIN_TAG_NAMES.length))
        .map((x) => ({
          ...x,
          creatorId: users[random(0, USER_COUNT - 1)].id,
        })),
      skipDuplicates: true,
    });

    console.log("Creating questions...");
    const questions = await prisma.question.createManyAndReturn({
      data: mock.question.createMany(QUESTION_COUNT).map((q) => ({
        ...q,
        authorId: users[random(0, USER_COUNT - 1)].id,
      })),
      skipDuplicates: true,
    });

    console.log("Creating answers...");
    const answers = await prisma.answer.createManyAndReturn({
      data: mock.answer.createMany(ANSWER_COUNT).map((a) => ({
        ...a,
        authorId: users[random(0, USER_COUNT - 1)].id,
        questionId: questions[random(0, QUESTION_COUNT - 1)].id,
      })),
      skipDuplicates: true,
    });

    console.log("Updating users...");
    const updateUserLog = createLogUpdate(process.stdout, {
      showCursor: true,
    });
    const randomRange = (count: number) => [
      random(0, Math.floor(count / 4) - 1),
      random(Math.floor(count / 4), Math.floor(count / 2)),
      random(Math.floor(count / 2), Math.floor((count * 3) / 4) - 1),
      random(Math.floor((count * 3) / 4), count),
    ];
    const updateUserTasks = users.map((user, index) => async () => {
      updateUserLog(`Updating user ${index + 1} of ${users.length}...`);
      const [
        upVoteQuestionStart,
        upVoteQuestionEnd,
        downVotesQuestionStart,
        downVotesQuestionEnd,
      ] = randomRange(QUESTION_COUNT);
      const [
        upVoteAnswerStart,
        upVoteAnswerEnd,
        downVoteAnswerStart,
        downVoteAnswerEnd,
      ] = randomRange(ANSWER_COUNT);
      const tagStart = random(0, TAG_COUNT - TAG_COUNT_EACH_USER);

      await prisma.user.update({
        where: {
          id: user.id,
        },
        data: {
          followedTags: {
            connect: tags
              .slice(tagStart, tagStart + TAG_COUNT_EACH_USER)
              .map(({ id }) => ({ id })),
          },
          collections: {
            connect: questions
              .slice(upVoteQuestionStart, upVoteQuestionEnd)
              .map(({ id }) => ({ id })),
          },
          upvoteQuestions: {
            connect: questions
              .slice(upVoteQuestionStart, upVoteQuestionEnd)
              .map(({ id }) => ({ id })),
          },
          downvoteQuestions: {
            connect: questions
              .slice(downVotesQuestionStart, downVotesQuestionEnd)
              .map(({ id }) => ({ id })),
          },
          upvoteAnswers: {
            connect: answers
              .slice(
                upVoteAnswerStart,
                Math.min(upVoteAnswerStart + 50, upVoteAnswerEnd)
              )
              .map(({ id }) => ({ id })),
          },
          downVoteAnswers: {
            connect: answers
              .slice(
                downVoteAnswerStart,
                Math.min(upVoteAnswerStart + 50, downVoteAnswerEnd)
              )
              .map(({ id }) => ({ id })),
          },
        },
      });
    });

    await runTasks(updateUserTasks);

    console.log("Updating questions...");
    const updateQuestionLog = createLogUpdate(process.stdout, {
      showCursor: true,
    });
    const updateQuestionTasks = questions.map((question, index) => async () => {
      updateQuestionLog(
        `Updating question ${index + 1} of ${questions.length}...`
      );
      const tagStart = random(0, TAG_COUNT - TAG_COUNT_EACH_USER);
      await prisma.question.update({
        where: {
          id: question.id,
        },
        data: {
          tags: {
            connect: tags
              .slice(tagStart, tagStart + TAG_COUNT_EACH_USER)
              .map((tag) => ({ id: tag.id })),
          },
        },
      });
    });

    await runTasks(updateQuestionTasks);
  });
}

async function runTasks(
  tasks: Array<() => Promise<void>>,
  parallelCount = os.cpus().length
) {
  let start = 0;
  while (start < tasks.length) {
    const tasksToRun = tasks.slice(start, start + parallelCount);
    await Promise.all(tasksToRun.map((task) => task().catch(task)));
    start += parallelCount;
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
