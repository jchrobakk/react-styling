import React from 'react';
import classNames from 'classnames';

import './../scss/Row.scss';

export default function Row(props) {
	const { type, space } = props;

	const className = classNames('Row', {
		[`Row--${type}`]: type,
		[`Row--space-${space}`]: space,
	});

	return <div className={className}>React: Styling</div>;
}
