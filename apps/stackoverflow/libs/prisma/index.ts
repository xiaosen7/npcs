import { ESearchParamKey, ISearchParams } from "@/search-params";
// eslint-disable-next-line import/no-cycle
import { Prisma, PrismaClient } from ".prisma/client";
import { IBetterOmit, ensureArray } from "@/shared";
import { mergeWith, omit } from "lodash-es";
import { MODEL_CONFIG_MAP } from "./model-config";
import { IFindManyArgs } from "./types";

const globalThis = global as unknown as {
  prisma: ReturnType<typeof createInstance> | undefined;
};

function createInstance() {
  return new PrismaClient({
    transactionOptions: {
      timeout: 60 * 1000 * 10,
      maxWait: 60 * 1000 * 10,
    },
    log: ["query", "info", "warn", "error"],
  }).$extends({
    model: {
      $allModels: {
        search<T, A>(
          this: T,
          args: IBetterOmit<
            Prisma.Exact<A, Prisma.Args<T, "findMany">>,
            "take" | "skip"
          > & {
            searchParams?: IPrismaSearchParams;
          },
        ) {
          const { searchParams } = args;
          const userArgs = omit(args, "searchParams");
          const context = Prisma.getExtensionContext(this) as any;
          const modelName = context.name as Prisma.ModelName;

          const finalArgs = getArgs(modelName, searchParams, userArgs);
          return prisma.$transaction(async () => {
            const items = (await context.findMany(finalArgs)) as Prisma.Result<
              T,
              A,
              "findMany"
            >;

            const total = (await context.count({
              where: finalArgs.where,
            })) as number;

            return { items, total };
          });
        },
      },
    },
  });
}

export const prisma = globalThis.prisma || createInstance();

// we do not need to update the prisma instance when code has been changed in development.
if (process.env.NODE_ENV === "development") globalThis.prisma = prisma;

type IPrismaSearchParams = Pick<
  ISearchParams,
  | ESearchParamKey.Q
  | ESearchParamKey.Page
  | ESearchParamKey.PageSize
  | ESearchParamKey.Filter
>;

function getArgs<T extends Prisma.ModelName>(
  modelName: T,
  searchParams?: IPrismaSearchParams,
  args?: IFindManyArgs<T>,
): IFindManyArgs<T> {
  const page = Number(searchParams?.[ESearchParamKey.Page]) || 1;
  const pageSize = Number(searchParams?.[ESearchParamKey.PageSize]) || 20;
  const search = searchParams?.[ESearchParamKey.Q];

  const filter = searchParams?.[ESearchParamKey.Filter]!;
  let filterArgs: IFindManyArgs<T> =
    MODEL_CONFIG_MAP[modelName].filters[filter]?.args;
  const paginationArgs: IFindManyArgs<T> = {
    skip: (page - 1) * pageSize,
    take: pageSize,
    orderBy: {
      createdAt: "desc",
    },
  };

  const where = search
    ? {
        OR: MODEL_CONFIG_MAP[modelName].searchableFields.map((field) => ({
          [field]: {
            contains: search,
            mode: "insensitive",
          },
        })),
      }
    : undefined;

  return mergeWith(
    { where },
    paginationArgs,
    filterArgs,
    args,
    (objValue, srcValue, key) => {
      if (key === "orderBy") {
        return [...ensureArray(srcValue), ...ensureArray(objValue)].filter(
          Boolean,
        );
      }
    },
  );
}
