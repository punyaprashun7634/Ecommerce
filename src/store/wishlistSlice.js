import { createSlice } from "@reduxjs/toolkit";

const wishListSlice = createSlice({
    name: 'wishlist',
    initialState : [],
    reducers : {
        addToWishlist(state, action){
            state.push(action.payload);
        },
        removeFromWishlist(state, action){
            state.splice(state.findIndex((arrow) => arrow.id === action.payload.id), 1); 
        },
    },
});

export const {addToWishlist, removeFromWishlist} = wishListSlice.actions;
export default wishListSlice.reducer;