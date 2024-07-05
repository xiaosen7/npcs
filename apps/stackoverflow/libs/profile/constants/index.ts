import { z } from "zod";

export const PROFILE_SCHEMA = z.object({
  fullName: z.string().min(2).max(50).describe("Your name"),
  username: z.string().min(2).max(50),
  portfolioWebsite: z.union([z.string().url(), z.literal(""), z.undefined()]),
  bio: z.union([z.string().min(5).max(50), z.literal(""), z.undefined()]),
  location: z.union([z.string().min(5).max(50), z.literal(""), z.undefined()]),
});
