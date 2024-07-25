"use server";

import { prisma } from "@/libs/prisma/client";
import { auth } from "@clerk/nextjs/server";

export async function createUserIfNeeded() {
  try {
    const { userId: clerkId } = auth();

    if (!clerkId) {
      return;
    }

    console.log({ clerkId });

    const existingUser = await prisma.user.findUnique({
      where: {
        clerkId,
      },
    });
    console.log({ existingUser });
    if (existingUser) {
      return;
    }

    console.log("creating user: clerkId ", clerkId);

    await prisma.user.create({
      data: {
        clerkId,
      },
    });
  } catch {}
}
