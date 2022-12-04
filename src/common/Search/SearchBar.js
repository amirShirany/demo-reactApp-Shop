/** @format */
import React, { useState } from 'react';
import { useProductsActions } from '../../component/Provider/ProductsProvider';
import styles from './Search.module.css';

const SearchBar = ({ filter }) => {
	const dispatch = useProductsActions();
	const [value, setValue] = useState('');

	const changeHandler = (e) => {
		dispatch({ type: 'filter', selectedOPtions: filter });
		dispatch({ type: 'search', event: e });
		setValue(e.target.value);
	};
	return (
		<div className={styles.formControl}>
			<div>search for :</div>
			<input
				type='text'
				placeholder='search for...'
				onChange={changeHandler}
				value={value}></input>
		</div>
	);
};

export default SearchBar;
