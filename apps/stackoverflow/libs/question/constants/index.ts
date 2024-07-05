import * as z from "zod";

export const QUESTION_SCHEMA = z.object({
  title: z.string().min(5).max(130),
  explanation: z.string().min(20),
  tags: z.array(z.any()).min(1).max(3),
});
