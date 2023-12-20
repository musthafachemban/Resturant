
import restuarentSlice from "./restuarentSlice";

import { configureStore } from "@reduxjs/toolkit";



const store = configureStore({
    reducer:{
        restuarentSlice
    }
})

export default store