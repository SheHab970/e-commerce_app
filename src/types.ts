import z from "zod";

export type ProductType ={
    id: string | number;
    name: string;
    shortDescription: string;
    description: string;
    price: number;
    sizes: string[];
    colors: string[];
    images: { [key: string]: string}
}

export type ProductsType = ProductType[];

export type CartItemType = ProductType & {
    quantity: number;
    selectedSize: string;
    selectedColor: string;
}

export type CartItemsType = CartItemType[];

export const shippingFormSchema = z.object({
    name: z.string().min(1, 'Name is required!'),
    email: z.email().min(1, 'Email is required!'),
    phone: z
        .string()
        .min(7, 'Phone number must be at least 7 digits!')
        .max(11, 'Phone number must be at most 11 digits!')
        .regex(/^[0-9]+$/, 'Phone number must contain only digits!'),
    address: z.string().min(1, 'Address is required!'),
    city: z.string().min(1, 'City is required!'),
})

export type ShippingFormInput = z.infer<typeof shippingFormSchema>;

export const paymentFormSchema = z.object({
    cardHolder: z.string().min(1, 'Card holder is required!'),
    cardNumber: z.string().min(16, 'Card number is required!').max(16, 'Card number is required!'),
    expirationDate: z
        .string()
        .regex(/^(0[1-9]|1[0-2])\/([0-9]{2})$/, 'Expiration date must be in MM/YY format!'),
    cvv: z.string().min(3, 'CVV is required!').max(3, 'CVV is required!'),
})

export type PaymentFormInput = z.infer<typeof paymentFormSchema>;