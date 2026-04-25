'use client'

import { useRouter } from "next/navigation"



export const VerifyCard = () => {
    const router=useRouter();
    return (
        <div className="bg-white shadow-2xl w-120 h-75 rounded-lg flex flex-col justify-center items-center p-5">
            <h1 className="text-2xl font-bold">Please verify your email</h1>
            <p className="font-light mt-5 text-center">To keep things secure and make sure your account is protected. Please verify your email</p>
            <button onClick={()=>router.replace('/login')} className="p-2 w-1/2 bg-indigo-500 text-white mt-5 rounded-full">
                Return to login
            </button>
        </div>
    )
}
