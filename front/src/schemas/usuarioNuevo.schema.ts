import { z } from "zod";

export const UsuarioNuevo = z
  .object({
    name: z
      .string()
      .min(3, "El nombre debe contener al menos 3 caracteres.")
      .max(50, "El nombre no debe contener mas de 50 caracteres.")
      .refine((valor) => !/^\d/.test(valor), {
        message: "El nombre no debe comenzar con un número.",
      }),
    email: z
      .string()
      .email({ message: "Dirección de correo electrónico inválida" }),
    birthdate: z.string().date(),
    nDni: z.union([
      z
        .string()
        .regex(/^\d+$/, "Debe ser solo números.")
        .min(7, "Debe contener como mínimo 7 o mas números."),
      z.number(),
    ]),
    username: z.string(),
    password: z
      .string()
      .min(6, "La contraseña debe contener 6 o mas caracteres."),
    confirmo: z.string(),
  })
  .superRefine((dato, ctx) => {
    if (dato.password !== dato.confirmo) {
      ctx.addIssue({
        path: ["confirmo"],
        message: "Las contraseñas no coinciden",
        code: z.ZodIssueCode.custom,
      });
    }
  });
// Tipo TypeScript generado automáticamente
export type UsuarioNuevo = z.infer<typeof UsuarioNuevo>;
