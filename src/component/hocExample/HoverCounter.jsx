/** @format */
import WithCounter from '../hoc/withCount';

const HoverCounter = ({ count, incrementCount }) => {
	return (
		<div>
			<h3 onMouseOver={incrementCount}> Hoverd {count} Times</h3>
		</div>
	);
};

export default WithCounter(HoverCounter, 10);
