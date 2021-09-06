import { createSlice } from "@reduxjs/toolkit";

const initState = {
    products: [
        {
            id: 1,
            name: "Product 1",
            description: "This is a first product - amazing!",
            price: 6,
        },
		{
			id: 2,
			name: "Product 2",
			description: "This is a second product - amazing!",
			price: 7.99,
		},
    ],
};

const productSlice = createSlice({
    name: "product",
    initialState: initState,
    reducers: {
        addProduct: (state, action) => {
            state.products.push({
                id: action.payload.id,
                name: action.payload.name,
                price: action.payload.price,
                description: action.payload.description,
            });
        },
        removeProduct: (state, action) => {
            state.products = state.products.filter(
                (product) => product.id !== action.payload.id
            );
        },
    },
});

export const productAction = productSlice.actions;
export default productSlice;
