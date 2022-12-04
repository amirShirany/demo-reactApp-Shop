/** @format */

import React, { Component } from 'react';

class RegComp extends Component {
	render(props) {
		console.log('Reg Comp');
		return <div>reg - comp {this.props.name}</div>;
	}
}

export default RegComp;
