import { configureStore } from "@reduxjs/toolkit";
import Product from './slices/Product'
import cart from './slices/cart'


export const store = configureStore({
    reducer:{
       Product: Product,
        cart:cart
    }
})

