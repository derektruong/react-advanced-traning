import Card from "../UI/Card";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/Cart";

import classes from "./ProductItem.module.css";

const ProductItem = (props) => {
    // redux-product-item
	const dispatch = useDispatch();

	//
    const { id, name, price, description } = props;

	// methods
	const addToCartHandler = () => {
		dispatch(cartActions.addItem({ id, name, price, description }));
	}

    return (
        <li className={classes.item}>
            <Card>
                <header>
                    <h3>{name}</h3>
                    <div className={classes.price}>${price.toFixed(2)}</div>
                </header>
                <p>{description}</p>
                <div className={classes.actions}>
                    <button onClick={addToCartHandler}>Add to Cart</button>
                </div>
            </Card>
        </li>
    );
};

export default ProductItem;
