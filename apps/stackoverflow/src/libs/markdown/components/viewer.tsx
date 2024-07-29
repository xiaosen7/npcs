"use client";

import { createHydrationComponent } from "@/shared";

export const MarkdownViewer = createHydrationComponent({
  clientSide: () =>
    import("./client-only/viewer").then((x) => x.MarkdownViewer),
  serverSide: () =>
    import("./server-only/viewer").then((x) => x.MarkdownViewer),
});
