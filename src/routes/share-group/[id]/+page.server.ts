import type { ServerLoad, Actions } from "@sveltejs/kit";
import { error } from "@sveltejs/kit";
import { PrismaClient } from "@prisma/client";

export const load: ServerLoad = async ({ params }) => {
    const prisma = new PrismaClient();
    const group = await prisma.group.findFirst({
        where: {
            uuid: params.id
        },
        include: {
            users: true,
            createdBy: true
        }
    });
    if (group) {
        return {
            creator: group.createdBy?.name + ' ' + group.createdBy?.lastName,
            id: group.uuid,
            filled: group.users.length,
        };
    }
    error(404, 'Not found');
};