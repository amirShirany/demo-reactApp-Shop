/** @format */
import React from 'react';
import styles from './product.module.css';
import { FcFullTrash } from 'react-icons/fc';
import { useEffect } from 'react';
// import { UserContext, websiteContext } from '../../App';

const Product = ({ onChange, onIncrement, onDecrement, onDelete, product }) => {
	console.log('Product.js render');
	// CDM + CDU + CWUM => useEffect
	useEffect(() => {
		// clean-up =>
		console.log('Procuct useEffect');
		return () => {
			console.log('Product CWUM');
		};
	}, [product]);

	// useCallback() ;useContext(); useRef(); useContext();

	// const user = useContext(UserContext);
	// const website = useContext(websiteContext);
	// console.log(user, website);

	return (
		<div className={styles.product}>
			<p> Product Name : {product.title} course</p>
			<p> Price : {product.price} </p>
			<span className={styles.value}>{product.quantity}</span>
			{/* <input
				type='text'
				className={styles.input}
				value={product.title}
				onChange={onChange}></input> */}
			<button
				onClick={onDecrement}
				className={`${styles.button} ${
					product.quantity === 1 && styles.remove
				}`}>
				{product.quantity > 1 ? '-' : <FcFullTrash />}
			</button>
			<button
				className={`${styles.button} ${styles.inc}`}
				onClick={onIncrement}>
				+
			</button>
			<button className={styles.button} onClick={onDelete}>
				delete
			</button>
		</div>
	);
};

export default Product;

// /** @format */
// import styles from './product.module.css';
// import { FcFullTrash } from 'react-icons/fc';
// import React, { Component } from 'react';

// class Product extends Component {
// 	componentWillUnmount() {
// 		console.log('Product.js componentWillUNmount');
// 	}
// 	render() {
// 		console.log('product.js render', 11111);
// 		return (
// 			<div className={styles.product}>
// 				<p> Product Name : {this.props.product.title} course</p>
// 				<p> Price : {this.props.product.price} </p>
// 				<span className={styles.value}>{this.props.product.quantity}</span>
// 				<input
// 					type='text'
// 					className={styles.input}
// 					value={this.props.product.title}
// 					onChange={this.props.onChange}></input>
// 				<button
// 					onClick={this.props.onDecrement}
// 					className={`${styles.button} ${
// 						this.props.product.quantity === 1 && styles.remove
// 					}`}>
// 					{this.props.product.quantity > 1 ? '-' : <FcFullTrash />}
// 				</button>
// 				<button
// 					className={`${styles.button} ${styles.inc}`}
// 					onClick={this.props.onIncrement}>
// 					+
// 				</button>
// 				<button className={styles.button} onClick={this.props.onDelete}>
// 					delete
// 				</button>
// 			</div>
// 		);
// 	}
// }

// export default Product;

//Functional component
