
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import GetData from './components/getData';
import './sass/index.sass';


const GetTime = (props) => {
	return (
			<p> { props.time }</p>
	);
}
class Clock extends React.Component {
	constructor(props) {
		super(props);
		this.state = { date : new Date() };
		//this.timerID = setInterval(() => this.tick(), 1000);

	}
	// Lifecycle Hooks
	componentDidMount() {
		this.timerID = setInterval(() => this.tick(), 1000);
		console.log('IN');
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
		console.log('OUT');
	}

	tick() {
		this.setState({
			date: new Date()
		});
	}

	render() {
		return  (
				<div>
					<h1 className="heading">Geneva </h1>
					<span className="date_info"> { this.state.date.toLocaleDateString() }</span>
					<GetTime time={this.state.date.toLocaleTimeString()}/>
					<GetData />
				</div>
		);
 }
}
ReactDOM.render(<Clock />, document.querySelector('#app'));
