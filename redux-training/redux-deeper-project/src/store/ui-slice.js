import { createSlice } from "@reduxjs/toolkit";

const initState = { isCartShown: false, notification: null };

const uiSlice = createSlice({
    name: "ui",
	initialState: initState,
	reducers: {
		toggleCart: (state) => {
			state.isCartShown = !state.isCartShown;
		},

		showNotification: (state, action) => {
			state.notification = {
				status: action.payload.status,
				title: action.payload.title,
				message: action.payload.message,
			};
		}

	}
});

export const uiActions = uiSlice.actions;
export default uiSlice;
