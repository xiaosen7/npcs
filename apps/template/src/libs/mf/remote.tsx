"use client";

import {
  init,
  loadRemote,
  registerRemotes,
} from "@module-federation/enhanced/runtime";
import { once } from "lodash-es";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const Remote = dynamic(
  once(async () => {
    const p = init({
      name: "mf_shared",
      remotes: [],
    });

    registerRemotes(
      [
        {
          name: "mf_shared",
          entry: "http://localhost:3000/_next/static/chunks/remoteEntry.js",
        },
      ],
      {
        force: true,
      },
    );

    const { add } = (await loadRemote(
      "mf_shared/add",
    )) as typeof import("mf_shared/add");
    return {
      default: () => <>{add(1, 2)}</>,
    };
  }),
);

const RemoteDemoPage = () => {
  return (
    <div>
      111
      <Suspense>
        <Remote />
      </Suspense>
    </div>
  );
};
export default RemoteDemoPage;
