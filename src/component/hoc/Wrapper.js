/** @format */
import React from 'react';
// HOC .... > Higher Order Component
// hoc => function
// input : component....=> output : NewComponent
// why ? to share logic (functionality) between component

// const Wrapper = (props) => {
// 	return <div className={props.className}>{props.children}</div>;
// };

const Wrapper = (WrappedComponent, className) => {
	return (props) => {
		return (
			<div className={className}>
				<WrappedComponent {...props} />
			</div>
		);
	};
};
export default Wrapper;
