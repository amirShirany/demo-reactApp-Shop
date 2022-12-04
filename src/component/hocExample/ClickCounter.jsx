/** @format */
import WithCounter from '../hoc/withCount.js';

const ClickCounter = ({ count, incrementCount, name }) => {
	console.log(name);
	return (
		<div>
			<h3 onClick={incrementCount}>Click {count} Times</h3>
		</div>
	);
};

export default WithCounter(ClickCounter, 5);
