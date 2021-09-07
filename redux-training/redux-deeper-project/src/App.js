import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sendCartData, fetchCartData } from "./store/cart/cart-action";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";

let isInitial = true;

function App() {
    // redux
    const dispatch = useDispatch();
    const isCartShown = useSelector((state) => state.uiReducer.isCartShown);
    const cart = useSelector((state) => state.cartReducer);
    const notification = useSelector((state) => state.uiReducer.notification);

    // hooks
	useEffect(() => {
		dispatch(fetchCartData());
	}, [dispatch]);

    useEffect(() => {
		if (isInitial) {
			isInitial = false;
			return;
		}
		if(cart.isChange) {
			dispatch(sendCartData(cart));
		}
		
	}, [cart, dispatch]);

    return (
        <Fragment>
            {notification && (
                <Notification
                    status={notification.status}
                    title={notification.title}
                    message={notification.message}
                />
            )}
            <Layout>
                {isCartShown && <Cart />}
                <Products />
            </Layout>
        </Fragment>
    );
}

export default App;

// if (isInitial) {
//     isInitial = false;
//     return;
// }
// const sendCartData = async () => {
// dispatch(
//     uiActions.showNotification({
//         status: "pending",
//         title: "Sending...",
//         message: "Sending cart data to server...",
//     })
// );

// const response = await fetch(
//     "https://react-http-63d69-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
//     {
//         method: "PUT",
//         body: JSON.stringify(cart),
//     }
// );

// if (response.status !== 200) {
//     throw new Error("Sending data to server failed");
// }

// dispatch(
//     uiActions.showNotification({
//         status: "success",
//         title: "Sent data success",
//         message: "Sent cart data successfully!",
//     })
// );
// };
// sendCartData().catch((error) => {
//     dispatch(
//         uiActions.showNotification({
//             status: "error",
//             title: "Error!",
//             message: "Sending cart data failed!",
//         })
//     );
// });
