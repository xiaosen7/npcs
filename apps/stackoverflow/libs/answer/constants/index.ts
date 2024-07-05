import { z } from "zod";

export const ANSWER_SCHEMA = z.object({
  content: z.string().min(10),
});
