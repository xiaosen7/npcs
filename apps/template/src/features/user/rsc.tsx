import "server-only";
import { getUserCount } from "./get-user-count";

export async function UserCount() {
  const count = await getUserCount(1);
  return <div>User count: {count}</div>;
}
