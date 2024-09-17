import Introduction from "@docs/INTRODUCTION.md";
import { Button } from "@npcs/ui";
import Link from "next/link";

export default async function Home() {
  return (
    <div>
      <div className="markdown-body">
        <Introduction />
      </div>

      <Button className="mt-6">
        <Link href={"/getting-started"}>Getting started</Link>
      </Button>
    </div>
  );
}
export const dynamic = "force-dynamic";
