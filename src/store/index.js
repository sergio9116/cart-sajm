import { configureStore } from "@reduxjs/toolkit";
import cart from "./slices/cart.slice";
import purchases from "./slices/purchases.slice";

const store = configureStore({
    reducer: {
        cart,
        purchases,
    }
});

export default store;
