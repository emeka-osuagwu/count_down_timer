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
			speed: 1000,
			notification_state: ""
		}
		this.timer_input = React.createRef();
	}

	start = () => {

		this.timer = setInterval(() => {

			var newCount = this.state.count - 1;

			if (newCount === (this.state.second / 2)) {
				this.setState({
					status: "More than halfway there"
				})
			}

			if (newCount % 60 === 20) {
				this.setState({
					notification_state: "turn_red"
				})
			}

			if (newCount % 60 === 10) {
				this.setState({
					notification_state: "blinking"
				})
			}

			this.setState({
				count: newCount >= 0 ? newCount : 0
			});
			
			if(newCount === 0){
				this.setState({
					count:0,
					status: "Time’s up!",
					notification_state: ""
				});
				this.stop('stopped')
			}
		}, this.state.speed);
	}

	paused = (status) => {

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
		this.setState({ speed }, () => {
			clearInterval(this.timer);
			this.start(this.state.count)
		}); 
	}

	changeStatus = (status) => {

		var count = (this.timer_input.current.value) ? this.timer_input.current.value : 0; 

		if (status === "start") {
			
			if (!count >  0) {
				alert('please enter a value')
			}
			else{

				this.setState({
					countdownStatus: "play",
					second: count,
					count,
				})

				this.start()
			}
		}

		if (status === "play") {
			this.start()
			this.setState({
				countdownStatus: "play"
			})
		}

		if (status === "stopped") {
			this.stop(status);
		}
		if (status === "paused") {
			this.paused(status)
		}
	}

	render(){
		return (
			<div>
				<nav className="navbar navbar-light bg-light">
				  <a className="navbar-brand" href="#">
				    <img src="https://previews.123rf.com/images/urfandadashov/urfandadashov1808/urfandadashov180816788/107604672-timer-vector-icon-isolated-on-transparent-background-timer-logo-concept.jpg" width="30" height="30" className="d-inline-block align-top" alt="" />
				    Timer
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
							<TimerNotification status={this.state.status} notification_status={this.state.notification_state} />
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