/** @format */
import React, { useReducer } from 'react';

const initialState = 0;

//multiple reducer
const reducer = (state, action) => {
	switch (action.type) {
		case 'add':
			return state + action.value;
		case 'decrement':
			return state - action.value;
		case 'reset':
			return initialState;

		default:
			return state;
	}
	// switch (action.type) {
	// 	case 'add':
	// 		return { ...state, firstCounter: state.firstCounter + action.value };
	// 	case 'decrement':
	// 		return { ...state, firstCounter: state.firstCounter - action.value };
	// 	case 'add2':
	// 		return { ...state, secondCounter: state.secondCounter + action.value };
	// 	case 'decrement2':
	// 		return { ...state, secondCounter: state.secondCounter - action.value };
	// 	case 'reset':
	// 		return initialState;

	// 	default:
	// 		return state;
	// }
};
const CountReducer = () => {
	// const [count, setCount] = useState(0);

	// 1 - import useReducer()
	// 2 - use reducer(reducer , initialState)
	// 3 - return : [count , dispatch]
	// 4 - reducer (state , action)
	const [count, dispatchOne] = useReducer(reducer, initialState);
	const [countTwo, dispatchTwo] = useReducer(reducer, initialState);

	// const addOne = () => {
	// 	setCount((prevCount) => prevCount + 1);
	// };

	// const addFive = () => {
	// 	setCount((prevCount) => prevCount + 5);
	// };

	// const decrement = () => {
	// 	setCount((prevCount) => prevCount - 1);
	// };
	return (
		<div>
			<div>
				<h2>count one is : {count}</h2>
				<button onClick={() => dispatchOne({ type: 'add', value: 1 })}>
					add one
				</button>
				<button onClick={() => dispatchOne({ type: 'decrement', value: 1 })}>
					decrement
				</button>
				{/* multiple state */}
				<button onClick={() => dispatchOne({ type: 'add', value: 5 })}>
					add Five
				</button>
				<button onClick={() => dispatchOne({ type: 'reset' })}>reset</button>
			</div>

			<div>
				<h2>count two is : {countTwo}</h2>
				<button onClick={() => dispatchTwo({ type: 'add', value: 1 })}>
					add one_2
				</button>
				<button onClick={() => dispatchTwo({ type: 'decrement', value: 1 })}>
					decrement_2
				</button>
				<button onClick={() => dispatchTwo({ type: 'add', value: 5 })}>
					add Five_2
				</button>
			</div>
			<button onClick={() => dispatchTwo({ type: 'reset' })}>reset</button>
		</div>
	);
};
export default CountReducer;
