'use server'
import { BaseLayout } from "./components";

export default async function DashboardLayout({
    children
}: {
    children: React.ReactNode;
}) {

    return (
        <BaseLayout>
            {children}
        </BaseLayout>
    );
}