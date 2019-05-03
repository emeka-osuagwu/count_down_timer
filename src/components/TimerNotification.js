import React from 'react';
import className from 'classnames'

export default ({status, notification_status}) => {
	return (
		<div className="App">
			<p className={className('card-text', notification_status)}>{status}</p>
		</div>
	);
}

