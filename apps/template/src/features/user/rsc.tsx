import { prisma } from "@/prisma/client";

export async function UserCountRsc() {
  const count = await prisma.user.count();
  return <div>User count: {count}</div>;
}
