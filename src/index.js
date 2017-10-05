import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import GetData from './components/getData';
import {GetTime} from './components/getTime';
import PropTypes from 'prop-types';
import './sass/index.sass';



class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { date : new Date() };
	}
	// Lifecycle Hooks
	componentDidMount() {
		this.myTimer = setInterval(() => this.tick(), 1000);
		console.log('IN');
	}

	componentWillUnmount() {
		clearInterval(this.myTimer);
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

App.propTypes = {
	date: PropTypes.string,
	myTimer: PropTypes.func
};

ReactDOM.render(<App />, document.querySelector('#app'));
