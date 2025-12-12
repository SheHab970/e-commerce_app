import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return(
        <footer className="mt-16 bg-gray-800 flex flex-col gap-8 md:flex-row md:items-start md:gap-0 items-center justify-between p-8 rounded-xl">
            <div className="flex flex-col gap-4 items-center md:items-start">
                <Link href="/" className="flex items-center">
                    <Image 
                        src='/logo.png' 
                        alt="TrendLama" 
                        width={36} 
                        height={36} 
                        className="w-6 h-6 md:w-9 md:h-9"
                    />
                    <p className="hidden md:block text-md font-medium tracking-widest text-white">TERENDLAMA</p>
                </Link>
                <p className="text-sm text-gray-400 ">© 2026 Trendlama</p>
                <p className="text-sm text-gray-400 ">All right reserved</p>
            </div>
            <div className="flex flex-col items-center gap-4 text-sm text-gray-400 md:items-start">
                <h1 className="text-amber-50 text-sm">Links</h1>
                <Link href="/">HomePage</Link>
                <Link href="/">Contact</Link>
                <Link href="/">Terms of Service</Link>
                <Link href="/">Privacy Policy</Link>
            </div>
            <div className="flex flex-col items-center gap-4 text-sm text-gray-400 md:items-start">
                <h1 className="text-amber-50 text-sm">Products</h1>
                <Link href="/">All Products</Link>
                <Link href="/">New Arrivals</Link>
                <Link href="/">Best Sellers</Link>
                <Link href="/">Sale</Link>
            </div>
            <div className="flex flex-col items-center gap-4 text-sm text-gray-400 md:items-start">
                <h1 className="text-amber-50 text-sm">Company</h1>
                <Link href="/">About</Link>
                <Link href="/">Contact</Link>
                <Link href="/">Blog</Link>
                <Link href="/">Affiliate Program</Link>
            </div>
        </footer>
    );
}

export default Footer;