"use server";

import { prisma } from "@/libs/prisma/client";
import { auth } from "@clerk/nextjs/server";

export async function createUserIfNeeded() {
  try {
    const { clerkUser: clerkId } = auth();

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
