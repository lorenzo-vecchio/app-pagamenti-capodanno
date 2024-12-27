import { renderMJML, EmailTemplate } from "$lib/services/mjmlRenderer";
import type { RequestHandler } from "@sveltejs/kit";


export const GET: RequestHandler = async ({ request }) => {
    const variables = {
        firstName: 'Johnny',
        uuid: 'testjfdlf-fgfgsfdd-gfdsgd-gfsgds'
    }

    try {
        const html = renderMJML(EmailTemplate.ConfirmationSingle, variables);
        return new Response(html, {
            headers: {
                'Content-Type': 'text/html',
            },
        });
    } catch (err) {
        return new Response((err as Error).message, { status: 500 });
    }
};