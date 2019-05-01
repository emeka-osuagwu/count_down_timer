import React from 'react';

export default ({speedUp}) => {

	function updateSpeed(speed) {
		speedUp(speed)
	}

	return (
		<div className="App">
			<button type="button" class="btn btn-primary count_down_button" onClick={() => {updateSpeed(1000)}}>1X</button>
			<button type="button" class="btn btn-primary count_down_button" onClick={() => {updateSpeed(100)}}>1.5X</button>
			<button type="button" class="btn btn-primary count_down_button" onClick={() => {updateSpeed(10)}}>2X</button>
		</div>
	);
}

