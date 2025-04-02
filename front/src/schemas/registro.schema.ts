import { z } from "zod";
import { PasswordForm } from "./password.schema";

export const Registro = z
  .object({
    name: z
      .string()
      .min(3, "El nombre debe contener al menos 3 caracteres.")
      .max(50, "El nombre no debe contener mas de 50 caracteres.")
      .refine((valor) => !/^\d/.test(valor), {
        message: "El nombre no debe comenzar con un numero.",
      }),
    email: z
      .string()
      .email({ message: "Dirección de correo electrónico inválida" }),
    birthdate: z.string().date(),
    nDni: z.union([z.number(), z.string()]),
    username: z.string(),
  })
  .extend({ PasswordForm });
// Tipo TypeScript generado automáticamente
export type UsuarioNuevo = z.infer<typeof Registro>;
