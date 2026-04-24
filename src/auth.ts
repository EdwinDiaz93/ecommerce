import NextAuth from "next-auth"

import { PrismaAdapter } from '@auth/prisma-adapter';
import Nodemailer from "next-auth/providers/nodemailer";
import Google from "next-auth/providers/google";
import { PrismaClient } from "./generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";






const pool = new Pool({ connectionString: process.env.DATABASE_URL })
const dbAdapter = new PrismaPg(pool)


const prisma = new PrismaClient({ adapter: dbAdapter })


export const { handlers, auth, signIn, signOut } = NextAuth({

    adapter: PrismaAdapter(prisma),
    secret: process.env.AUTH_SECRET,
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60, // 30 days in seconds (this value is also the default)
    },
    pages: {
        signIn: '/login'
    },
    providers: [
        Nodemailer({
            server: {
                host: process.env.EMAIL_SERVER_HOST,
                port: parseInt(process.env.EMAIL_SERVER_PORT!, 10),
                auth: {
                    user: process.env.EMAIL_SERVER_USER,
                    pass: process.env.EMAIL_SERVER_PASSWORD,
                },
            },
            from: process.env.EMAIL_FROM,
        }),
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            allowDangerousEmailAccountLinking: true, // Allow
        })
    ],
    callbacks: {
        async jwt({ token, user, session, trigger }) {


            if (trigger === "update" && session?.name !== token.name) {
                token.name = session.name;

                try {

                } catch (error) {
                    console.error("Failed to set user name:", error);
                }
            }

            if (user) {

                return {
                    ...token,
                    id: user.id,
                };
            }
            return token;
        },
        async session({ session, token }) {
            console.log("session callback", { session, token });
            return {
                ...session,
                user: {
                    ...session.user,
                    id: token.id as string,
                },
            };
        },
    },

})