'use client'
import { googleSigin, mailSigin } from '@/actions';
import { LoginRequest } from '@/types';
import { useForm } from 'react-hook-form'


export const LoginForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<LoginRequest>({ defaultValues: { email: '' } });

    const onSubmit = async (request: LoginRequest) => {
        await mailSigin(request.email);
    }
    const googleSignin = async () => {
        await googleSigin();
    }


    return (
        <div className="bg-white text-gray-500 w-100 mx-4 md:p-6 p-4 text-left text-sm rounded-xl shadow-[0px_0px_10px_0px] shadow-black/10 flex flex-col items-center">
            <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-20">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>

            </h2>
            <form autoComplete='off' onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-full'>

                <input
                    {...register('email', {
                        required: {
                            value: true,
                            message: 'The email field is required'
                        },
                        pattern: {
                            value: /([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})/,
                            message: 'email must be valid'
                        }
                    })}
                    className="w-full bg-transparent border my-3 border-gray-500/30 outline-none rounded-full py-2.5 px-4"
                    placeholder="Enter your email"
                />
                <span className='text-red-600 font-bold text-center w-full mb-3'>{errors.email?.message}</span>
                <button type="submit" className="w-full mb-3 bg-indigo-500 py-2.5 rounded-full text-white">Log in</button>
            </form>
            <button onClick={googleSignin} type="button" className="w-full flex items-center gap-2 justify-center my-3 bg-white border border-gray-500/30 py-2.5 rounded-full text-gray-800">
                <img className="h-4 w-4" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/googleFavicon.png" alt="googleFavicon" />
                Log in with Google
            </button>
        </div>
    )
}
