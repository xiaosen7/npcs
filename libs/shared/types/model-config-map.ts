import { Prisma } from "@prisma/client";

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
