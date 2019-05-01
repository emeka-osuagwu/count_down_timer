import React from 'react';
import classNames from 'classnames';

const formatSeconds = function (totalSeconds){
		
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

const changeIconState = function(time_state){
	if (time_state == "play") {
		return "fa-pause-circle";	
	}
	else{
		return "fa-play-circle"

	}
}
	
export default ({sec, pausedTimer}) => {

	function paused() {
		pausedTimer()
	}

	return (
		<div className="App">
			<header className="App-header">
				{formatSeconds(sec)}
				<i onClick={()=>{paused()}} className={classNames('far timer_icon', changeIconState('play'))}></i>
			</header>
		</div>
	);
}

