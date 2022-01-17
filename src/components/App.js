// ./src/components/App.js
import React from 'react';
import Row from './Row';

import Logo from '../images/logo.png';

export default class App extends React.Component {
	render() {
		return (
			<>
				<img src={Logo} alt="" />
				<Row type="dark" />
				<Row space="medium" />
			</>
		);
	}
}
