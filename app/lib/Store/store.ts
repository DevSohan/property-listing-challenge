import { configureStore } from "@reduxjs/toolkit";
import propertiesReducer from "./propertiesSlice";


const store = configureStore({
    reducer: propertiesReducer
})

export default store