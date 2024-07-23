import { UserCountRsc } from "@/features/user/rsc";
import { Welcome } from "@/shared/components/welcome";
import { Suspense } from "react";

export default async function Home() {
  const timestamp = Date.now();
  console.log(`Home page rendered at timestamp: ${timestamp}`);
  return (
    <>
      <Welcome />
      <Suspense fallback="loading...">
        <UserCountRsc />
      </Suspense>
      Rendered at timestamp: {timestamp}
    </>
  );
}

export const dynamic = "force-dynamic";
