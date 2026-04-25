'use server'
import { Metadata } from "next";
import { LoginForm } from "../components";

export async function generateMetadata(): Promise<Metadata> {
    return { title: 'verify account', description: 'verify account' }
}


export default async function LoginPage() {
    return (
        <div className="w-full" >
            <LoginForm />
        </div>
    );
}