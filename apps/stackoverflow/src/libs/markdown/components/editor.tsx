"use client";

import { createHydrationComponent } from "@/shared";

/**
 * This is not the controllable component
 */
export const MarkdownEditor = createHydrationComponent({
  clientSide: () =>
    import("./client-only/editor").then((x) => x.MarkdownEditor),
  serverSide: () =>
    import("./server-only/editor").then((x) => x.MarkdownEditor),
});
