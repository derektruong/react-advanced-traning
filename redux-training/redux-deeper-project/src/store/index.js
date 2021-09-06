import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./Cart";
import productsSlice from "./Product";

const store = configureStore({
	reducer: {
		cartReducer: cartSlice.reducer,
		productReducer: productsSlice.reducer,
	},
});

export default store;