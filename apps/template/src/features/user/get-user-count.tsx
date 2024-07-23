import { prisma } from "@/prisma/client";
import { cache } from "react";

export const sleep = (ms: number) => new Promise((rs) => setTimeout(rs, ms));
export const getUserCount = cache(async (id: number) => {
  // console.log("phase", process.env.NEXT_PHASE);
  // if (process.env.NEXT_PHASE === PHASE_PRODUCTION_BUILD) {
  //   return [];
  // }
  console.log("fetch user count");
  await sleep(5000);
  return await prisma.user.count();
});
