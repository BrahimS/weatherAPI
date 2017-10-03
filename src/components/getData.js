// Fetch data from the weather API
import React, { Component } from "react";
import axios from "axios";
export default class GetData extends Component {
  constructor(props) {
    super(props);
    this.state = { response: {} };

    axios
      .get(
        "http://api.openweathermap.org/data/2.5/weather?q=geneva,sw&APPID=ac0cfa66f282d661a006b687796d1b65&units=metric"
      )
      .then(response => {
        this.setState({ response: response.data.main });
        console.log(this.state.response);
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <ul className="weather_list">
        <li key={this.index}> Temperature: {this.state.response.temp}</li>
        <li key={this.index}> Pressure: {this.state.response.pressure}</li>
        <li key={this.index}> Humidity: {this.state.response.humidity}</li>
      </ul>
    );


  }
}
