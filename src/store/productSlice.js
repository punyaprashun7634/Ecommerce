import { createSlice } from "@reduxjs/toolkit";

const productSLice = createSlice({
    name: 'product',
    initialState : [],
    reducers : {
        addToProduct(state, action){
            state.push(...action.payload);
        }
    },
});

export const {addToProduct} = productSLice.actions;
export default productSLice.reducer;