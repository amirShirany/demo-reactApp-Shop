/** @format */
import React from 'react';
import './App.css';
import ProductList from './component/ProductList/ProductList';
import NavBar from './component/NavBar/NavBar';
import Filter from './component/Filter/Filter';
import ProductsProvider from './component/Provider/ProductsProvider';
import Wrapper from './component/hoc/Wrapper';
const App = (props) => {
	// state = [{ ... }];
	// handler => state
	return (
		<>
			<ProductsProvider>
				<NavBar />
				<Filter />
				<ProductList />
			</ProductsProvider>
		</>
	);
};
export default Wrapper(App, 'container');
