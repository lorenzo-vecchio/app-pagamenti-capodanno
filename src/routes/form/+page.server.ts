import type { ServerLoad, Actions } from "@sveltejs/kit";
import { fail } from "@sveltejs/kit";
import { superValidate } from "sveltekit-superforms";
import { formSchema } from "./settings/schema";
import { zod } from "sveltekit-superforms/adapters";
import { PrismaClient } from "@prisma/client";

export const load: ServerLoad = async () => {
  return {
    form: await superValidate(zod(formSchema)),
  };
};

export const actions: Actions = {
  default: async (event) => {
    // default zod validation
    const form = await superValidate(event, zod(formSchema));
    if (!form.valid) {
      return fail(400, {
        form,
      });
    }
    // custom validation checking if user already registered
    const prisma = new PrismaClient();
    const { instagramUsername, email } = form.data;
    const existingEmail = await prisma.user.findFirst({
      where: {
        email,
      },
    });
    const existingInstagram = await prisma.user.findFirst({
      where: {
        instagramUsername,
      },
    });
    if (existingEmail) {
      form.errors.email = ["This email is already registered."];
      form.valid = false;
      return fail(400, { form });
    }
    if (existingInstagram) {
      form.errors.instagramUsername = [
        "This Instagram username is already registered.",
      ];
      form.valid = false;
      return fail(400, { form });
    }

    return {
      form,
    };
  },
};
