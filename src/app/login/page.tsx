import LoginForm from "@/components/forms/LoginForm";
import Link from "next/link";

const LoginPage = () => {
    return (
        <div className="flex items-center justify-center mt-16">
            <div className="flex flex-col items-center gap-8 w-full lg:w-5/12 animate-fade-down shadow-lg border-2 border-gray-100 p-8 rounded-lg">
                {/* HEADER */}
                <h1 className="text-gray-800 font-medium text-2xl lg:text-3xl py-2">
                    Welcom Back
                </h1>
                {/* LOGIN FORM */}
                <LoginForm />
                {/* SIGN UP LINK */}
                <p className="text-center mt-2 text-sm text-neutral-800">
                    Don&apos;t have an account yet?
                    <Link href="/register" className="pl-1 text-primary font-semibold underline">
                        Sign Up
                    </Link>
                </p>
            </div>

        </div>
    );
}

export default LoginPage;