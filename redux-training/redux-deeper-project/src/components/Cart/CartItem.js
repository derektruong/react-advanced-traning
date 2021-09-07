import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart/cart-slice";

const CartItem = (props) => {
    // redux
    const dispatch = useDispatch();
    // properties and methods
    const { id, name, price, quantity, total } = props.item;

    const decreaseAmountHandler = () => {
        dispatch(cartActions.decreaseAmountItem({ id: id }));
    };

    const increaseAmountHandler = () => {
        dispatch(cartActions.increaseAmountItem({ id: id }));
    };

    return (
        <li className={classes.item}>
            <header>
                <h3>{name}</h3>
                <div className={classes.price}>
                    ${total.toFixed(2)}{" "}
                    <span className={classes.itemprice}>
                        (${price.toFixed(2)}/item)
                    </span>
                </div>
            </header>
            <div className={classes.details}>
                <div className={classes.quantity}>
                    x <span>{quantity}</span>
                </div>
                <div className={classes.actions}>
                    <button onClick={decreaseAmountHandler}>-</button>
                    <button onClick={increaseAmountHandler}>+</button>
                </div>
            </div>
        </li>
    );
};

export default CartItem;
