import ProductItem from "./ProductItem";
import { useSelector } from "react-redux";

import classes from "./Products.module.css";

const Products = (props) => {
	// redux products
    const products = useSelector((state) => state.productReducer.products);

	// properties and methods
	const productList = products.map((product) => {
		return (
			<ProductItem
				key={product.id}
				id={product.id}
				name={product.name}
				price={product.price}
				description={product.description}
			/>
		);
	});

    return (
        <section className={classes.products}>
            <h2>Buy your favorite products</h2>
            <ul>
                {productList}
            </ul>
        </section>
    );
};

export default Products;
