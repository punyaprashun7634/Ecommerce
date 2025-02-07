import { createSlice } from "@reduxjs/toolkit";

const checkoutSlice = createSlice({
    name: 'checkout',
    initialState : [],
    reducers : {
        addToCheckout(state, action){
            if(state && state.length>0)
                state.pop();
            state.push(action.payload);
        },
        removeFromCheckout(state, action){
            state.splice(state.findIndex((arrow) => arrow.id === action.payload.id), 1); 
        },
    },
});

export const {addToCheckout, removeFromCheckout} = checkoutSlice.actions;
export default checkoutSlice.reducer;