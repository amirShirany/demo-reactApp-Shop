/** @format */
import React from 'react';
import { useProducts } from '../Provider/ProductsProvider';
import styles from './navBar.module.css';
// import React, { Component } from 'react';

const NavBar = () => {
	const products = useProducts();
	const totalItems = products.filter((p) => p.quantity > 0).length;
	console.log('NavBAr.js render');
	return (
		<header className={styles.navBar}>
			<h2>fronthooks.ir Shopping</h2>
			<span>{totalItems}</span>
		</header>
	);
};

export default NavBar;
