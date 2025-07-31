"use client"
import { createContext } from "react"

const cartContext = createContext({

    cart: {},
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    addtocart: (_product: unknown) => {},
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    removefromcart: (product: unknown) => {},
    totalQuantity: () => {},
    clearCart: () => {}
})

export default cartContext;