/** @format */
import React, { PureComponent } from 'react';

class PureComp extends PureComponent {
	// prevState + prevProps => prevent (should component will Update)
	render(props) {
		console.log('Pure Comp');
		return <div>pure comp - {this.props.name}</div>;
	}
}

export default PureComp;
