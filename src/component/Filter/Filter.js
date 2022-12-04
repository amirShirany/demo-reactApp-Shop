/** @format */
import React, { useState } from 'react';
import styles from './filter.module.css';
import SelectComponent from '../../common/Select/Select';
import SearchBar from '../../common/Search/SearchBar';
import { useProductsActions } from '../Provider/ProductsProvider';

const filterOptions = [
	{ value: '', label: 'All' },
	{ value: 'XS', label: 'XS' },
	{ value: 'S', label: 'S' },
	{ value: 'M', label: 'M' },
	{ value: 'L', label: 'L' },
	{ value: 'XL', label: 'XL' },
	{ value: 'XXL', label: 'XXL' },
];
const sortOptions = [
	{ value: 'highest', label: 'highest' },
	{ value: 'lowest', label: 'lowest' },
];

const Filter = () => {
	const dispatch = useProductsActions();
	const [filter, setFilter] = useState('');
	const [sort, setSort] = useState('');

	const filterHandler = (selectedOPtions) => {
		// console.log(selectedOPtions);
		dispatch({ type: 'filter', selectedOPtions });
		dispatch({ type: 'sort', selectedOPtions: sort });
		setFilter(selectedOPtions);
	};

	const sortHandler = (selectedOPtions) => {
		dispatch({ type: 'sort', selectedOPtions });
		setSort(selectedOPtions);
	};

	return (
		<section>
			<SearchBar filter={filter} />
			<div className={styles.filter}>
				<h3>filter products based on:</h3>
				<SelectComponent
					title='filter by size'
					value={filter}
					onChange={filterHandler}
					options={filterOptions}
				/>
				<SelectComponent
					title='sort by price'
					value={sort}
					onChange={sortHandler}
					options={sortOptions}
				/>
			</div>
		</section>
	);
};

export default Filter;
