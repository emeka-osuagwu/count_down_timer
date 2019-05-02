import React from 'react';

export default React.forwardRef(({changeStatus, countdownStatus}, ref) =>  {

	function renderAction(countdownStatus) {
		if (countdownStatus === 'stopped') {
			return <button onClick={() => {changeStatus('play')}} type="button" className="btn btn-primary time_input_button">START</button>
		}

		if (countdownStatus === 'play') {
			return <button onClick={() => {changeStatus('stopped')}} type="button" className="btn btn-primary time_input_button">STOP</button>
		}		

		if (countdownStatus === "paused") {
			return <button onClick={() => {changeStatus('stopped')}} type="button" className="btn btn-primary time_input_button">STOP</button>
		}		
	}

	return (
		<div className="App">
			<form className="form-inline">
				<div className="form-group mx-sm-3 offset-mx-sm-3">
					<input ref={ref} type="text" name="time_input" className="form-control time_input" placeholder="(Min)" />
				</div>
				{renderAction(countdownStatus)}
			</form>
		</div>
	);
})
