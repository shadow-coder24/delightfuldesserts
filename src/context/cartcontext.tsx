"use client"
import { createContext } from "react"
import { Cart } from "../type/cart";

const cartContext = createContext<{

    cart: Cart,
    addtocart: (_product: unknown) => object,
    removefromcart: (product: unknown) => object,
    totalQuantity: () => number,
    clearCart: () => void
}>({ cart: {}, addtocart: () => ({}), removefromcart: () => ({}), totalQuantity: () => 0, clearCart: () => {} });

export default cartContext;