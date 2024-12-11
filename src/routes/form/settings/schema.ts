import { message } from "sveltekit-superforms";
import { date, z } from "zod";

export const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(50, { message: "Name must be at most 50 characters" }),
  lastName: z
    .string()
    .min(2, { message: "Last Name must be at least 2 characters" })
    .max(50, { message: "Last Name must be at most 50 characters" }),
  instagramUsername: z
    .string()
    .min(2, { message: "Username must be at least 2 characters" })
    .max(50, { message: "Username must be at most 50 characters" }),
  email: z.string().email({ message: "Invalid email" }),
  dateOfBirth: z.string().date("Invalid date").refine((v) => v, { message: "A date of birth is required." }),
});

export type FormSchema = typeof formSchema;
