import Image from "next/image";
import Link from "next/link";
import SearshBar from "./SearshBar";
import { Bell, Home, ShoppingCart, User2 } from "lucide-react";
import ShoppingCartIcon from "./ShoppingCartIcon";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Button } from "./ui/button";

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
                    {/* SEARCH COMPONENT  */}
                    <SearshBar />
                    {/* ICONS  */}
                    <div className="flex gap-6 items-center border-e border-gray-500 pr-8">
                        <Link href="/">
                            <Home className=" transform duration-300 hover:-translate-y-1 w-4 h-4 text-gray-600"/>
                        </Link>
                        <Link href="/">
                            <Bell className=" transform duration-300 hover:-translate-y-1 w-4 h-4 text-gray-600"/>
                        </Link>
                        <ShoppingCartIcon />
                    </div>
                    {/* USER ICON */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="secondary" size="sm" className=" cursor-pointer outline-none">
                                <User2 className="text-gray-600" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                                 <Link href="/login" className="w-full">Login</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                 <Link href="/register" className="w-full">Sign In</Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    {/* <Link href="/login" className="text-sm duration-200 hover:bg-gray-800 px-3 py-1.5 rounded-xl m-0 hover:text-amber-50">Sign in</Link> */}
                </div>
            </nav>
        </>
    );
}

export default Navbar;