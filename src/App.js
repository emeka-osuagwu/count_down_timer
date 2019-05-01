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
	}

	componentWillMount(){
		// this.start(3)
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
				this.stop()
			}
		}, this.state.speed);
	}

	paused = () => {
		clearInterval(this.timer);
		this.timer=undefined;
	}

	stop = () => {
	    clearInterval(this.timer);
		this.timer=undefined;
	}

	speedUp = (speed) => {

		clearInterval(this.timer);

		console.log(speed, this.state.count, this.timer)

		this.setState({speed: speed})

		this.start(this.state.count)
	}

	render(){
		return (
			<div>

				<nav class="navbar navbar-light bg-light">
				  <a class="navbar-brand" href="#">
				    <img src="/docs/4.3/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt="" />
				    Bootstrap
				  </a>
				</nav>

				<div className="container col-5">

					<div class="card text-center">
						<div class="card-header">
							<CountDownForm startTimer={this.start} />
						</div>

						<div class="card-body">
							<h5 class="card-title">Count Down Timer</h5>
							<CountDown sec={this.state.count} pausedTimer={this.paused} />
							<TimerNotification status={this.state.status} />
						</div>
						
						<div class="card-footer text-muted">
							<SpeedControl speedUp={this.speedUp} />
						</div>
					</div>

				</div>
			</div>
		)
	}



}