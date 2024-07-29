import { Prisma } from ".prisma/client";

export const REPUTATION_COUNTS = {
  [Prisma.ModelName.Question]: {
    create: 5,
    remove: -5,
    upvote: {
      user: 2,
      author: 10,
    },
    downvote: {
      user: -2,
      author: -10,
    },
  },
  [Prisma.ModelName.Answer]: {
    create: 10,
    remove: 10,
    upvote: {
      user: 2,
      author: 10,
    },
    downvote: {
      user: -2,
      author: -10,
    },
  },
  [Prisma.ModelName.Tag]: {
    create: 3,
  },
} as const;

export const REPUTATION_CAN_CREATE_TAGS = -1;
