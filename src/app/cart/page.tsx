import Cart from "@/components/Cart";
import { Suspense } from "react";

const CartPage = () => {

    return (
        <div className="">
            <Suspense fallback={<div className="mt-12 text-center">Loading cart...</div>}>
                <Cart />
            </Suspense>
        </div>
    )
}

export default CartPage;