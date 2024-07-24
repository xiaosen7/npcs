import { Prisma } from "../generated";

export type IFindManyArgs<TModelName extends Prisma.ModelName> =
  Prisma.TypeMap["model"][TModelName]["operations"]["findMany"]["args"];
