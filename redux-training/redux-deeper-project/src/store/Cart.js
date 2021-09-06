import { createSlice } from "@reduxjs/toolkit";

const initState = { amount: 0, items: [], isEmpty: true };

const cartSlice = createSlice({
    name: "cart",
    initialState: initState,
    reducers: {
        addItem(state, action) {
			// check if item is already added
            for (let i = 0; i < state.items.length; i++) {
                if (state.items[i].id === action.payload.id) {
                    return;
                }
            }
            state.amount++;
            state.items.push({
                id: action.payload.id,
                name: action.payload.name,
                price: action.payload.price,
                quantity: 1,
                total: action.payload.price,
            });

            // set not empty
            state.isEmpty = false;
        },
        increaseAmountItem(state, action) {
            for (let i = 0; i < state.items.length; i++) {
                if (state.items[i].id === action.payload.id) {
                    state.items[i].quantity++;
                    state.items[i].total =
                        state.items[i].price * state.items[i].quantity;
                    break;
                }
            }
        },
        decreaseAmountItem(state, action) {
            for (let i = 0; i < state.items.length; i++) {
                if (state.items[i].id === action.payload.id) {
                    state.items[i].quantity--;
                    state.items[i].total =
                        state.items[i].price * state.items[i].quantity;
                    // remove items if quantity is 0
                    if (state.items[i].quantity === 0) {
                        state.items.splice(i, 1);
                        if (state.items.length === 0) {
                            state.isEmpty = true;
                        }
                        state.amount--;
                    }

                    break;
                }
            }
        },
    },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
