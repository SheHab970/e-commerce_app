'use client';

import { ShoppingCart } from "lucide-react"
import Link from "next/link"

const ShoppingCartIcon = () => {
    return (
        <Link href='/cart' className="relative transform duration-300 hover:-translate-y-1">
            <ShoppingCart className="w-4 h-4 text-gray-600"/>
            <span className="absolute -top-3 -right-3 bg-amber-300 text-gray-600 rounded-full w-4 h-4 flex items-center justify-center text-xs font-medium">2</span>
        </Link>
    )
}

export default ShoppingCartIcon;