// for example, we can create a userValidation.ts file and define all the validation schema for user related operations

import { z } from "zod";

const registerValidationSchema = z
  .object({
    name: z.string().min(3).max(255),
    email: z.string().email(),
    password: z.string().min(6).max(255),
    confirmPassword: z.string().min(6).max(255),
  })
  .refine(
    (data) => {
      return data.password === data.confirmPassword;
    },
    {
      message: "Password does not match",
      path: ["confirmPassword"],
    }
  );

const loginValidationSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
    })
    .email(),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" })
    .max(255),
});

// export validation schema
export const userValidationSchema = {
  registerValidationSchema,
  loginValidationSchema,
};
