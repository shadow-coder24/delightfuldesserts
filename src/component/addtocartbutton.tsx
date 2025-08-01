"use client"
import React, { memo, useContext } from "react";
import cartContext from "@/context/cartcontext";

type Product = {
  productid: number;
  productname: string;
  productdescription: string;
  productprice: number;
  productimage: string;
};

type Props = {
  product: Product;
};

// eslint-disable-next-line react/display-name
export const Addtocartbutton = memo(({ product }: Props) => {
  const { cart, addtocart, removefromcart } = useContext(cartContext);

  const increase = () => {
    addtocart({ ...product, quantity: 1 });
  };

  const decrease = () => {
    removefromcart({ ...product, quantity: 1 });
  };

  const quantity = cart[product.productid]?.quantity || 0;

  return quantity === 0 ? (
    <button
      onClick={increase}
      className="w-[130px] h-[40px] text-browndark bg-yellowmuted rounded-xl font-bold"
    >
      Add To Cart
    </button>
  ) : (
    <div className="flex">
      <button
        onClick={decrease}
        className="text-browndark bg-yellowmuted w-[30px] h-[40px] rounded-tl-xl rounded-bl-xl font-bold text-lg"
      >
        -
      </button>
      <span className="bg-white text-black font-bold w-[70px] h-[40px] text-center text-lg flex items-center justify-center">
        {quantity}
      </span>
      <button
        onClick={increase}
        className="text-browndark bg-yellowmuted w-[30px] h-[40px] rounded-tr-xl rounded-br-xl font-bold text-lg"
      >
        +
      </button>
    </div>
  );
});
