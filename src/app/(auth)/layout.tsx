'use server'

import Image from "next/image";

export default async function AuthLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen relative w-screen flex flex-row justify-center items-center">

      <Image
        src="/assets/store.jpg"
        alt="Store background"
        fill
        className="object-cover -z-10" // Se envía al fondo
        priority // Carga la imagen más rápido
      />

      <div>
        {children}
      </div>

    </div>
  );
}