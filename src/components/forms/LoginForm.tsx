'use client'

import { LoginFormInput, loginFormSchema } from "../../types";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { date } from "zod";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const LoginForm = () => {

    const router = useRouter();
    const [showPassword, setShowPasswoed] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting}
    } = useForm<LoginFormInput>({
        resolver : zodResolver(loginFormSchema)
    })

    const handelLoginForm: SubmitHandler<LoginFormInput> = (date) => {

        console.log('login form date', date)
        console.log('isSubmitting', isSubmitting)
        
        // CALL AUTH FUNCTION HERE

    }
    return(
        <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit(handelLoginForm)}>
            {/* USER NAME  */}
            <div className="flex flex-col gap-1">
                <label htmlFor="userName" className="text-xs text-gray-500">
                    Username
                </label>
                <input 
                    type="text"
                    id="userName"
                    placeholder="John Deo"
                    className="border-b border-gray-200 py-2 px-1 text-sm outline-none focus:border-gray-400 transition-all duration-300"
                    {...register("username")}
                />
                {errors.username && (
                    <p className="text-red-500 text-xs">{errors.username.message}</p>
                )}
            </div>

            {/* PASSWORD  */}
            <div className="flex flex-col gap-1">
                <label htmlFor="password" className="text-xs text-gray-500">
                    Password
                </label>
                <div className="flex items-center justify-between border-b border-gray-200  focus-within:border-gray-400 transition-all duration-300">
                    <input 
                        type={showPassword ? "text" : "password"}
                        id="password"
                        placeholder="********"
                        className=" py-2 px-1 text-sm outline-none w-full"
                        {...register("password")}
                    />
                    <button
                        className="text-gray-600 cursor-pointer"
                        onClick={() => setShowPasswoed((val) => !val)}
                    >
                        {showPassword ? <EyeOff /> : <Eye/>}
                    </button>

                </div>
                {errors.password && (
                    <p className="text-red-500 text-xs">{errors.password.message}</p>
                )}
            </div>
            <button
                type="submit"
                className="w-full bg-gray-800 hover:bg-gray-950 transition-all duration-300 text-white rounded-md cursor-pointer flex items-center justify-center p-2 mt-3"
            >
                Login
            </button>
        </form>
    );
}

export default LoginForm;