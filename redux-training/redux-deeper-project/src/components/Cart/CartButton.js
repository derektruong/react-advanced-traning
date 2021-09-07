import classes from "./CartButton.module.css";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";

const CartButton = (props) => {
    //redux cart amount
    const dispatch = useDispatch();
    const cartAmount = useSelector((state) => state.cartReducer.amount);

    // properties and methods
    const toggleCartHandler = () => {
        dispatch(uiActions.toggleCart());
    };
    return (
        <button className={classes.button} onClick={toggleCartHandler}>
            <span>My Cart</span>
            <span className={classes.badge}>{cartAmount}</span>
        </button>
    );
};

export default CartButton;
