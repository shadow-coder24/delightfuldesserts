"use client"
import { createContext } from "react"
import { Cart, CartItem } from "../type/cart";

const cartContext = createContext<{

    cart: Cart,
    addtocart: (product: CartItem) => object,
    removefromcart: (product: CartItem) => object,
    totalQuantity: () => number,
    clearCart: () => void
}>({ cart: {}, addtocart: () => ({}), removefromcart: () => ({}), totalQuantity: () => 0, clearCart: () => {} });

export default cartContext;