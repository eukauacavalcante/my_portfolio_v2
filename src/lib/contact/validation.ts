import { z } from "zod";

export const CONTACT_REASONS = [
  "Freelance/Projeto",
  "Dúvida",
  "Outro",
] as const;

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Nome deve ter ao menos 2 caracteres.")
    .max(50, "Nome muito longo.")
    .regex(/^[\p{L}\s'-]+$/u, "Nome contém caracteres inválidos."),

  lastName: z
    .string()
    .min(2, "Sobrenome deve ter ao menos 2 caracteres.")
    .max(50, "Sobrenome muito longo.")
    .regex(/^[\p{L}\s'-]+$/u, "Sobrenome contém caracteres inválidos."),

  email: z
    .string()
    .check(z.email("Email inválido."))
    .max(100, "Email muito longo."),

  message: z
    .string()
    .min(20, "Mensagem deve ter ao menos 20 caracteres.")
    .max(2000, "Mensagem não pode ultrapassar 2000 caracteres."),

  reason: z
    .array(z.enum(CONTACT_REASONS))
    .length(1, "Selecione um motivo."),

  // honeypot -> it should come empty. Bots usually fill it in.
  _trap: z.string().max(0, "Bot detectado.").optional(),
});

export type ContactPayload = z.infer<typeof contactSchema>;
