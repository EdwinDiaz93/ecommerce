'use server'

import { signIn } from "@/auth"

export async function mailSigin(email: string) {
    await signIn('nodemailer', { email, callbackUrl: "/dashboard" })
}

export async function googleSigin() {
    await signIn('google', { redirectTo: "/dashboard" })
}