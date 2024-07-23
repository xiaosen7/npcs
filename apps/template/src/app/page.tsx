import { UserCount } from "@/features/user/rsc";
import { Welcome } from "@/shared/components/welcome";
import { Suspense } from "react";

export async function generateMetadata(props: { params: { locale: string } }) {
  return {
    title: "home",
    description: "home_description",
  };
}

export default async function Home() {
  const timestamp = Date.now();
  console.log(`Home page rendered at timestamp: ${timestamp}`);
  return (
    <>
      <Welcome />
      <Suspense fallback="loading...">
        <UserCount />
      </Suspense>
      Rendered at timestamp: {timestamp}
    </>
  );
}

export const dynamic = "force-dynamic";
