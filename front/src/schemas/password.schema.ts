import { z } from "zod";

export const PasswordForm = z
  .object({
    password: z.string(),
    confirmo: z.string(),
  })
  .refine((data) => data.password === data.confirmo, {
    message: "Las contraseñas no coinciden",
    path: ["confirmo"],
  });

// Tipo TypeScript generado automáticamente

export type EntradaPassword = z.infer<typeof PasswordForm>;
