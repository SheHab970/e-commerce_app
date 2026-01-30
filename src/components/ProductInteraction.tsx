"use client"

import { ProductType } from "@/types";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const ProductInteraction = ({
  product,
  selectedColor,
  selectedSize,
}: {
  product: ProductType;
  selectedColor: string;
  selectedSize: string;
}) => {

    const router = useRouter();
    const pathName = usePathname();
    const searchParams = useSearchParams();
    const [quantity, setQuantity] = useState(1);

    const handelTypeChange = ( type : string , value : string) => {

        const params = new URLSearchParams(searchParams.toString())
        params.set(type, value)
        router.push(`${pathName}?${params.toString()}` , {scroll: false})

    }

    const handelQuantityChange = ( type : 'increment' | 'decrement') => {
        if(type === 'increment'){
            setQuantity((prev) => prev +1 )
        }else{
            if(quantity > 1){
                setQuantity((prev) => prev - 1)
            }
        }
    }

  return (
    <div className="flex flex-col gap-4 mt-4">

      {/* SIZE  */}
      <div className="flex flex-col gap-2 text-sm">
        <span className="text-gray-500">Size</span>
        <div className="flex items-center gap-2">
          {product.sizes.map((size) => (
            <div
              className={`cursor-pointer border-2 ${selectedSize === size ? "border-gray-600" : "border-gray-300"} rounded-md p-0.5`}
              key={size}
              onClick={() => handelTypeChange("size" , size)}
            >
              <div
                className={`w-7 h-7 flex items-center justify-center rounded-md ${selectedSize === size ? "bg-gray-800 text-white" : "bg-white text-black"}`}
              >
                {size.toUpperCase()}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* COLOR  */}
      <div className="flex flex-col gap-2 text-sm">
        <span className="text-gray-500">Color</span>
        <div className="flex items-center gap-2">
          {product.colors.map((color) => (
            <div
              className={`cursor-pointer border-2 ${selectedColor === color ? "border-gray-600" : "border-gray-300"} rounded-full p-0.5`}
              key={color}
              onClick={() => handelTypeChange("color" , color)}
            >
              <div
                className={`w-7 h-7 rounded-full`} style={{backgroundColor: color}}/>

            </div>
          ))}
        </div>
      </div>

      {/* QUANTITY  */}
      <div className="flex flex-col gap-2 text-sm">
        <span className="text-gray-500">Quantity</span>
        <div className="flex items-center gap-4">
            <button className="cursor-pointer border-2 border-gray-300 p-1" onClick={() => handelQuantityChange("decrement")}>
                <Minus className="w-4 h-4 "/>
            </button>
            <span>{quantity}</span>
            <button className="cursor-pointer border-2 border-gray-300 p-1" onClick={() => handelQuantityChange("increment")}>
                <Plus className="w-4 h-4 "/>
            </button>
        </div>
      </div>

      {/* BUTTONS */}
      <div className="mt-4 flex flex-col gap-3">
        <button className="bg-gray-800 text-white px-4 py-2 rounded-md flex items-center justify-center gap-2 cursor-pointer hover:bg-gray-950 transition-all duration-300 text-sm font-medium w-full">
            <Plus className="w-4 h-4"/>
            Add to Cart
        </button>
        <button className="ring-1 ring-gray-500 shadow-lg text-gray-800 px-4 py-2 flex items-center justify-center gap-2 rounded-md cursor-pointer text-sm font-medium w-full">
            <ShoppingCart className="w-4 h-4"/>
            Buy this Now
        </button>
      </div>
    </div>
  );
};

export default ProductInteraction;