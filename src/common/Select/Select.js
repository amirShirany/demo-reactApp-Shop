/** @format */
import React from 'react';
import styles from './Select.module.css';
import Select from 'react-select';

//  ...spread operator
//  ...rest operator

const SelectComponent = ({ title, ...rest }) => {
	console.log(rest);
	return (
		<div className={styles.selectContainer}>
			<span>{title}</span>
			<Select {...rest} className={styles.select} />
		</div>
	);
};

export default SelectComponent;
