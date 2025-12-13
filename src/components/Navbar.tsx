import Image from "next/image";
import Link from "next/link";
import SearshBar from "./SearshBar";
import { Bell, Home, ShoppingCart } from "lucide-react";

const Navbar = () => {
    return(
        <>
            <nav className="flex items-center justify-between border-b border-gray-200 pb-4">
                {/* LEFT  */}
                <Link href="/" className="flex items-center">
                    <Image 
                        src='/logo.png' 
                        alt="TrendLama" 
                        width={36} 
                        height={36} 
                        className="w-6 h-6 md:w-9 md:h-9"
                    />
                    <p className="hidden md:block text-md font-medium tracking-widest">TRENDLAMA</p>
                </Link>
                {/* RIGHT  */}
                <div className="flex items-center gap-6">
                    <SearshBar />
                    <Link href="/">
                        <Home className=" transform transition-all hover:-translate-y-1 w-4 h-4 text-gray-600"/>
                    </Link>
                    <Link href="/">
                        <Bell className=" transform transition-all hover:-translate-y-1 w-4 h-4 text-gray-600"/>
                    </Link>
                    <Link href="/">
                        <ShoppingCart className=" transform transition-all hover:-translate-y-1 w-4 h-4 text-gray-600"/>
                    </Link>
                    <Link href="/login" className="text-sm transition-all hover:bg-gray-800 px-3 py-1.5 rounded-xl m-0 hover:text-amber-50">Sign in</Link>
                </div>
            </nav>
        </>
    );
}

export default Navbar;