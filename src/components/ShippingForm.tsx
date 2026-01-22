import { ShippingFormInput, shippingFormSchema } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";

const ShippingForm = ({setShippingForm}:{setShippingForm:(data:ShippingFormInput) => void}) => {

    const {
        register,
        handleSubmit,
        formState:{errors}
    } = useForm<ShippingFormInput>({
        resolver: zodResolver(shippingFormSchema),
    });

    const router = useRouter();

    const handelShippingForm: SubmitHandler<ShippingFormInput> = (data ) => {
        setShippingForm(data);
        router.push('/cart?step=3', {scroll: false})
    }

    return (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(handelShippingForm)}>
            <div className="flex flex-col gap-1">
                <label htmlFor="name" className="text-xs text-gray-500 font-medium">
                    Name
                </label>
                <input 
                    type="text" 
                    id="name" 
                    placeholder="John Deo" 
                    className="border-b border-gray-200 py-2 px-1 text-sm outline-none" 
                    {...register("name")}
                />
                {errors.name && (
                    <p className="text-red-500 text-xs">{errors.name.message}</p>
                )}
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="email" className="text-xs text-gray-500 font-medium">
                    Email
                </label>
                <input 
                    type="email" 
                    id="email" 
                    placeholder="johndoe@gmail.com" 
                    className="border-b border-gray-200 py-2 px-1 text-sm outline-none" 
                    {...register("email")}
                />
                {errors.email && (
                    <p className="text-red-500 text-xs">{errors.email.message}</p>
                )}
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="phone" className="text-xs text-gray-500 font-medium">
                    Phone
                </label>
                <input 
                    type="text" 
                    id="" 
                    placeholder="+20 123456789" 
                    className="border-b border-gray-200 py-2 px-1 text-sm outline-none" 
                    {...register("phone")}
                />
                {errors.phone && (
                    <p className="text-red-500 text-xs">{errors.phone.message}</p>
                )}
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="address" className="text-xs text-gray-500 font-medium">
                    Address
                </label>
                <input 
                    type="text" 
                    id="address" 
                    placeholder="123 Main St, Anytown" 
                    className="border-b border-gray-200 py-2 px-1 text-sm outline-none" 
                    {...register("address")}
                />
                {errors.address && (
                    <p className="text-red-500 text-xs">{errors.address.message}</p>
                )}
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="city" className="text-xs text-gray-500 font-medium">
                    City
                </label>
                <input 
                    type="text" 
                    id="city" 
                    placeholder="Cairo" 
                    className="border-b border-gray-200 py-2 px-1 text-sm outline-none" 
                    {...register("city")}
                />
                {errors.city && (
                    <p className="text-red-500 text-xs">{errors.city.message}</p>
                )}
            </div>
            <button
            className="w-full bg-gray-800 hover:bg-gray-900 transition-all duration-300 text-white rounded-md cursor-pointer flex items-center justify-center p-2 gap-1"
            type="submit"
            >
                Continue
                <ArrowRight className="w-3 h-3" />
            </button>
        </form>
    )
}

export default ShippingForm;