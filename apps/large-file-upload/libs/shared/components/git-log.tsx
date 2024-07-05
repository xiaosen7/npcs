"use client";

import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { mp } from "../utils/jsx";

export const GitLog: React.FC<{}> = (props) => {
  const [log, setLog] = useState<string>();

  useEffect(() => {
    fetch("/git.log")
      .then((res) => (res.status === 200 ? res.text() : ""))
      .then(setLog);
  }, []);
  return mp(
    props,
    <div className="text-gray-500 text-xs items-center justify-center flex gap-2 max-md:flex-col">
      <div>{log}</div>
      <Link
        target="_blank"
        href={"https://github.com/xiaosen7/nextjs-large-file-upload-demo"}
      >
        <GitHubLogoIcon />
      </Link>
    </div>
  );
};
