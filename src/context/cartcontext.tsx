"use client"
import { createContext } from "react"

const cartContext = createContext({

    cart: {},
    addtocart: (product: any)=>{},
    removefromcart: (product: any)=>{},
    totalQuantity: ()=>{},
    clearCart: ()=>{}
})

export default cartContext;