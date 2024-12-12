import { json } from "@sveltejs/kit";
import type { RequestHandler } from "@sveltejs/kit";
import { PrismaClient } from "@prisma/client";

export const POST: RequestHandler = async ({ request }) => {
  const { UUID } = await request.json();
  const prisma = new PrismaClient();
  const group = await prisma.group.update({
    where: {
      uuid: UUID,
    },
    data: {
      closed: true,
    },
  });
  return json(group);
};
