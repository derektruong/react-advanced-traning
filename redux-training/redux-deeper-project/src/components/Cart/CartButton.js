import classes from "./CartButton.module.css";
import { useSelector } from "react-redux";

const CartButton = (props) => {
	//redux cart amount
	const cartAmount = useSelector((state) => state.cartReducer.amount);
    return (
        <button className={classes.button}>
            <span>My Cart</span>
            <span className={classes.badge}>{cartAmount}</span>
        </button>
    );
};

export default CartButton;
