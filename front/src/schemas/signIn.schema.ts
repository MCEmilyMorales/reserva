import { z } from "zod";

export const SigIn = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(6, "La contraseña debe contener 6 o mas caracteres."),
});

export type SigIn = z.infer<typeof SigIn>;
