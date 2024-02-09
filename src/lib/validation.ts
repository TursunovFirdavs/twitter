import * as z from 'zod'

export const REgisterStep1Schema = z.object({
    email: z.string().min(6),
    name: z.string().min(3)
})

export const REgisterStep2Schema = z.object({
    password: z.string().min(6),
    username: z.string().min(3)
})

export const loginSchema = z.object({
    password: z.string().min(6),
    email: z.string().email()
})