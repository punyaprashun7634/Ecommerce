import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState : [],
    reducers : {
        addToCart(state, action){
            state.push(action.payload);
        },
        removeFromCart(state, action){
            state.splice(state.findIndex((arrow) => arrow.id === action.payload.id), 1); 
        },
        removeAllFromCart(state, action){
            state.splice(0,state.length);
        }
    },
});

export const {addToCart, removeFromCart, removeAllFromCart} = cartSlice.actions;
export default cartSlice.reducer;