/** @format */

import React, { useState, useRef, useEffect } from 'react';

const FunctionalReset = () => {
	const [inputValue, setInputValue] = useState('');
	const [count, setCount] = useState(0);

	const inputRef = useRef();
	const previousCount = useRef();
	const previousValue = useRef();

	const inputHandler = (e) => {
		setInputValue(e.target.value);
	};

	// console.log('re-render', inputValue);
	// console.log('previous-value', previousValue.current);

	useEffect(() => {
		previousValue.current = inputValue; // dose not re-render component
	}, [inputValue]);

	useEffect(() => {
		previousCount.current = count; // dose not re-render component
	}, [count]);

	const inputReset = () => {
		setInputValue('');
		inputRef.current.focus();
	};

	return (
		<div>
			<input
				ref={inputRef}
				type='text'
				onChange={inputHandler}
				value={inputValue}></input>
			<button onClick={inputReset}>Reset</button>
			<p>
				my name is {inputValue} and it used to be {previousValue.current}
			</p>
			<hr></hr>
			<hr></hr>
			<hr></hr>

			<div>
				<button onClick={() => setCount(Math.ceil(Math.random() * 100))}>
					generate random
				</button>
				<p>count is {count}</p>
				<p>previous count is {previousCount.current}</p>
			</div>
		</div>
	);
};

export default FunctionalReset;
