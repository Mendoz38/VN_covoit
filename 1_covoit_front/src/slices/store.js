import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import salonReducer from "./salonSlice";

const store = configureStore({
    reducer: {
        user: userReducer,
        salon: salonReducer,
    }     
})

export default store;
