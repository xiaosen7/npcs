import { prisma } from "@/prisma/client";
import { cache } from "react";
import "server-only";

export const getUserCount = cache(async () => {
  // console.log("phase", process.env.NEXT_PHASE);
  // if (process.env.NEXT_PHASE === PHASE_PRODUCTION_BUILD) {
  //   return [];
  // }

  console.log("fetch user count");
  return await prisma.user.count();
});
