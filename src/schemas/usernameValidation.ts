import { z } from "zod";

export const UsernameValidation = z
    .string()
    .min(2, "Username must be atleast 2 characters long")
    .max(20, "Username must be no more 20 characters")
    .regex(/^[a-zA-Z0-9_]+$/);
