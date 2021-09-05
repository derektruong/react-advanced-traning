import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter";
import authSlice from "./auth";

const store = configureStore({
	reducer: {
		counterReducer: counterSlice.reducer,
		authReducer: authSlice.reducer,
	},
});



export default store;
