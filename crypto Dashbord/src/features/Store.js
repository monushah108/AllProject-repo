import { configureStore } from "@reduxjs/toolkit";
import CryptoSlice from './cryptoReducer'

export const store = configureStore({
    reducer:{
        crypto : CryptoSlice
    }
})


