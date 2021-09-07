import { uiActions } from "../ui-slice";
import { cartActions } from "./cart-slice";

export const fetchCartData = () => {
    return async (dispatch) => {
		dispatch(
			uiActions.showNotification({
				status: "pending",
				title: "Fetching...",
				message: "Fetching cart data from server...",
			})
		);
        const fetchData = async () => {
            const response = await fetch(
                "https://react-http-63d69-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json"
            );
            if (response.status !== 200) {
                throw new Error("Couldn't fetch data");
            }
            const data = await response.json();
            return data;
        };

        try {
            const cartData = await fetchData();

            if (!cartData) {
                dispatch(cartActions.replaceCart({ amount: 0, items: [] }));
            } else {
				dispatch(cartActions.replaceCart(cartData));
			}

			dispatch(
				uiActions.showNotification({
					status: "pending",
					title: "Fetched",
					message: "Fetched cart data from server successfully",
				})
			);
            
        } catch (error) {
            dispatch(
                uiActions.showNotification({
                    status: "error",
                    title: "Error",
                    message: error.message,
                })
            );
        }
    };
};

export const sendCartData = (cartData) => {
    return async (dispatch) => {
        dispatch(
            uiActions.showNotification({
                status: "pending",
                title: "Sending...",
                message: "Sending cart data to server...",
            })
        );
        const sendRequest = async () => {
            const response = await fetch(
                "https://react-http-63d69-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
                {
                    method: "PUT",
                    body: JSON.stringify(cartData),
                }
            );

            if (response.status !== 200) {
                throw new Error("Sending data to server failed");
            }
        };

        try {
            await sendRequest();

            dispatch(
                uiActions.showNotification({
                    status: "success",
                    title: "Sent data success",
                    message: "Sent cart data successfully!",
                })
            );
        } catch (error) {
            dispatch(
                uiActions.showNotification({
                    status: "error",
                    title: "Error",
                    message: error.message,
                })
            );
        }
    };
};
