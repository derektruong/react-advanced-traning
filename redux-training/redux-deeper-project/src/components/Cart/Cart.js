import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = (props) => {
    // redux
    const cartList = useSelector((state) => state.cartReducer.items);
    const isCartEmpty = useSelector((state) => state.cartReducer.isEmpty);
    // properties and methods
    const cartItems = cartList.map((item) => {
        return (
            <CartItem
                key={item.id}
                item={{
					id: item.id,
                    name: item.name,
                    price: item.price,
                    quantity: item.quantity,
                    total: item.total,
                }}
            />
        );
    });

    return (
        <Card className={classes.cart}>
            <h2>Your Shopping Cart</h2>
            <ul>{isCartEmpty ? <p>Cart is empty</p> : cartItems}</ul>
        </Card>
    );
};
export default Cart;
