import { z } from "zod";
import { UsernameValidation } from "./usernameValidation";

export const SignupSchema = z.object({
    username: UsernameValidation,
    email: z.string().email({ message: "Invalid email address!" }),
    password: z.string().min(8, { message: "Passwords must be at least 8 characters!" }),
});
