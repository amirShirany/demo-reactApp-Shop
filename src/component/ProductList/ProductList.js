/** @format */
import React from 'react';
import Product from '../Product/Product';
import { useProducts, useProductsActions } from '../Provider/ProductsProvider';

const ProductList = (props) => {
	const products = useProducts();
	const dispatch = useProductsActions();

	const renderProduct = () => {
		if (products.length === 0) return <h2>There is no product in cart !!!</h2>;
		return products.map((product, index) => {
			return (
				<Product
					// title={product.title}
					// price={product.price}
					// quantity={product.quantity}
					product={product}
					key={index}
					onDelete={() => dispatch({ type: 'remove', id: product.id })}
					onIncrement={() => dispatch({ type: 'increment', id: product.id })}
					onDecrement={() => dispatch({ type: 'decrement', id: product.id })}
					onChange={(e) => dispatch({ type: 'edit', id: product.id, event: e })}
				/>
			);
		});
	};
	return (
		<div>
			{!products.length ? ( // if ? => (   ): (else)
				<div>go to Shopping !!!</div>
			) : (
				<div>'Welcome'</div>
			)}
			{renderProduct()}
		</div>
	);
};

export default ProductList;
