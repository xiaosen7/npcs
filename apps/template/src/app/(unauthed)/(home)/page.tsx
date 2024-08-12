import { UserCountRsc } from "@/features/user/rsc";
import RemoteDemoPage from "@/libs/mf/remote";
import { Suspense } from "react";

export default async function Home() {
  const timestamp = Date.now();
  return (
    <>
      Rendered at timestamp: {timestamp}
      <Suspense fallback="loading...">
        <UserCountRsc />
      </Suspense>
      <RemoteDemoPage />
    </>
  );
}

export const dynamic = "force-dynamic";
