'use client'

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { redirect, useRouter } from "next/navigation";
import { date } from "zod";
import { useState } from "react";
import { Eye, EyeOff, UserCircle2Icon } from "lucide-react";
import { RegisterFormInput, registerFormSchema } from "@/lib/rules";

const RegisterForm = () => {

    const router = useRouter();
    const [showPassword, setShowPasswoed] = useState(false);

    const [showConfirmPassword, setConfirmPasswoed] = useState(false);
    
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting}
    } = useForm<RegisterFormInput>({
        resolver : zodResolver(registerFormSchema)
    })

    const handelRegisterForm: SubmitHandler<RegisterFormInput> = (date) => {

        console.log('Register form date', date)
        console.log('isSubmitting', isSubmitting)
        
        // CALL AUTH FUNCTION HERE
        redirect("/login")

    }
    return(
        <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit(handelRegisterForm)}>
            {/* USER NAME  */}
            <div className="flex flex-col gap-1">
                <label htmlFor="userName" className="text-xs flex items-center gap-1 text-gray-500">
                    {/* <UserCircle2Icon className="w-4 h-4"/> */}
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

            {/* EMAIL  */}
            <div className="flex flex-col gap-1">
                <label htmlFor="email" className="text-xs text-gray-500">
                    Email
                </label>
                <input 
                    type="email"
                    id="email"
                    placeholder="Johndeo@gmail.com"
                    className="border-b border-gray-200 py-2 px-1 text-sm outline-none focus:border-gray-400 transition-all duration-300"
                    {...register("email")}
                />
                {errors.email && (
                    <p className="text-red-500 text-xs">{errors.email.message}</p>
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

            {/* CONFIRM PASSWORD  */}
            <div className="flex flex-col gap-1">
                <label htmlFor="confirmPassword" className="text-xs text-gray-500">
                    Confirm Password
                </label>
                <div className="flex items-center justify-between border-b border-gray-200  focus-within:border-gray-400 transition-all duration-300">
                    <input 
                        type={showConfirmPassword ? "text" : "password"}
                        id="confirmPassword"
                        placeholder="********"
                        className=" py-2 px-1 text-sm outline-none w-full"
                        {...register("confirmPassword")}
                    />
                    <button
                        className="text-gray-600 cursor-pointer"
                        onClick={() => setConfirmPasswoed((val) => !val)}
                    >
                        {showConfirmPassword ? <EyeOff /> : <Eye/>}
                    </button>

                </div>
                {errors.confirmPassword && (
                    <p className="text-red-500 text-xs">{errors.confirmPassword.message}</p>
                )}
            </div>

            {/* SUBMIT BUTTON  */}
            <button
                type="submit"
                className="w-full bg-gray-800 hover:bg-gray-950 transition-all duration-300 text-white rounded-md cursor-pointer flex items-center justify-center p-2 mt-3"
            >
                Sign Up
            </button>
        </form>
    );
}

export default RegisterForm;