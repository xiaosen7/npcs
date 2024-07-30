"use server";

import { prisma } from "@/libs/prisma/client";
import { currentUser } from "@clerk/nextjs/server";

export async function createUserIfNeeded() {
  try {
    const clerkId = (await currentUser())?.id;

    if (!clerkId) {
      return;
    }

    const existingUser = await prisma.user.findUnique({
      where: {
        clerkId,
      },
    });
    if (existingUser) {
      return;
    }

    await prisma.user.create({
      data: {
        clerkId,
      },
    });
  } catch {}
}
