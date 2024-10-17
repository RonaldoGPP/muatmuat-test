import { createSlice } from "@reduxjs/toolkit";


const productSlice = createSlice({
    name: 'products',
    initialState : {
        products: [],
    },
    reducers: {
        addProducts: (state, action) => {
            state.products.push(action.payload);
        },
        editProducts: (state, action) => {
            const index = state.products.findIndex(product => product.id === action.payload.id);
            if (index !== -1){
                state.products[index] = action.payload;
            }
        },
        deleteProducts: (state, action) => {
            state.products = state.products.filter(product => product.id !== action.payload);
        },
    }
});

export const { addProducts, editProducts, deleteProducts } = productSlice.actions;
export default productSlice.reducer;