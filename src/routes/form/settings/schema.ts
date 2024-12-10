import { date, z } from "zod";

export const formSchema = z.object({
  name: z.string().min(2).max(50),
  lastName: z.string().min(2).max(50),
  instagramUsername: z.string().min(2).max(50),
  email: z.string().email(),
  dateOfBirth: z.string().date(),
});

export type FormSchema = typeof formSchema;
