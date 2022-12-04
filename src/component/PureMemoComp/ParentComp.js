/** @format */
import React, { Component } from 'react';
import RegComp from './RegComp';
// import PureComp from './PureComp';
import MemoComp from './MemoComp';

class ParentComp extends Component {
	state = { name: 'Amir' };

	componentDidMount() {
		setInterval(() => {
			this.setState({ name: 'Amirhossein' });
		}, 1000);
	}

	render() {
		console.log('Parent Comp -----------');
		return (
			<div>
				Parent Component
				<RegComp name={this.state.name} />
				{/* <PureComp name={this.state.name} /> */}
				<MemoComp name={this.state.name} />
			</div>
		);
	}
}

export default ParentComp;
