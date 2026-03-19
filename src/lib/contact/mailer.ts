import { Resend } from "resend";
import type { ContactPayload } from "./validation";
import { buildContactEmailHtml } from "./email-template";

export async function sendContactEmail(data: ContactPayload) {
  const RESEND_API_KEY = import.meta.env.RESEND_API_KEY;
  const CONTACT_TO = import.meta.env.CONTACT_TO;
  const CONTACT_FROM = import.meta.env.CONTACT_FROM;

  if (!RESEND_API_KEY || !CONTACT_TO || !CONTACT_FROM) {
    throw new Error("Variáveis de ambiente do mailer não configuradas.");
  }

  const resend = new Resend(RESEND_API_KEY);

  const { error } = await resend.emails.send({
    from: CONTACT_FROM,
    to: CONTACT_TO,
    replyTo: data.email,
    subject: `[Contato Portfólio] ${data.reason[0] ?? "Outro"} — ${data.name} ${data.lastName}`,
    html: buildContactEmailHtml(data),
  });

  if (error) {
    throw new Error(`Resend error: ${error.message}`);
  }
}
