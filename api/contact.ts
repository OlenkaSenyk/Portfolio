import { Resend } from "resend";
import * as process from "node:process";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();

        const data = await resend.emails.send({
            from: "Portfolio <onboarding@resend.dev>",
            to: "olena.senyk16@gmail.com",
            subject: "Message from Portfolio website",
            replyTo: email,
            html: `
                <div style="padding: 20px; background: #f9f9f9;">
                    <div style="max-width: 500px; margin: auto; background: white; padding: 20px; border-radius: 10px;">
                        <h2 style="margin-bottom: 10px;">📩 New Message</h2>
                        <p><strong>Name:</strong> ${name}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <div style="margin-top: 20px;">
                            <p><strong>Message:</strong></p>
                            <p style="background: #f1f1f1; padding: 10px; border-radius: 5px;">
                                ${message}
                            </p>
                        </div>
                        <hr style="margin: 20px 0;" />
                        <p style="font-size: 12px; color: gray;">
                            Sent from portfolio website 🚀
                        </p>
                    </div>
                </div>
            `,
        });
        return Response.json({ success: true, data });
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}