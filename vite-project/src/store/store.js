import { configureStore } from "@reduxjs/toolkit";
import userSlice from './userData'
 export const store=configureStore({
    reducer:{
        userData:userSlice
    }
 })