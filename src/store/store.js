import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice';
import wishListReducer from './wishlistSlice';
import checkoutReducer from './checkoutSlice';
import productReducer from './productSlice';

const store = configureStore({
    reducer:{
        cart : cartReducer,
        wishlist: wishListReducer,
        checkout : checkoutReducer,
        product : productReducer
    }
});

export default store;