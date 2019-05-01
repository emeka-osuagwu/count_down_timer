import React from 'react';

export default ({startTimer}) => {

	function startTime(seconds) {
		startTimer(parseInt(seconds))
	}

	return (
		<div className="App">

			<form class="form-inline">
				<div class="form-group mx-sm-3 offset-mx-sm-3">
					<input type="password" name="time_input" class="form-control time_input" placeholder="(Min)" />
				</div>
				<button onClick={() => {startTime(100)}} type="button" class="btn btn-primary time_input_button">START</button>
			</form>

	
		</div>
	);
}

