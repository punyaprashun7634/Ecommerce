import { createSlice } from "@reduxjs/toolkit";

const productSLice = createSlice({
    name: 'product',
    initialState : {
        product : []
    },
    reducers : {
        addToProduct(state, action){
            state.product = action.payload;
        }
    },
});

export const {addToProduct} = productSLice.actions;
export default productSLice.reducer;