import React from 'react';

import CountDown from './components/CountDown';
import SpeedControl from './components/SpeedControl';
import CountDownForm from './components/CountDownForm';
import TimerNotification from './components/TimerNotification';

export default class App extends React.Component {

	
	constructor(props) {
		super(props);

		this.state = {
			count: 0,
			status: "",
			second: 0,
			countdownStatus: 'stopped',
			speed: 1000
		}
		this.timer_input = React.createRef();

	}

	start = (second) => {

		this.setState({
			count: second,
			second,
		})

		this.timer = setInterval((second) => {

			var newCount = this.state.count - 1;

			if (newCount === (this.state.second / 2)) {
				this.setState({
					status: "More than halfway there"
				})
			}

			this.setState({
				count: newCount >= 0 ? newCount : 0
			});
			
			if(newCount === 0){
				this.setState({
					count:0,
					status: "Time’s up!"
				});
				this.stop('stopped')
			}
		}, this.state.speed);
	}


	paused = (status) => {

		console.log(this.state.count)

		this.setState({
			countdownStatus: status
		})

		clearInterval(this.timer);
		this.timer=undefined;
	}

	stop = (status) => {

		this.setState({
			countdownStatus: status,
			count: 0,
			second: 0
		})

	    clearInterval(this.timer);
		this.timer=undefined;


		this.timer_input.current.value = ""
	}

	speedUp = (speed) => {

		clearInterval(this.timer);

		console.log(speed, this.state.count, this.timer)

		this.setState({speed: speed})

		this.start(this.state.count)
	}

	changeStatus = (status) => {

		if (status == "play") {

			if (this.timer_input.current.value == "" || this.timer_input.current.value == null) {
				alert('please enter a value')
			}
			else{

				var count = this.timer_input.current.value
				
				this.setState({
					countdownStatus: status,
					count: this.timer_input.current.value
				})

				this.start(this.timer_input.current.value)

			}
		}
		if (status == "stopped") {
			this.stop(status);
		}
		if (status == "paused") {
			this.paused(status)
		}

		console.log(status)
	}

	render(){
		return (
			<div>
				<nav className="navbar navbar-light bg-light">
				  <a className="navbar-brand" href="#">
				    <img src="/docs/4.3/assets/brand/bootstrap-solid.svg" width="30" height="30" className="d-inline-block align-top" alt="" />
				    Bootstrap
				  </a>
				</nav>

				<div className="container col-5">

					<div className="card text-center">
						<div className="card-header">
							<CountDownForm ref={this.timer_input} changeStatus={this.changeStatus} countdownStatus={this.state.countdownStatus} />
						</div>

						<div className="card-body">
							<h5 className="card-title">Count Down Timer</h5>
							<CountDown sec={this.state.count} changeStatus={this.changeStatus} countdownStatus={this.state.countdownStatus}/>
							<TimerNotification status={this.state.status} />
						</div>
						
						<div className="card-footer text-muted">
							<SpeedControl speedUp={this.speedUp} />
						</div>
					</div>

				</div>
			</div>
		)
	}
}