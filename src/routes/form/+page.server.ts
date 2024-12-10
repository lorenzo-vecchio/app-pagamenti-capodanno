import type { ServerLoad } from "@sveltejs/kit";
import { superValidate } from "sveltekit-superforms";
import { formSchema } from "./settings/schema";
import { zod } from "sveltekit-superforms/adapters";

export const load: ServerLoad = async () => {
  return {
    form: await superValidate(zod(formSchema)),
  };
};
