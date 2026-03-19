import type { APIRoute } from "astro";
import { contactSchema } from "../../lib/contact/validation";
import { sendContactEmail } from "../../lib/contact/mailer";
import { rateLimiter } from "../../lib/contact/ratelimit";

export const POST: APIRoute = async ({ request, clientAddress }) => {
  const json = (body: object, status = 200) =>
    new Response(JSON.stringify(body), {
      status,
      headers: { "Content-Type": "application/json" },
    });

  // ── ratelimit ──────────────────────────────────────────
  if (!clientAddress) {
    return json({ error: "Não foi possível identificar o cliente." }, 400);
  }
  const { success } = await rateLimiter.limit(clientAddress);
  if (!success) {
    return json({ error: "Muitas tentativas. Aguarde alguns minutos." }, 429);
  }

  // ── body parse ────────────────────────────────────────
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return json({ error: "Payload inválido." }, 400);
  }

  // ── zod validation ────────────────────────────────────
  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    const errors = parsed.error.issues.reduce((acc, issue) => {
      const key = issue.path[0] as string;
      if (!acc[key]) acc[key] = [];
      acc[key].push(issue.message);
      return acc;
    }, {} as Record<string, string[]>);
    return json({ errors }, 422);
  }

  // ── honeypot ─────────────────────────────────────────────
  if (parsed.data._trap) {
    // return 200 OK to avoid revealing that the bot has been blocked.
    return json({ ok: true });
  }

  // ── send ────────────────────────────────────────────────
  try {
    await sendContactEmail(parsed.data);
    return json({ ok: true });
  } catch (err) {
    console.error("[contact] Falha ao enviar email:", err);
    return json({ error: "Erro ao enviar. Tente novamente mais tarde." }, 500);
  }
};
