import RegisterForm from "@/components/forms/RegisterForm";
import Link from "next/link";

const RegisterPage = () => {
    return (
        <div className="flex items-center justify-center mt-16">
            <div className="flex flex-col items-center gap-8 w-full lg:w-5/12 animate-fade-down shadow-lg border-2 border-gray-100 p-8 rounded-lg">
                {/* HEADER */}
                <h1 className="text-gray-800 font-medium text-2xl lg:text-3xl py-2">
                    Welcom In <span className="font-bold text-amber-400 tracking-widest">Zyto</span>
                </h1>
                {/* LOGIN FORM */}
                <RegisterForm />
                {/* SIGN UP LINK */}
                <p className="text-center mt-2 text-sm text-neutral-800">
                    Already have an account?
                    <Link href="/login" className="pl-1 text-primary font-semibold underline">
                        Login
                    </Link>
                </p>
            </div>

        </div>
    );
}

export default RegisterPage;