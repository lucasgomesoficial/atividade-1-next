import { z } from "zod";

const msgErrors = {
  invalid_type_error: "Este campo é inválido",
  required_error: "Este campo é obrigatório",
};

export const formSchema = z.object({
  name: z.string(msgErrors).min(3, "O nome deve ter pelo menos 3 caracteres"),
  birthdate: z.date(msgErrors).refine((value) => {
    if (value) {
      const currentDate = new Date();
      const birthdate = new Date(value);
      return birthdate <= currentDate;
    }
    return true;
  }, "Data de nascimento inválida"),
  username: z
    .string(msgErrors)
    .min(3, "O nome de usuário deve ter pelo menos 3 caracteres"),
  email: z.string(msgErrors).email("E-mail inválido"),
  bio: z.string(msgErrors).min(10, "A bio deve ter pelo menos 10 caracteres"),
});
