// for example, we can create a userValidation.ts file and define all the validation schema for user related operations

import { z } from "zod";

const registerValidationSchema = z
  .object({
    userName: z.string().min(3).max(255),
    email: z.string().email(),
    password: z.string().min(8).max(255),
    confirmPassword: z.string().min(8).max(255),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password and confirm password should be same",
    path: ["confirmPassword"],
  });

// export validation schema
export const userValidationSchema = {
  registerValidationSchema,
};
