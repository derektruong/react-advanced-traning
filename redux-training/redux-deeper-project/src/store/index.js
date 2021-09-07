import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart/cart-slice";
import productsSlice from "./product-slice";
import uiSlice from "./ui-slice";

const store = configureStore({
	reducer: {
		uiReducer: uiSlice.reducer,
		cartReducer: cartSlice.reducer,
		productReducer: productsSlice.reducer,
	},
});

export default store;