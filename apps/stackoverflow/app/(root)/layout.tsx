import { DefaultLayout, IGlobalSearchProps } from "@/layout";
import { prisma } from "@/prisma";
import { Prisma } from "@/prisma/generated";
import { ESearchParamKey } from "@/search-params";
import { ISafeAny } from "@/shared";
import { toLower } from "lodash-es";
import React from "react";

interface ILayoutProps extends React.PropsWithChildren {}

const Layout: React.FC<ILayoutProps> = async ({ children }) => {
  const hotQuestions = await prisma.question.findMany({
    orderBy: [
      {
        views: "desc",
      },
      {
        upvotes: {
          _count: "desc",
        },
      },
    ],
    take: 5,
  });
  const popularTags = await prisma.tag.findMany({
    take: 5,
    orderBy: {
      questions: {
        _count: "desc",
      },
    },
    include: {
      questions: true,
    },
  });

  const globalSearchApi: IGlobalSearchProps["api"] = async (types, value) => {
    "use server";
    return (
      await Promise.all(
        types.map(async (type) => {
          const { items } = await prisma[
            toLower(type) as Prisma.TypeMap["meta"]["modelProps"]
          ].search({
            searchParams: {
              [ESearchParamKey.Q]: value,
              [ESearchParamKey.PageSize]: "8",
            },
          });

          return items.map((x) => ({ ...x, type: type as ISafeAny }));
        }),
      )
    ).flat();
  };

  return (
    <main className="background-light850_dark100">
      <DefaultLayout
        className="h-screen"
        getTagQuestionCount={(tag) =>
          (tag as (typeof popularTags)[0]).questions.length
        }
        globalSearch={{
          api: globalSearchApi,
        }}
        hotQuestions={hotQuestions}
        popularTags={popularTags}
      >
        {children}
      </DefaultLayout>
    </main>
  );
};

export default Layout;
