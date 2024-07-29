import { actions } from "@/actions";
import { prisma } from "@/prisma";
import { QuestionForm } from "@/question";
import { ITag } from "@/shared";
import React from "react";

const AskQuestionPage: React.FC = () => {
  const searchApi = async (value: string, tags: ITag[]) => {
    "use server";

    return prisma.tag.findMany({
      where: {
        name: {
          contains: value,
          mode: "insensitive",
        },
        NOT: {
          id: {
            in: tags.map((x) => x.id),
          },
        },
      },
      include: {
        _count: {
          select: {
            questions: true,
          },
        },
      },
      take: 8,
    });
  };

  return (
    <div>
      <h1 className="h1-bold text-dark100_light900 mb-9">Ask a Question</h1>
      <QuestionForm
        tagsEditor={{
          searchApi,
          searchedTagTotalQuestionsPaths: "_count.questions",
        }}
        onSubmit={actions.question.create}
      />
    </div>
  );
};

export default AskQuestionPage;
