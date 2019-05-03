import React from 'react';
import classNames from 'classnames';
	
export default ({sec, changeStatus, countdownStatus}) => {

	function formatSeconds(totalSeconds){
			
		var seconds=totalSeconds % 60;
		
		var minute= Math.floor(totalSeconds /60);
		
		if(seconds < 10)
		{
			seconds='0' + seconds;
		}
		if(minute < 10)
		{
			minute='0' + minute;
		}
		return minute +':'+ seconds;
	}

	function changeIconState() {
		if (countdownStatus == "play") {
			return <i onClick={() => {changeStatus('paused')}} className="far timer_icon fa-pause-circle"></i>	
		}
		if (countdownStatus == "paused") {
			return <i onClick={()=>{changeStatus('play')}} className="far timer_icon fa-play-circle"></i>	
		}
	}

	return (
		<div className="App">
			<header className="App-header">
				{formatSeconds(sec)}
				{changeIconState()}
			</header>
		</div>
	);
}

