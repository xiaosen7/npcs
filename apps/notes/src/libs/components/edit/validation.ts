import { z } from "zod";

export const noteValidation = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  content: z.string().optional(),
});

export type INoteValidationInfer = z.infer<typeof noteValidation>;
