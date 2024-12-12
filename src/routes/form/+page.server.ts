import type { ServerLoad, Actions } from "@sveltejs/kit";
import { fail, redirect } from "@sveltejs/kit";
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
    }
    if (existingInstagram) {
      form.errors.instagramUsername = [
        "This Instagram username is already registered.",
      ];
      form.valid = false;
    }

    // form not valid
    if (!form.valid) {
      return fail(400, { form });
    }

    // form valid
    const group = await prisma.group.create({
      data: {
        closed: !form.data.isGroup,
        reason: form.data.reason,
      },
    });
    const user = await prisma.user.create({
      data: {
        name: form.data.name,
        lastName: form.data.lastName,
        email: form.data.email,
        instagramUsername: form.data.instagramUsername,
        dateOfBirth: new Date(form.data.dateOfBirth),
        groupId: group.uuid,
      },
    });
    const updatedGroup = await prisma.group.update({
      where: {
        uuid: group.uuid,
      },
      data: {
        creatorId: user.uuid,
      }
    });
    await prisma.$disconnect();

    // redirect to next page
    if (!form.data.isGroup) {
      throw redirect(303, "/closed-group");
    } else {
      throw redirect(303, "/share-group/" + group.uuid);
    }
    return {
      form,
    };
  },
};
