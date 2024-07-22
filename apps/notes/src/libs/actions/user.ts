"use server";

import { auth, currentUser } from "@clerk/nextjs/server";
import { prisma } from "@libs/prisma/client";

export async function getCurrent() {
  const { userId } = auth();
  if (!userId) {
    return null;
  }

  const user = await prisma.user.findUnique({
    where: {
      clerkId: userId,
    },
  });
  return user;
}

export async function getCurrentOrThrow() {
  const user = await getCurrent();
  if (!user) {
    throw new Error("Can't find user");
  }
  return user;
}

export async function createIfNeeded() {
  try {
    const clerkUser = await currentUser();

    console.log("clerkUser", clerkUser?.username);
    if (!clerkUser) {
      return;
    }

    const existingUser = await prisma.user.findUnique({
      where: {
        clerkId: clerkUser.id,
      },
    });
    console.log("existingUser", existingUser?.id);
    if (existingUser) {
      return;
    }

    console.log(`create user ${clerkUser.username}`);
    await prisma.user.create({
      data: {
        clerkId: clerkUser.id,
      },
    });
  } catch {}
}
