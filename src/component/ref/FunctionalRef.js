/** @format */
// 1. useRef() => DOM access
// 2. to store the value of previous state !!!!

import { useRef, useEffect } from 'react';

const FunctionalRef = () => {
	const inputRef = useRef();

	useEffect(() => {
		inputRef.current.focus();
	}, []);
	return <input type='text' ref={inputRef} />;
};

export default FunctionalRef;
