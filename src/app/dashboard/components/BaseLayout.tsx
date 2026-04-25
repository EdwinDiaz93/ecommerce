'use client'

import { Menu } from '@/types';
import Link from 'next/link';
import React, { useState } from 'react'

type Props = {
    children: React.ReactNode
}

export const BaseLayout = ({ children }: Props) => {
    const [open, setOpen] = useState(false);

    const menuItems: Menu[] = [
        {
            label: 'Home',
            route: '/dashboard/main',
            svg: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>

        },
        {
            label: 'Bradns',
            route: '/dashboard/brands',
            svg: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
            </svg>

        }
    ];

    return (
        <div className="h-screen flex bg-neutral-primary-soft overflow-hidden">

            {/* OVERLAY (mobile) */}
            {open && (
                <div
                    className="fixed inset-0 bg-black/40 z-30 sm:hidden"
                    onClick={() => setOpen(false)}
                />
            )}

            {/* SIDEBAR */}
            <aside
                className={`
                    fixed sm:static z-40 top-0 left-0 h-full w-64
                    bg-neutral-primary-soft border-r border-slate-200 p-4
                    transform transition-transform duration-300
                    ${open ? "translate-x-0" : "-translate-x-full"}
                    sm:translate-x-0
                `}
            >
                <div className='flex flex-row text-lg'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>

                    <span className="font-semibold  ml-4">
                        Clothing Ecommerce
                    </span>
                </div>


                <ul className="space-y-2 mt-5">
                    {menuItems.map((item) => (
                        <li key={item.route}>
                            <Link
                                href={item.route}
                                className="flex items-center gap-2 px-3 py-2 rounded hover:bg-neutral-tertiary"
                            >
                                {item.svg}
                                <span>{item.label}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </aside>

            {/* RIGHT SIDE */}
            <div className="flex flex-col flex-1">

                {/* TOPBAR */}
                <nav className="border-b border-slate-200 px-4 py-3 flex justify-between items-center">

                    {/* LEFT SIDE */}
                    <div className="flex items-center gap-3">

                        {/* HAMBURGER (solo mobile) */}
                        <button
                            onClick={() => setOpen(!open)}
                            className="sm:hidden p-2 rounded hover:bg-neutral-tertiary"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>

                        <span className="font-medium cursor-pointer">
                            Ecommerce Admin
                        </span>
                    </div>

                    {/* USER */}
                    <img
                        className="w-8 h-8 rounded-full"
                        src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                        alt="user"
                    />
                </nav>

                {/* MAIN */}
                <main className="flex-1 overflow-y-auto p-4">
                    {children}
                </main>

            </div>
        </div>)
}

