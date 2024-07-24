"use server";

import { auth, currentUser } from "@clerk/nextjs/server";
import { prisma } from "@libs/prisma/client";

export async function getCurrent() {
  const { userId } = auth();
  console.log({ clerkId: userId });
  if (!userId) {
    return null;
  }

  const user = await prisma.user.findUnique({
    where: {
      clerkId: userId,
    },
  });
  console.log({ user });
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

    if (!clerkUser) {
      return;
    }

    const existingUser = await prisma.user.findUnique({
      where: {
        clerkId: clerkUser.id,
      },
    });
    if (existingUser) {
      return;
    }

    await prisma.user.create({
      data: {
        clerkId: clerkUser.id,
      },
    });
  } catch (error) {
    console.error(error);
  }
}
