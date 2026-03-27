import { Resend } from "resend";
import * as process from "node:process";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();

        const data = await resend.emails.send({
            from: email,
            to: "olena.senyk16@gmail.com",
            subject: "Message from Portfolio website",
            text: `
            Name: ${name}\n
            Email: ${email}\n\n
            Message: ${message}
            `,
        });
        return Response.json({ success: true, data });
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}