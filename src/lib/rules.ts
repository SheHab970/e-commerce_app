import z from "zod";

export const registerFormSchema = z.object({
    email: z
        .string()
        .min(1, 'Email is required!')
        .email('Please enter a valid email address!')
        .trim(),
    username: z
        .string()
        .min(1, 'Username is required!')
        .min(3, 'Username must be at least 3 characters!')
        .max(20, 'Username must be at most 20 characters!')
        .trim(),
    password: z
        .string()
        .min(1, 'Password is required!')
        .min(6, 'Password must be at least 6 characters!')
        .regex(/[a-zA-Z]/, 'Password must contain at least one letter!')
        .regex(/[0-9]/, 'Password must contain at least one number!')
        .regex(/[^a-zA-Z0-9]/, 'Password must contain at least one special character!')
        .trim(),
    confirmPassword: z
        .string()
        .min(1, 'Please confirm your password!')
        .trim(),
}).refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match!',
    path: ["confirmPassword"],
})

export type RegisterFormInput = z.infer<typeof registerFormSchema>;