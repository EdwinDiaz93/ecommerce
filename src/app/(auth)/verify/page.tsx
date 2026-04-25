'use server'
import { VerifyCard } from "../components";
import type { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
    return { title: 'verify account', description: 'verify account' }
}

export default async function VerifyPage() {
    return (
        <>
            <VerifyCard />
        </>
    );
}