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
  dateOfBirth: z
    .string()
    .date("Invalid date")
    .refine((dob) => {
      const birthDate = new Date(dob);
      const today = new Date();
      const age = today.getFullYear() - birthDate.getFullYear();
      const monthDifference = today.getMonth() - birthDate.getMonth();
      const dayDifference = today.getDate() - birthDate.getDate();

      // Check if they are 18 years or older
      return (
        age > 18 ||
        (age === 18 &&
          (monthDifference > 0 ||
            (monthDifference === 0 && dayDifference >= 0)))
      );
    }, "You must be at least 18 years old"),
  isGroup: z.boolean(),
});

export type FormSchema = typeof formSchema;
