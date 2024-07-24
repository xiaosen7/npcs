import { Prisma } from "@/prisma/generated";

export const MODEL_NAME = Prisma.ModelName;

export type IModelConfigMap = {
  [ModelName in Prisma.ModelName]: {
    searchableFields: (keyof Prisma.TypeMap["model"][ModelName]["fields"])[];
    filters: {
      [key: string]: {
        args: Prisma.TypeMap["model"][ModelName]["operations"]["findMany"]["args"];
      };
    };
  };
};

export const MODEL_CONFIG_MAP: IModelConfigMap = {
  [Prisma.ModelName.Question]: {
    searchableFields: [
      Prisma.QuestionScalarFieldEnum.title,
      Prisma.QuestionScalarFieldEnum.content,
    ],
    filters: {
      newest: {
        args: {
          orderBy: {
            createdAt: "desc",
          },
        },
      },
      recommended: {
        args: {
          orderBy: {
            upvotes: {
              _count: "desc",
            },
          },
        },
      },
      frequent: {
        args: {
          orderBy: {
            views: "desc",
          },
        },
      },
      unanswered: {
        args: {
          where: {
            answers: {
              none: {},
            },
          },
        },
      },
    },
  },
  [Prisma.ModelName.Tag]: {
    searchableFields: [Prisma.TagScalarFieldEnum.name],
    filters: {
      popular: {
        args: {
          orderBy: {
            questions: {
              _count: "desc",
            },
          },
        },
      },
      recent: {
        args: {
          orderBy: {
            createdAt: "desc",
          },
        },
      },
      name: {
        args: {
          orderBy: {
            name: "asc",
          },
        },
      },
      old: {
        args: {
          orderBy: {
            createdAt: "asc",
          },
        },
      },
    },
  },
  [Prisma.ModelName.User]: {
    searchableFields: [
      Prisma.UserScalarFieldEnum.fullName,
      Prisma.UserScalarFieldEnum.username,
    ],
    filters: {
      "new users": {
        args: {
          orderBy: {
            createdAt: "desc",
          },
        },
      },
      "old users": {
        args: {
          orderBy: {
            createdAt: "asc",
          },
        },
      },
      "top contributors": {
        args: {
          orderBy: {
            reputation: "desc",
          },
        },
      },
    },
  },
  [Prisma.ModelName.Answer]: {
    searchableFields: [Prisma.AnswerScalarFieldEnum.content],
    filters: {
      "highest up votes": {
        args: {
          orderBy: {
            upvotes: {
              _count: "desc",
            },
          },
        },
      },
      "lowest up votes": {
        args: {
          orderBy: {
            upvotes: {
              _count: "asc",
            },
          },
        },
      },
      "most recent": {
        args: {
          orderBy: {
            createdAt: "desc",
          },
        },
      },
      oldest: {
        args: {
          orderBy: {
            createdAt: "asc",
          },
        },
      },
    },
  },
} as const;
