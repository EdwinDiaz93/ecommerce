'use server'

import { signIn } from "@/auth"

export async function mailSigin(email: string) {
    await signIn('nodemailer', { email, redirectTo: "/dashboard" })
}

export async function googleSigin() {
    await signIn('google', { redirectTo: "/dashboard" })
}