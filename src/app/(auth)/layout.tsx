'use server'
export default async function AuthLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <div className="h-screen w-screen flex flex-row justify-center items-center">
      {children}
    </div>
  );
}