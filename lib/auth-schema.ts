import { z } from "zod";

export const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be atleast 2 characters long" })
    .max(50, { message: "Name cant exceed 50 charachters" }),
  email: z
    .string()
    .email({ message: "please enter valid email" })
    .min(2)
    .max(50),
  password: z
    .string()
    .min(8, { message: "password must be atleast 2 characters long" })
    .max(50, { message: "password cant exceed 50 charachters" }),
});

export const signInFormSchema = formSchema.pick({
  email: true,
  password: true,
});
