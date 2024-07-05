import { Prisma } from "@prisma/client";

export type IFindManyArgs<TModelName extends Prisma.ModelName> =
  Prisma.TypeMap["model"][TModelName]["operations"]["findMany"]["args"];
