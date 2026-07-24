import { z } from 'zod'

export const WaitlistFormSchema = z.object({
  email: z
    .string()
    .min(1, 'Email address is required.')
    .email('Please enter a valid email address.')
    .max(254, 'Email address is too long.')
    .transform((val) => val.toLowerCase().trim()),
})

export type WaitlistFormData = z.infer<typeof WaitlistFormSchema>

export const SignupFormSchema = z
  .object({
    name: z
      .string()
      .min(1, 'Full name is required.')
      .min(2, 'Name must be at least 2 characters.')
      .max(100, 'Name is too long.'),
    email: z
      .string()
      .min(1, 'Email address is required.')
      .email('Please enter a valid email address.')
      .max(254, 'Email address is too long.'),
    password: z
      .string()
      .min(1, 'Password is required.')
      .min(8, 'Password must be at least 8 characters.'),
    confirmPassword: z.string().min(1, 'Please confirm your password.'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match.',
    path: ['confirmPassword'],
  })

export type SignupFormData = z.infer<typeof SignupFormSchema>

export const LoginFormSchema = z.object({
  email: z
    .string()
    .min(1, 'Email address is required.')
    .email('Please enter a valid email address.'),
  password: z.string().min(1, 'Password is required.'),
})

export type LoginFormData = z.infer<typeof LoginFormSchema>

export const UpdateProfileSchema = z.object({
  name: z
    .string()
    .min(1, 'Full name is required.')
    .min(2, 'Name must be at least 2 characters.')
    .max(100, 'Name is too long.'),
})

export type UpdateProfileFormData = z.infer<typeof UpdateProfileSchema>

export const ChangePasswordSchema = z
  .object({
    currentPassword: z.string().min(1, 'Current password is required.'),
    newPassword: z
      .string()
      .min(1, 'New password is required.')
      .min(8, 'Password must be at least 8 characters.'),
    confirmPassword: z.string().min(1, 'Please confirm your new password.'),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: 'Passwords do not match.',
    path: ['confirmPassword'],
  })

export type ChangePasswordFormData = z.infer<typeof ChangePasswordSchema>
