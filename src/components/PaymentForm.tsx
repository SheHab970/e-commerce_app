import { PaymentFormInput, paymentFormSchema } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import Image from "next/image";

const PaymentForm = () => {

    const {
        register,
        handleSubmit,
        formState:{errors}
    } = useForm<PaymentFormInput>({
        resolver: zodResolver(paymentFormSchema),
    });

    const router = useRouter();

    const handelPaymentForm: SubmitHandler<PaymentFormInput> = (data ) => {

    }

    return (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(handelPaymentForm)}>
            <div className="flex flex-col gap-1">
                <label htmlFor="cardHolder" className="text-xs text-gray-500 font-medium">
                    Name on card
                </label>
                <input 
                    type="text" 
                    id="cardHolder" 
                    placeholder="John Deo" 
                    className="border-b border-gray-200 py-2 px-1 text-sm outline-none" 
                    {...register("cardHolder")}
                />
                {errors.cardHolder && (
                    <p className="text-red-500 text-xs">{errors.cardHolder.message}</p>
                )}
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="cardNumber" className="text-xs text-gray-500 font-medium">
                    Card Number
                </label>
                <input 
                    type="text" 
                    id="cardNumber" 
                    placeholder="1234 5678 9012 3456"
                    className="border-b border-gray-200 py-2 px-1 text-sm outline-none" 
                    {...register("cardNumber")}
                />
                {errors.cardNumber && (
                    <p className="text-red-500 text-xs">{errors.cardNumber.message}</p>
                )}
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="expirationDate" className="text-xs text-gray-500 font-medium">
                    Expiration Date
                </label>
                <input 
                    type="text" 
                    id="expirationDate" 
                    placeholder="MM/YY" 
                    className="border-b border-gray-200 py-2 px-1 text-sm outline-none" 
                    {...register("expirationDate")}
                />
                {errors.expirationDate && (
                    <p className="text-red-500 text-xs">{errors.expirationDate.message}</p>
                )}
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="cvv" className="text-xs text-gray-500 font-medium">
                    CVV
                </label>
                <input 
                    type="text" 
                    id="cvv" 
                    placeholder="123" 
                    className="border-b border-gray-200 py-2 px-1 text-sm outline-none" 
                    {...register("cvv")}
                />
                {errors.cvv && (
                    <p className="text-red-500 text-xs">{errors.cvv.message}</p>
                )}
            </div>
            <div className="flex items-center gap-2 mt-4">
                <Image src="/klarna.png" alt="Klarna" width={50} height={25} className="rounded-md"/>
                <Image src="/cards.png" alt="Cards" width={50} height={25} className="rounded-md"/>
                <Image src="/stripe.png" alt="Stripe" width={50} height={25} className="rounded-md"/>
            </div>
            <button
            className="w-full bg-gray-800 hover:bg-gray-900 transition-all duration-300 text-white rounded-md cursor-pointer flex items-center justify-center p-2 gap-1"
            type="submit"
            >
                Checkout
                <ShoppingCart className="w-3 h-3" />
            </button>
        </form>
    )
}


export default PaymentForm;